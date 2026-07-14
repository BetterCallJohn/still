import { useMemo, useState } from 'react'
import type { Post } from '../types'
import { useLang } from '../lang'
import { GridTiles } from './GridTiles'

interface ExploreGridProps {
  posts: Post[]
  onOpen: (id: string) => void
}

export function ExploreGrid({ posts, onOpen }: ExploreGridProps) {
  const { t } = useLang()
  const [query, setQuery] = useState('')

  const q = query.trim().toLowerCase()

  const filtered = useMemo(() => {
    if (!q) return []
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q) ||
        p.publisher.toLowerCase().includes(q) ||
        p.concept.toLowerCase().includes(q) ||
        p.tags.some((tag) => tag.includes(q)),
    )
  }, [posts, q])

  return (
    <div className="pb-4">
      <div className="p-3.5">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t.searchPlaceholder}
          className="w-full bg-surface rounded-xl px-4 py-2.5 text-sm placeholder:text-faint outline-none focus:ring-1 focus:ring-neutral-600"
        />
      </div>

      {!q ? (
        <div className="flex flex-col items-center justify-center text-center px-8 py-24 text-faint">
          <svg viewBox="0 0 24 24" className="w-12 h-12 mb-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <p className="text-sm leading-relaxed max-w-[16rem]">{t.searchHint}</p>
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-faint text-sm py-10">{t.noResults(query)}</p>
      ) : (
        <GridTiles posts={filtered} onOpen={onOpen} />
      )}
    </div>
  )
}
