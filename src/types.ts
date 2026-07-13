export type SlideKind = 'cover' | 'point' | 'quote' | 'takeaway'

export interface Slide {
  kind: SlideKind
  /** Short eyebrow / label shown above the title, e.g. "POINT CLÉ 01" */
  eyebrow?: string
  title: string
  body?: string
  /** For quote slides */
  attribution?: string
}

export interface Book {
  id: string
  /** Book title */
  title: string
  author: string
  /** Publisher / collection, e.g. "Stripe Press" */
  publisher: string
  /** Instagram-style handle, e.g. "stripepress" */
  handle: string
  /** One-line hook used as the post caption */
  caption: string
  /** Topic tags without the # */
  tags: string[]
  /** Color theme (Tailwind-compatible gradient stops as hex) */
  theme: { from: string; to: string; text: string }
  /** Emoji used as the avatar / cover glyph */
  glyph: string
  /** Reading time estimate for the full book */
  readTime: string
  /** The carousel slides */
  slides: Slide[]
  /** Seeded like count for display */
  likes: number
}

export type Tab = 'home' | 'explore' | 'saved' | 'profile'
