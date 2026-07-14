import { useEffect, useMemo, useRef, useState } from 'react'
import type { Post as PostType } from '../types'
import { Post } from './Post'
import { useLang } from '../lang'

interface FeedProps {
  posts: PostType[]
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

const PAGE = 6 // posts rendus par palier (chargement progressif au scroll)

export function Feed({ posts, consumed, isLiked, isSaved, toggleLike, toggleSave, markRead }: FeedProps) {
  const { t } = useLang()

  // Snapshot à l'ouverture du fil : ordre aléatoire des posts non consommés.
  // Recalculé à chaque montage du Feed (retour sur l'onglet Accueil).
  const [orderedIds] = useState<string[]>(() =>
    shuffle(posts.filter((p) => !consumed.has(p.id)).map((p) => p.id)),
  )

  const byId = useMemo(() => new Map(posts.map((p) => [p.id, p])), [posts])
  const feedPosts = orderedIds.map((id) => byId.get(id)).filter((p): p is PostType => Boolean(p))

  // Rendu progressif : on ne monte pas les 300+ posts d'un coup (crash mobile).
  const [limit, setLimit] = useState(PAGE)
  const sentinel = useRef<HTMLDivElement>(null)
  const total = feedPosts.length

  useEffect(() => {
    const el = sentinel.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setLimit((l) => Math.min(l + PAGE, total))
      },
      { rootMargin: '800px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [total])

  if (total === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center px-8 py-24 text-muted">
        <div className="brand text-3xl text-muted mb-2">still</div>
        <p className="text-sm leading-relaxed">{t.feedAllCaught}</p>
      </div>
    )
  }

  const shown = feedPosts.slice(0, limit)
  const hasMore = limit < total

  return (
    <div>
      {shown.map((post) => (
        <Post
          key={post.id}
          post={post}
          liked={isLiked(post.id)}
          saved={isSaved(post.id)}
          onToggleLike={toggleLike}
          onToggleSave={toggleSave}
          onRead={markRead}
        />
      ))}

      {/* sentinelle : déclenche le chargement du palier suivant */}
      {hasMore && <div ref={sentinel} className="h-1" aria-hidden />}

      {!hasMore && (
        <div className="py-10 text-center text-faint text-sm">
          <div className="brand text-2xl text-muted mb-1">still</div>
          {t.feedEnd}
        </div>
      )}
    </div>
  )
}
