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

// ── Authoring shapes: text fields may be localized ────────────────────────
export interface RawSlide {
  kind: SlideKind
  eyebrow?: Loc
  title: Loc
  body?: Loc
  attribution?: Loc
}

export interface RawBook {
  id: string
  title: string
  author: string
  publisher: Loc
  handle: string
  caption: Loc
  tags: string[]
  theme: { from: string; to: string; text: string }
  glyph: string
  readTime: string
  slides: RawSlide[]
  likes: number
}

// ── View shapes: plain strings, resolved for the current language ─────────
export interface Slide {
  kind: SlideKind
  eyebrow?: string
  title: string
  body?: string
  attribution?: string
}

export interface Book {
  id: string
  title: string
  author: string
  publisher: string
  handle: string
  caption: string
  tags: string[]
  theme: { from: string; to: string; text: string }
  glyph: string
  readTime: string
  slides: Slide[]
  likes: number
}

export type Tab = 'home' | 'explore' | 'saved' | 'profile'
