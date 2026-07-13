import { useMemo, useState } from 'react'
import type { Book } from '../types'
import { Post } from './Post'
import { useLang } from '../lang'

interface FeedProps {
  books: Book[]
  /** ids déjà consommés (lus en entier, aimés ou enregistrés) — exclus du fil */
  consumed: Set<string>
  isLiked: (id: string) => boolean
  isSaved: (id: string) => boolean
  toggleLike: (id: string) => void
  toggleSave: (id: string) => void
  markRead: (id: string) => void
}

// Mélange Fisher-Yates (ordre aléatoire du fil).
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function Feed({ books, consumed, isLiked, isSaved, toggleLike, toggleSave, markRead }: FeedProps) {
  const { t } = useLang()

  // Snapshot à l'ouverture du fil : ordre aléatoire des livres non consommés.
  // Recalculé à chaque montage du Feed (retour sur l'onglet Accueil).
  const [orderedIds] = useState<string[]>(() =>
    shuffle(books.filter((b) => !consumed.has(b.id)).map((b) => b.id)),
  )

  const byId = useMemo(() => new Map(books.map((b) => [b.id, b])), [books])
  const feedBooks = orderedIds.map((id) => byId.get(id)).filter((b): b is Book => Boolean(b))

  if (feedBooks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center px-8 py-24 text-neutral-400">
        <div className="brand text-3xl text-neutral-300 mb-2">still</div>
        <p className="text-sm leading-relaxed">{t.feedAllCaught}</p>
      </div>
    )
  }

  return (
    <div>
      {feedBooks.map((book) => (
        <Post
          key={book.id}
          book={book}
          liked={isLiked(book.id)}
          saved={isSaved(book.id)}
          onToggleLike={toggleLike}
          onToggleSave={toggleSave}
          onRead={markRead}
        />
      ))}
      <div className="py-10 text-center text-neutral-600 text-sm">
        <div className="brand text-2xl text-neutral-400 mb-1">still</div>
        {t.feedEnd}
      </div>
    </div>
  )
}
