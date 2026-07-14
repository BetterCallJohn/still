export const meta = {
  name: 'still-multiply-posts',
  description: 'Génère 4-8 posts (carrousels) distincts par livre, avec passe de vérification anti-invention',
  phases: [
    { title: 'Draft', detail: 'un agent rédige les posts par livre' },
    { title: 'Verify', detail: 'un agent élague tout ce qui est inventé/forcé' },
  ],
}

const LOC = {
  type: 'object',
  additionalProperties: false,
  properties: { fr: { type: 'string' }, en: { type: 'string' } },
  required: ['fr', 'en'],
}
const SLIDE = {
  type: 'object',
  additionalProperties: false,
  properties: {
    kind: { type: 'string', enum: ['cover', 'point', 'quote', 'takeaway'] },
    title: LOC,
    body: LOC,
    attribution: LOC,
  },
  required: ['kind', 'title'],
}
const POST = {
  type: 'object',
  additionalProperties: false,
  properties: {
    concept: LOC,
    caption: LOC,
    tags: { type: 'array', items: { type: 'string' } },
    slides: { type: 'array', items: SLIDE },
  },
  required: ['concept', 'caption', 'tags', 'slides'],
}
const OUT = {
  type: 'object',
  additionalProperties: false,
  properties: { posts: { type: 'array', items: POST } },
  required: ['posts'],
}

const draftPrompt = (b) => `Tu crées des posts éducatifs façon carrousel Instagram (app "still", apprendre en scrollant) pour le livre suivant :

TITRE : "${b.title}"
AUTEUR : ${b.author}
CATÉGORIE : ${b.category}

Produis PLUSIEURS posts SÉPARÉS (vise 4 à 8), chacun portant sur UN concept, un cadre, une idée ou un passage DISTINCT et réellement présent dans CE livre.

Chaque post = un carrousel de 4 à 6 slides :
- 1 slide "cover" : énonce le concept du post (titre court + une phrase d'accroche en body).
- 2 à 4 slides "point" : expliquent le concept (titre court + body de 1-2 phrases concrètes).
- optionnel : 1 slide "quote" UNIQUEMENT si tu connais une citation réelle et célèbre de ce livre/auteur (mets l'auteur en attribution). Sinon n'en mets pas.
- 1 slide "takeaway" : ce qu'il faut retenir / comment l'appliquer.

Chaque post a aussi : concept (label court du sujet), caption (accroche façon Instagram, 1 phrase + éventuel emoji), tags (3-4 mots-clés sans #).

TOUT le texte doit être bilingue : fr ET en, pour chaque champ.

RÈGLES ABSOLUES :
- N'invente RIEN : ni citation, ni fait, ni idée qui ne soit pas réellement dans ce livre.
- Ne force pas le nombre : si tu n'es sûr que de 3 concepts solides, ne rends que 3 posts. La pertinence prime sur la quantité.
- Chaque post doit être spécifique à CE livre, pas un conseil générique interchangeable.
- Style concis, percutant, fidèle au propos de l'auteur.`

const verifyPrompt = (b, draft) => `Tu es un vérificateur exigeant. Voici des brouillons de posts pour le livre "${b.title}" de ${b.author} (${b.category}) :

${JSON.stringify(draft?.posts ?? [], null, 1)}

Ta mission : renvoyer une version NETTOYÉE et FIABLE de ces posts.
- SUPPRIME tout post ou toute slide qui contient une invention : citation inexacte ou non attestée, fait fabriqué, concept qui n'est pas réellement dans ce livre, ou remplissage générique non spécifique à l'ouvrage.
- Pour une slide "quote" dont la formulation exacte est douteuse : soit corrige-la vers la version réellement connue, soit transforme-la en slide "point"/"takeaway" reformulée sans guillemets ni attribution.
- Garde uniquement les posts qui reflètent un concept/passage authentique et distinct du livre. Il est PRÉFÉRABLE d'en rendre moins mais justes.
- Conserve le bilinguisme fr/en et corrige les fautes ou maladresses de langue.
- Ne rajoute pas d'invention de ton côté.

Renvoie les posts vérifiés (peut être une liste plus courte, voire vide si rien n'est fiable).`

const BOOKS = typeof args === 'string' ? JSON.parse(args) : args
if (!Array.isArray(BOOKS)) throw new Error('args doit être un tableau de livres')
log(`Génération pour ${BOOKS.length} livres…`)

const results = await pipeline(
  BOOKS,
  (b) => agent(draftPrompt(b), { label: `draft:${b.id}`, phase: 'Draft', schema: OUT }),
  (draft, b) =>
    agent(verifyPrompt(b, draft), { label: `verify:${b.id}`, phase: 'Verify', schema: OUT }).then((final) => ({
      id: b.id,
      posts: final?.posts ?? [],
    })),
)

const books = results.filter(Boolean).filter((r) => r.posts && r.posts.length > 0)
const totalPosts = books.reduce((n, b) => n + b.posts.length, 0)
log(`Terminé : ${books.length} livres, ${totalPosts} posts vérifiés.`)
return { books, totalPosts }
