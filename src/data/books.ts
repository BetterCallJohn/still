import type { BookMeta, Lang, Post, RawPost, RawSlide, Slide } from '../types'
import { pick } from '../types'
import { postsByBook } from './generatedPosts'

// Métadonnées des livres ("comptes"). Le contenu (posts) vit dans generatedPosts.
export const bookMeta: BookMeta[] = [
  {
    "id": "working-in-public",
    "title": "Working in Public",
    "author": "Nadia Eghbal",
    "publisher": "Stripe Press",
    "handle": "stripepress",
    "theme": {
      "from": "#0f766e",
      "to": "#134e4a",
      "text": "#ecfeff"
    },
    "glyph": "🌱",
    "readTime": "6 h"
  },
  {
    "id": "high-growth-handbook",
    "title": "High Growth Handbook",
    "author": "Elad Gil",
    "publisher": "Stripe Press",
    "handle": "stripepress",
    "theme": {
      "from": "#7c3aed",
      "to": "#4c1d95",
      "text": "#f5f3ff"
    },
    "glyph": "🚀",
    "readTime": "7 h"
  },
  {
    "id": "revolt-of-the-public",
    "title": "The Revolt of the Public",
    "author": "Martin Gurri",
    "publisher": "Stripe Press",
    "handle": "stripepress",
    "theme": {
      "from": "#b91c1c",
      "to": "#7f1d1d",
      "text": "#fef2f2"
    },
    "glyph": "📢",
    "readTime": "6 h"
  },
  {
    "id": "scaling-people",
    "title": "Scaling People",
    "author": "Claire Hughes Johnson",
    "publisher": "Stripe Press",
    "handle": "stripepress",
    "theme": {
      "from": "#1d4ed8",
      "to": "#1e3a8a",
      "text": "#eff6ff"
    },
    "glyph": "🧭",
    "readTime": "8 h"
  },
  {
    "id": "an-elegant-puzzle",
    "title": "An Elegant Puzzle",
    "author": "Will Larson",
    "publisher": "Stripe Press",
    "handle": "stripepress",
    "theme": {
      "from": "#0369a1",
      "to": "#082f49",
      "text": "#f0f9ff"
    },
    "glyph": "🧩",
    "readTime": "5 h"
  },
  {
    "id": "ask-your-developer",
    "title": "Ask Your Developer",
    "author": "Jeff Lawson",
    "publisher": "Stripe Press",
    "handle": "stripepress",
    "theme": {
      "from": "#dc2626",
      "to": "#991b1b",
      "text": "#fef2f2"
    },
    "glyph": "⚙️",
    "readTime": "6 h"
  },
  {
    "id": "poor-charlies-almanack",
    "title": "Poor Charlie's Almanack",
    "author": "Charlie Munger",
    "publisher": "Stripe Press",
    "handle": "stripepress",
    "theme": {
      "from": "#92400e",
      "to": "#451a03",
      "text": "#fffbeb"
    },
    "glyph": "🦉",
    "readTime": "10 h"
  },
  {
    "id": "stubborn-attachments",
    "title": "Stubborn Attachments",
    "author": "Tyler Cowen",
    "publisher": "Stripe Press",
    "handle": "stripepress",
    "theme": {
      "from": "#059669",
      "to": "#064e3b",
      "text": "#ecfdf5"
    },
    "glyph": "📊",
    "readTime": "3 h"
  },
  {
    "id": "where-is-my-flying-car",
    "title": "Where Is My Flying Car?",
    "author": "J. Storrs Hall",
    "publisher": "Stripe Press",
    "handle": "stripepress",
    "theme": {
      "from": "#4338ca",
      "to": "#1e1b4b",
      "text": "#eef2ff"
    },
    "glyph": "🛸",
    "readTime": "7 h"
  },
  {
    "id": "art-of-doing-science",
    "title": "The Art of Doing Science and Engineering",
    "author": "Richard Hamming",
    "publisher": "Stripe Press",
    "handle": "stripepress",
    "theme": {
      "from": "#0f172a",
      "to": "#020617",
      "text": "#f8fafc"
    },
    "glyph": "🎓",
    "readTime": "9 h"
  },
  {
    "id": "get-together",
    "title": "Get Together",
    "author": "Richardson, Huynh & Sotto",
    "publisher": "Stripe Press",
    "handle": "stripepress",
    "theme": {
      "from": "#db2777",
      "to": "#831843",
      "text": "#fdf2f8"
    },
    "glyph": "🔥",
    "readTime": "3 h"
  },
  {
    "id": "the-dream-machine",
    "title": "The Dream Machine",
    "author": "M. Mitchell Waldrop",
    "publisher": "Stripe Press",
    "handle": "stripepress",
    "theme": {
      "from": "#0d9488",
      "to": "#134e4a",
      "text": "#f0fdfa"
    },
    "glyph": "🖥️",
    "readTime": "12 h"
  },
  {
    "id": "making-of-prince-of-persia",
    "title": "The Making of Prince of Persia",
    "author": "Jordan Mechner",
    "publisher": "Stripe Press",
    "handle": "stripepress",
    "theme": {
      "from": "#c2410c",
      "to": "#7c2d12",
      "text": "#fff7ed"
    },
    "glyph": "🗡️",
    "readTime": "6 h"
  },
  {
    "id": "the-man-from-the-future",
    "title": "The Man from the Future",
    "author": "Ananyo Bhattacharya",
    "publisher": "Stripe Press",
    "handle": "stripepress",
    "theme": {
      "from": "#4f46e5",
      "to": "#312e81",
      "text": "#eef2ff"
    },
    "glyph": "♟️",
    "readTime": "8 h"
  },
  {
    "id": "pieces-of-the-action",
    "title": "Pieces of the Action",
    "author": "Vannevar Bush",
    "publisher": "Stripe Press",
    "handle": "stripepress",
    "theme": {
      "from": "#334155",
      "to": "#0f172a",
      "text": "#f1f5f9"
    },
    "glyph": "📐",
    "readTime": "9 h"
  },
  {
    "id": "the-lean-startup",
    "title": "The Lean Startup",
    "author": "Eric Ries",
    "publisher": "Startup Classics",
    "handle": "startupclassics",
    "theme": {
      "from": "#16a34a",
      "to": "#14532d",
      "text": "#f0fdf4"
    },
    "glyph": "🔁",
    "readTime": "6 h"
  },
  {
    "id": "zero-to-one",
    "title": "Zero to One",
    "author": "Peter Thiel",
    "publisher": "Startup Classics",
    "handle": "startupclassics",
    "theme": {
      "from": "#111827",
      "to": "#000000",
      "text": "#f9fafb"
    },
    "glyph": "①",
    "readTime": "5 h"
  },
  {
    "id": "hard-thing-about-hard-things",
    "title": "The Hard Thing About Hard Things",
    "author": "Ben Horowitz",
    "publisher": "Startup Classics",
    "handle": "startupclassics",
    "theme": {
      "from": "#1e293b",
      "to": "#0c0a09",
      "text": "#f8fafc"
    },
    "glyph": "⚔️",
    "readTime": "7 h"
  },
  {
    "id": "the-mom-test",
    "title": "The Mom Test",
    "author": "Rob Fitzpatrick",
    "publisher": "Startup Classics",
    "handle": "startupclassics",
    "theme": {
      "from": "#0891b2",
      "to": "#164e63",
      "text": "#ecfeff"
    },
    "glyph": "🎤",
    "readTime": "2 h"
  },
  {
    "id": "founders-at-work",
    "title": "Founders at Work",
    "author": "Jessica Livingston",
    "publisher": "Startup Classics",
    "handle": "startupclassics",
    "theme": {
      "from": "#ca8a04",
      "to": "#713f12",
      "text": "#fefce8"
    },
    "glyph": "📖",
    "readTime": "10 h"
  },
  {
    "id": "shoe-dog",
    "title": "Shoe Dog",
    "author": "Phil Knight",
    "publisher": {
      "fr": "Autobiographie",
      "en": "Memoir"
    },
    "handle": "philknight",
    "theme": {
      "from": "#ea580c",
      "to": "#7c2d12",
      "text": "#fff7ed"
    },
    "glyph": "👟",
    "readTime": "9 h"
  },
  {
    "id": "made-in-america",
    "title": "Made in America",
    "author": "Sam Walton",
    "publisher": {
      "fr": "Autobiographie",
      "en": "Memoir"
    },
    "handle": "samwalton",
    "theme": {
      "from": "#2563eb",
      "to": "#1e3a8a",
      "text": "#eff6ff"
    },
    "glyph": "🛒",
    "readTime": "8 h"
  },
  {
    "id": "pour-your-heart-into-it",
    "title": "Pour Your Heart Into It",
    "author": "Howard Schultz",
    "publisher": {
      "fr": "Autobiographie",
      "en": "Memoir"
    },
    "handle": "howardschultz",
    "theme": {
      "from": "#15803d",
      "to": "#14532d",
      "text": "#f0fdf4"
    },
    "glyph": "☕",
    "readTime": "7 h"
  },
  {
    "id": "losing-my-virginity",
    "title": "Losing My Virginity",
    "author": "Richard Branson",
    "publisher": {
      "fr": "Autobiographie",
      "en": "Memoir"
    },
    "handle": "richardbranson",
    "theme": {
      "from": "#dc2626",
      "to": "#7f1d1d",
      "text": "#fef2f2"
    },
    "glyph": "✈️",
    "readTime": "10 h"
  },
  {
    "id": "principles-dalio",
    "title": "Principles",
    "author": "Ray Dalio",
    "publisher": {
      "fr": "Autobiographie",
      "en": "Memoir"
    },
    "handle": "raydalio",
    "theme": {
      "from": "#0e7490",
      "to": "#164e63",
      "text": "#ecfeff"
    },
    "glyph": "🌊",
    "readTime": "8 h"
  },
  {
    "id": "carnegie-autobiography",
    "title": "Autobiography of Andrew Carnegie",
    "author": "Andrew Carnegie",
    "publisher": {
      "fr": "Autobiographie",
      "en": "Memoir"
    },
    "handle": "andrewcarnegie",
    "theme": {
      "from": "#b45309",
      "to": "#451a03",
      "text": "#fffbeb"
    },
    "glyph": "🏭",
    "readTime": "7 h"
  },
  {
    "id": "my-life-and-work",
    "title": "My Life and Work",
    "author": "Henry Ford",
    "publisher": {
      "fr": "Autobiographie",
      "en": "Memoir"
    },
    "handle": "henryford",
    "theme": {
      "from": "#1e40af",
      "to": "#172554",
      "text": "#eff6ff"
    },
    "glyph": "🚗",
    "readTime": "6 h"
  },
  {
    "id": "walt-disney",
    "title": "Walt Disney",
    "author": "Neal Gabler",
    "publisher": {
      "fr": "Biographie",
      "en": "Biography"
    },
    "handle": "waltdisney",
    "theme": {
      "from": "#6d28d9",
      "to": "#2e1065",
      "text": "#f5f3ff"
    },
    "glyph": "🐭",
    "readTime": "11 h"
  },
  {
    "id": "kamprad-ikea",
    "title": "Leading by Design",
    "author": "Ingvar Kamprad",
    "publisher": {
      "fr": "Autobiographie",
      "en": "Memoir"
    },
    "handle": "ingvarkamprad",
    "theme": {
      "from": "#0d9488",
      "to": "#134e4a",
      "text": "#f0fdfa"
    },
    "glyph": "🪑",
    "readTime": "6 h"
  },
  {
    "id": "grinding-it-out",
    "title": "Grinding It Out",
    "author": "Ray Kroc",
    "publisher": {
      "fr": "Autobiographie",
      "en": "Memoir"
    },
    "handle": "raykroc",
    "theme": {
      "from": "#b91c1c",
      "to": "#78350f",
      "text": "#fffbeb"
    },
    "glyph": "🍟",
    "readTime": "6 h"
  },
  {
    "id": "the-snowball",
    "title": "The Snowball",
    "author": "Alice Schroeder",
    "publisher": {
      "fr": "Biographie",
      "en": "Biography"
    },
    "handle": "warrenbuffett",
    "theme": {
      "from": "#047857",
      "to": "#064e3b",
      "text": "#ecfdf5"
    },
    "glyph": "💰",
    "readTime": "14 h"
  },
  {
    "id": "steve-jobs",
    "title": "Steve Jobs",
    "author": "Walter Isaacson",
    "publisher": {
      "fr": "Biographie",
      "en": "Biography"
    },
    "handle": "stevejobs",
    "theme": {
      "from": "#374151",
      "to": "#111827",
      "text": "#f9fafb"
    },
    "glyph": "🍎",
    "readTime": "16 h"
  },
  {
    "id": "elon-musk",
    "title": "Elon Musk",
    "author": "Walter Isaacson",
    "publisher": {
      "fr": "Biographie",
      "en": "Biography"
    },
    "handle": "elonmusk",
    "theme": {
      "from": "#4338ca",
      "to": "#1e1b4b",
      "text": "#eef2ff"
    },
    "glyph": "🚀",
    "readTime": "18 h"
  },
  {
    "id": "source-code-gates",
    "title": "Source Code",
    "author": "Bill Gates",
    "publisher": {
      "fr": "Autobiographie",
      "en": "Memoir"
    },
    "handle": "billgates",
    "theme": {
      "from": "#2563eb",
      "to": "#1e3a8a",
      "text": "#eff6ff"
    },
    "glyph": "💻",
    "readTime": "9 h"
  },
  {
    "id": "invent-and-wander",
    "title": "Invent and Wander",
    "author": "Jeff Bezos",
    "publisher": {
      "fr": "Autobiographie",
      "en": "Memoir"
    },
    "handle": "jeffbezos",
    "theme": {
      "from": "#c2410c",
      "to": "#431407",
      "text": "#fff7ed"
    },
    "glyph": "📦",
    "readTime": "8 h"
  },
  {
    "id": "atomic-habits",
    "title": "Atomic Habits",
    "author": "James Clear",
    "publisher": {
      "fr": "Développement personnel",
      "en": "Personal Growth"
    },
    "handle": "growthlibrary",
    "theme": {
      "from": "#10b981",
      "to": "#065f46",
      "text": "#ecfdf5"
    },
    "glyph": "⚛️",
    "readTime": "5 h"
  },
  {
    "id": "deep-work",
    "title": "Deep Work",
    "author": "Cal Newport",
    "publisher": {
      "fr": "Développement personnel",
      "en": "Personal Growth"
    },
    "handle": "growthlibrary",
    "theme": {
      "from": "#1e3a8a",
      "to": "#0f172a",
      "text": "#eff6ff"
    },
    "glyph": "🎯",
    "readTime": "6 h"
  },
  {
    "id": "seven-habits",
    "title": "The 7 Habits of Highly Effective People",
    "author": "Stephen R. Covey",
    "publisher": {
      "fr": "Développement personnel",
      "en": "Personal Growth"
    },
    "handle": "growthlibrary",
    "theme": {
      "from": "#b45309",
      "to": "#451a03",
      "text": "#fffbeb"
    },
    "glyph": "🌳",
    "readTime": "9 h"
  },
  {
    "id": "mindset",
    "title": "Mindset",
    "author": "Carol S. Dweck",
    "publisher": {
      "fr": "Développement personnel",
      "en": "Personal Growth"
    },
    "handle": "growthlibrary",
    "theme": {
      "from": "#7c3aed",
      "to": "#4c1d95",
      "text": "#f5f3ff"
    },
    "glyph": "💡",
    "readTime": "6 h"
  },
  {
    "id": "mans-search-for-meaning",
    "title": "Man's Search for Meaning",
    "author": "Viktor E. Frankl",
    "publisher": {
      "fr": "Développement personnel",
      "en": "Personal Growth"
    },
    "handle": "growthlibrary",
    "theme": {
      "from": "#3f3f46",
      "to": "#18181b",
      "text": "#fafafa"
    },
    "glyph": "🕯️",
    "readTime": "4 h"
  },
  {
    "id": "psychology-of-money",
    "title": "The Psychology of Money",
    "author": "Morgan Housel",
    "publisher": {
      "fr": "Finances personnelles",
      "en": "Personal Finance"
    },
    "handle": "moneylibrary",
    "theme": {
      "from": "#047857",
      "to": "#064e3b",
      "text": "#ecfdf5"
    },
    "glyph": "💵",
    "readTime": "5 h"
  },
  {
    "id": "rich-dad-poor-dad",
    "title": "Rich Dad Poor Dad",
    "author": "Robert T. Kiyosaki",
    "publisher": {
      "fr": "Finances personnelles",
      "en": "Personal Finance"
    },
    "handle": "moneylibrary",
    "theme": {
      "from": "#b91c1c",
      "to": "#450a0a",
      "text": "#fef2f2"
    },
    "glyph": "🏦",
    "readTime": "5 h"
  },
  {
    "id": "richest-man-in-babylon",
    "title": "The Richest Man in Babylon",
    "author": "George S. Clason",
    "publisher": {
      "fr": "Finances personnelles",
      "en": "Personal Finance"
    },
    "handle": "moneylibrary",
    "theme": {
      "from": "#a16207",
      "to": "#422006",
      "text": "#fefce8"
    },
    "glyph": "🏺",
    "readTime": "3 h"
  },
  {
    "id": "millionaire-next-door",
    "title": "The Millionaire Next Door",
    "author": "Stanley & Danko",
    "publisher": {
      "fr": "Finances personnelles",
      "en": "Personal Finance"
    },
    "handle": "moneylibrary",
    "theme": {
      "from": "#065f46",
      "to": "#022c22",
      "text": "#ecfdf5"
    },
    "glyph": "🏡",
    "readTime": "6 h"
  },
  {
    "id": "high-output-management",
    "title": "High Output Management",
    "author": "Andrew S. Grove",
    "publisher": {
      "fr": "Management",
      "en": "Management"
    },
    "handle": "mgmtlibrary",
    "theme": {
      "from": "#1d4ed8",
      "to": "#1e3a8a",
      "text": "#eff6ff"
    },
    "glyph": "🛠️",
    "readTime": "7 h"
  },
  {
    "id": "radical-candor",
    "title": "Radical Candor",
    "author": "Kim Scott",
    "publisher": {
      "fr": "Management",
      "en": "Management"
    },
    "handle": "mgmtlibrary",
    "theme": {
      "from": "#db2777",
      "to": "#831843",
      "text": "#fdf2f8"
    },
    "glyph": "🗣️",
    "readTime": "6 h"
  },
  {
    "id": "five-dysfunctions",
    "title": "The Five Dysfunctions of a Team",
    "author": "Patrick Lencioni",
    "publisher": {
      "fr": "Management",
      "en": "Management"
    },
    "handle": "mgmtlibrary",
    "theme": {
      "from": "#0e7490",
      "to": "#164e63",
      "text": "#ecfeff"
    },
    "glyph": "🧱",
    "readTime": "5 h"
  },
  {
    "id": "measure-what-matters",
    "title": "Measure What Matters",
    "author": "John Doerr",
    "publisher": {
      "fr": "Management",
      "en": "Management"
    },
    "handle": "mgmtlibrary",
    "theme": {
      "from": "#ca8a04",
      "to": "#713f12",
      "text": "#fefce8"
    },
    "glyph": "🚩",
    "readTime": "7 h"
  },
  {
    "id": "good-to-great",
    "title": "Good to Great",
    "author": "Jim Collins",
    "publisher": {
      "fr": "Management",
      "en": "Management"
    },
    "handle": "mgmtlibrary",
    "theme": {
      "from": "#334155",
      "to": "#0f172a",
      "text": "#f1f5f9"
    },
    "glyph": "🏔️",
    "readTime": "9 h"
  }
]

