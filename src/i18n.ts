import type { Lang } from './types'

export interface UIStrings {
  navHome: string
  navExplore: string
  navSaved: string
  navProfile: string
  searchPlaceholder: string
  searchHint: string
  noResults: (q: string) => string
  viewCards: (n: number) => string
  swipeNext: string
  feedEnd: string
  feedAllCaught: string
  linkCopied: string
  savedTitle: string
  savedSubtitle: string
  savedEmptyTitle: string
  savedEmptyBody: string
  statLiked: string
  statSaved: string
  statCards: string
  journeyTitle: string
  journeyBody: (n: number) => string
  likedRecent: string
  allLibrary: string
  likesTitle: string
  likesEmpty: string
  headerExplore: string
  headerSaved: string
  headerProfile: string
  optionsLabel: string
  buyBook: string
  likeLabel: string
  shareLabel: string
  saveLabel: string
  closeLabel: string
  langLabel: string
  settingsTitle: string
  themeLabel: string
  themeSystem: string
  themeLight: string
  themeDark: string
}

const dict: Record<Lang, UIStrings> = {
  fr: {
    navHome: 'Accueil',
    navExplore: 'Explorer',
    navSaved: 'Enregistrés',
    navProfile: 'Profil',
    searchPlaceholder: 'Rechercher un livre, un auteur, un thème…',
    searchHint: 'Cherche un livre, un auteur ou un concept pour explorer.',
    noResults: (q) => `Aucun résultat pour « ${q} »`,
    viewCards: (n) => `… voir les ${n} fiches`,
    swipeNext: '✦ swipe pour le suivant',
    feedEnd: 'Tu as tout scrollé. Reviens demain pour apprendre encore. ✦',
    feedAllCaught:
      "Tu es à jour ! Tout ce que tu as lu, aimé ou enregistré est rangé dans tes onglets. Reviens plus tard pour de nouvelles fiches. ✦",
    linkCopied: 'Lien copié ✓',
    savedTitle: 'Enregistrés',
    savedSubtitle: 'Tes fiches à relire, toujours à portée.',
    savedEmptyTitle: "Rien d'enregistré",
    savedEmptyBody: "Appuie sur le marque-page d'un post pour le retrouver ici.",
    statLiked: 'aimés',
    statSaved: 'enregistrés',
    statCards: 'fiches',
    journeyTitle: 'Ton parcours',
    journeyBody: (n) =>
      `${n} livres startup, à un swipe. Commence par la collection Stripe Press. ✦`,
    likedRecent: 'Aimés récemment',
    allLibrary: 'Toute la bibliothèque',
    likesTitle: "Tes j'aime",
    likesEmpty: "Aucun post aimé pour l'instant. Appuie sur ❤️ pour les retrouver ici.",
    headerExplore: 'Explorer',
    headerSaved: 'Enregistrés',
    headerProfile: 'Profil',
    optionsLabel: 'Options',
    buyBook: 'Acheter le livre',
    likeLabel: "J'aime",
    shareLabel: 'Partager',
    saveLabel: 'Enregistrer',
    closeLabel: 'Fermer',
    langLabel: 'Langue',
    settingsTitle: 'Réglages',
    themeLabel: 'Thème',
    themeSystem: 'Système',
    themeLight: 'Clair',
    themeDark: 'Sombre',
  },
  en: {
    navHome: 'Home',
    navExplore: 'Explore',
    navSaved: 'Saved',
    navProfile: 'Profile',
    searchPlaceholder: 'Search a book, an author, a topic…',
    searchHint: 'Search a book, author, or concept to explore.',
    noResults: (q) => `No results for “${q}”`,
    viewCards: (n) => `… view all ${n} cards`,
    swipeNext: '✦ swipe for the next',
    feedEnd: "You've scrolled it all. Come back tomorrow to keep learning. ✦",
    feedAllCaught:
      "You're all caught up! Everything you've read, liked or saved lives in your tabs. Come back later for fresh cards. ✦",
    linkCopied: 'Link copied ✓',
    savedTitle: 'Saved',
    savedSubtitle: 'Your cards to revisit, always at hand.',
    savedEmptyTitle: 'Nothing saved yet',
    savedEmptyBody: 'Tap the bookmark on a post to find it here.',
    statLiked: 'liked',
    statSaved: 'saved',
    statCards: 'cards',
    journeyTitle: 'Your journey',
    journeyBody: (n) => `${n} startup books, one swipe away. Start with the Stripe Press collection. ✦`,
    likedRecent: 'Recently liked',
    allLibrary: 'The whole library',
    likesTitle: 'Your likes',
    likesEmpty: 'No liked posts yet. Tap ❤️ to find them here.',
    headerExplore: 'Explore',
    headerSaved: 'Saved',
    headerProfile: 'Profile',
    optionsLabel: 'Options',
    buyBook: 'Buy the book',
    likeLabel: 'Like',
    shareLabel: 'Share',
    saveLabel: 'Save',
    closeLabel: 'Close',
    langLabel: 'Language',
    settingsTitle: 'Settings',
    themeLabel: 'Theme',
    themeSystem: 'System',
    themeLight: 'Light',
    themeDark: 'Dark',
  },
}

export function strings(lang: Lang): UIStrings {
  return dict[lang]
}
