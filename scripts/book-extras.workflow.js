export const meta = {
  name: 'still-book-extras',
  description: 'Génère la description (pitch) + l\'aperçu (blurb) par livre, avec vérification anti-invention',
  phases: [
    { title: 'Draft', detail: 'un agent rédige pitch + blurb par livre' },
    { title: 'Verify', detail: 'un agent élague tout ce qui est inventé (chiffres, prix, dates…)' },
  ],
}

const LOC = {
  type: 'object',
  additionalProperties: false,
  properties: { fr: { type: 'string' }, en: { type: 'string' } },
  required: ['fr', 'en'],
}
const OUT = {
  type: 'object',
  additionalProperties: false,
  properties: { pitch: LOC, blurb: LOC },
  required: ['pitch', 'blurb'],
}

const STYLE = `EXEMPLE DE STYLE (livre "Atomic Habits" de James Clear) :
- pitch (fr) : "Le guide culte pour arrêter de compter sur la motivation et construire des habitudes qui tiennent vraiment. Concret et appuyé sur la science du comportement, il change la façon dont on bâtit sa vie — un petit geste à la fois. ⚛️"
- blurb (fr) : "Devenu une référence mondiale du développement personnel, Atomic Habits propose un système complet pour transformer ses habitudes. L'idée centrale : ce ne sont pas les objectifs, mais les petites routines quotidiennes, composées dans le temps, qui décident de nos résultats."`

const draftPrompt = (b) => `Tu rédiges deux textes bilingues (fr + en) pour présenter un livre dans une app façon Instagram ("still", apprendre en scrollant).

LIVRE : "${b.title}"
AUTEUR : ${b.author}
CATÉGORIE : ${b.category}

1) "pitch" : la DESCRIPTION affichée sous le post. Elle présente le livre pour DONNER ENVIE de le lire. 1 à 2 phrases, ton accrocheur mais juste, un emoji pertinent en fin possible.
2) "blurb" : l'APERÇU (slide de contexte). 2 à 3 phrases qui expliquent ce qu'est le livre et son idée centrale / sa promesse, pour situer le lecteur.

${STYLE}

RÈGLES ABSOLUES :
- N'invente RIEN : pas de chiffres de vente précis, pas de prix/récompenses non vérifiables, pas de dates douteuses, pas de citation inventée. Reste sur des faits solides et connus du livre.
- Fidèle au propos réel de l'ouvrage et de son auteur.
- Concis, vivant, sans superlatifs creux. Bilingue fr ET en, pour pitch ET blurb.`

const verifyPrompt = (b, draft) => `Vérificateur exigeant. Voici un brouillon (pitch + blurb) pour "${b.title}" de ${b.author} (${b.category}) :

${JSON.stringify(draft ?? {}, null, 1)}

Renvoie une version NETTOYÉE et FIABLE :
- SUPPRIME ou corrige toute invention : chiffre de vente précis, récompense/prix non attesté, date douteuse, affirmation exagérée ou fausse, citation non vérifiable.
- Garde un ton accrocheur (pitch) et informatif (blurb), fidèle au livre.
- Conserve le bilinguisme fr/en et corrige les maladresses de langue.
- Ne rajoute aucune invention.
Renvoie pitch + blurb (obligatoires).`

const BOOKS = typeof args === 'string' ? JSON.parse(args) : args
if (!Array.isArray(BOOKS)) throw new Error('args doit être un tableau de livres')
log(`Génération pitch + aperçu pour ${BOOKS.length} livres…`)

const results = await pipeline(
  BOOKS,
  (b) => agent(draftPrompt(b), { label: `draft:${b.id}`, phase: 'Draft', schema: OUT }),
  (draft, b) =>
    agent(verifyPrompt(b, draft), { label: `verify:${b.id}`, phase: 'Verify', schema: OUT }).then((final) => ({
      id: b.id,
      pitch: final?.pitch,
      blurb: final?.blurb,
    })),
)

const books = results.filter(Boolean).filter((r) => r.pitch && r.blurb)
log(`Terminé : ${books.length}/${BOOKS.length} livres.`)
return { books }
