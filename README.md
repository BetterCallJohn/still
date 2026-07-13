# still 📚

**Apprends la sagesse startup en scrollant.** Une web-app mobile qui reprend
exactement l'expérience Instagram — feed, stories, carrousels swipe, like &
enregistrement — mais où chaque « post » est un carrousel de fiches de
connaissances : résumé, points clés et learnings tirés des grands livres de la
startup. On commence par toute la collection **Stripe Press**.

## L'expérience

- **Bilingue (FR / EN)** : toute l'interface **et le contenu des fiches** sont
  traduits. Sélecteur FR/EN dans l'en-tête, langue détectée automatiquement au
  premier lancement puis persistée en `localStorage`.
- **Feed vertical** façon Instagram : stories en haut, posts qui défilent.
- **Carrousels swipe** (scroll-snap) : chaque livre = une slideshow de 6-7
  fiches (couverture → points clés → citation → à retenir).
- **Interactions natives** : double-tap pour liker, marque-page pour
  enregistrer, barre d'actions complète. Likes & enregistrements persistés en
  `localStorage`.
- **Explorer** : grille de toute la bibliothèque + recherche (titre, auteur,
  thème).
- **Enregistrés** & **Profil** : retrouve tes fiches et suis ta progression.

## Contenu

### Collection Stripe Press
Working in Public · High Growth Handbook · The Revolt of the Public ·
Scaling People · An Elegant Puzzle · Ask Your Developer ·
Poor Charlie's Almanack · Stubborn Attachments · Where Is My Flying Car? ·
The Art of Doing Science and Engineering · Get Together · The Dream Machine ·
The Making of Prince of Persia · The Man from the Future · Pieces of the Action

### Classiques startup
The Lean Startup · Zero to One · The Hard Thing About Hard Things ·
The Mom Test · Founders at Work

### Autobiographies & mémoires — moments clés de grands patrons
Shoe Dog (Phil Knight / Nike) · Made in America (Sam Walton / Walmart) ·
Pour Your Heart Into It (Howard Schultz / Starbucks) ·
Losing My Virginity (Richard Branson / Virgin) · Principles (Ray Dalio) ·
Autobiography (Andrew Carnegie) · My Life and Work (Henry Ford) ·
Walt Disney · Leading by Design (Ingvar Kamprad / IKEA) ·
Grinding It Out (Ray Kroc / McDonald's) · The Snowball (Warren Buffett) ·
Steve Jobs · Elon Musk · Source Code (Bill Gates) ·
Invent and Wander (Jeff Bezos)

Le contenu vit dans [`src/data/books.ts`](src/data/books.ts) — ajoute un livre
en respectant le type `RawBook` et il apparaît partout automatiquement. Chaque
champ texte est soit une `string` neutre (noms propres), soit une paire
`{ fr, en }` traduite ; le helper `pick()` résout vers la langue active. Les
libellés d'interface sont dans [`src/i18n.ts`](src/i18n.ts).

## Stack

- **React 19** + **TypeScript** (strict)
- **Vite 7**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- Zéro dépendance externe au runtime, aucun backend — icônes en SVG inline.

## Démarrer

```bash
npm install
npm run dev       # serveur de dev
npm run build     # build de production (tsc + vite)
npm run preview   # prévisualiser le build
```

Ouvre l'URL affichée sur mobile (ou en mode responsive du navigateur, largeur
~390 px) pour l'expérience optimale.
