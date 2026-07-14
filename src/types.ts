export type Lang = 'fr' | 'en'

/** A localized string. */
export type L = { fr: string; en: string }

/** Either a language-neutral string (proper nouns, numbers) or a localized pair. */
export type Loc = string | L

/** Resolve a localizable value to the active language. */
export function pick(lang: Lang, value: Loc): string {
  return typeof value === 'string' ? value : value[lang]
}

export type SlideKind = 'cover' | 'point' | 'quote' | 'takeaway'

// ── Authoring shapes ──────────────────────────────────────────────────────
export interface RawSlide {
  kind: SlideKind
  eyebrow?: Loc
  title: Loc
  body?: Loc
  attribution?: Loc
}

/** One carousel post about a single concept from a book. */
export interface RawPost {
  concept: Loc
  caption: Loc
  tags: string[]
  slides: RawSlide[]
  likes?: number
}

/** A book = an "account" that publishes several posts. */
export interface BookMeta {
  id: string
  title: string
  author: string
  publisher: Loc
  handle: string
  theme: { from: string; to: string; text: string }
  glyph: string
  readTime: string
}

// ── View shapes: plain strings, resolved for the current language ─────────
export interface Slide {
  kind: SlideKind
  eyebrow?: string
  title: string
  body?: string
  attribution?: string
}

/** A feed unit: one post, carrying its parent book's account info. */
export interface Post {
  id: string
  bookId: string
  title: string
  author: string
  publisher: string
  handle: string
  theme: { from: string; to: string; text: string }
  glyph: string
  readTime: string
  concept: string
  caption: string
  tags: string[]
  likes: number
  slides: Slide[]
}

export type Tab = 'home' | 'explore' | 'saved' | 'profile'