const metaById = new Map(bookMeta.map((b) => [b.id, b]))

// Like seed déterministe à partir de l'id du post.
function seedLikes(id: string): number {
  let h = 0
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0
  return 6000 + (h % 39000)
}

function localizeSlide(lang: Lang, s: RawSlide, coverEyebrow: string, pointN: number): Slide {
  let eyebrow: string | undefined
  if (s.eyebrow !== undefined) eyebrow = pick(lang, s.eyebrow)
  else if (s.kind === 'cover') eyebrow = coverEyebrow
  else if (s.kind === 'point')
    eyebrow = (lang === 'fr' ? 'POINT CLÉ ' : 'KEY POINT ') + String(pointN).padStart(2, '0')
  else if (s.kind === 'quote') eyebrow = lang === 'fr' ? 'CITATION' : 'QUOTE'
  else eyebrow = lang === 'fr' ? 'À RETENIR' : 'REMEMBER'
  return {
    kind: s.kind,
    eyebrow,
    title: pick(lang, s.title),
    body: s.body === undefined ? undefined : pick(lang, s.body),
    attribution: s.attribution === undefined ? undefined : pick(lang, s.attribution),
  }
}

function localizePost(lang: Lang, meta: BookMeta, raw: RawPost, index: number): Post {
  const coverEyebrow = pick(lang, meta.publisher).toUpperCase()
  let pointN = 0
  const slides = raw.slides.map((s) => {
    if (s.kind === 'point' && s.eyebrow === undefined) pointN += 1
    return localizeSlide(lang, s, coverEyebrow, pointN)
  })
  const id = meta.id + '::' + index
  return {
    id,
    bookId: meta.id,
    title: meta.title,
    author: meta.author,
    publisher: pick(lang, meta.publisher),
    handle: meta.handle,
    theme: meta.theme,
    glyph: meta.glyph,
    readTime: meta.readTime,
    concept: pick(lang, raw.concept),
    caption: pick(lang, raw.caption),
    tags: raw.tags,
    likes: raw.likes ?? seedLikes(id),
    slides,
  }
}

/** Tous les posts, texte résolu dans la langue donnée, dans l'ordre des livres. */
export function getPosts(lang: Lang): Post[] {
  const out: Post[] = []
  for (const meta of bookMeta) {
    const raws = postsByBook[meta.id] ?? []
    raws.forEach((raw, i) => out.push(localizePost(lang, meta, raw, i)))
  }
  return out
}

export { metaById }
