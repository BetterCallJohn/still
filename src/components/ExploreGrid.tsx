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

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return posts
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q) ||
        p.publisher.toLowerCase().includes(q) ||
        p.concept.toLowerCase().includes(q) ||
        p.tags.some((tag) => tag.includes(q)),
    )
  }, [posts, query])

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
      <GridTiles posts={filtered} onOpen={onOpen} />
      {filtered.length === 0 && (
        <p className="text-center text-faint text-sm py-10">{t.noResults(query)}</p>
      )}
    </div>
  )
}
