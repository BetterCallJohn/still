import type { Lang } from './types'

export interface UIStrings {
  navHome: string
  navExplore: string
  navSaved: string
  navProfile: string
  searchPlaceholder: string
  noResults: (q: string) => string
  likes: string
  viewCards: (n: number) => string
  swipeNext: string
  feedEnd: string
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
  headerExplore: string
  headerSaved: string
  headerProfile: string
  optionsLabel: string
  likeLabel: string
  shareLabel: string
  saveLabel: string
  closeLabel: string
  langLabel: string
}

const dict: Record<Lang, UIStrings> = {
  fr: {
    navHome: 'Accueil',
    navExplore: 'Explorer',
    navSaved: 'Enregistrés',
    navProfile: 'Profil',
    searchPlaceholder: 'Rechercher un livre, un auteur, un thème…',
    noResults: (q) => `Aucun résultat pour « ${q} »`,
    likes: "j'aime",
    viewCards: (n) => `… voir les ${n} fiches`,
    swipeNext: '✦ swipe pour le suivant',
    feedEnd: 'Tu as tout scrollé. Reviens demain pour apprendre encore. ✦',
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
    headerExplore: 'Explorer',
    headerSaved: 'Enregistrés',
    headerProfile: 'Profil',
    optionsLabel: 'Options',
    likeLabel: "J'aime",
    shareLabel: 'Partager',
    saveLabel: 'Enregistrer',
    closeLabel: 'Fermer',
    langLabel: 'Langue',
  },
  en: {
    navHome: 'Home',
    navExplore: 'Explore',
    navSaved: 'Saved',
    navProfile: 'Profile',
    searchPlaceholder: 'Search a book, an author, a topic…',
    noResults: (q) => `No results for “${q}”`,
    likes: 'likes',
    viewCards: (n) => `… view all ${n} cards`,
    swipeNext: '✦ swipe for the next',
    feedEnd: "You've scrolled it all. Come back tomorrow to keep learning. ✦",
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
    headerExplore: 'Explore',
    headerSaved: 'Saved',
    headerProfile: 'Profile',
    optionsLabel: 'Options',
    likeLabel: 'Like',
    shareLabel: 'Share',
    saveLabel: 'Save',
    closeLabel: 'Close',
    langLabel: 'Language',
  },
}

export function strings(lang: Lang): UIStrings {
  return dict[lang]
}
