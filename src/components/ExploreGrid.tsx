import { useMemo, useState } from 'react'
import type { Book } from '../types'

interface ExploreGridProps {
  books: Book[]
  onOpen: (id: string) => void
}

export function ExploreGrid({ books, onOpen }: ExploreGridProps) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return books
    return books.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q) ||
        b.publisher.toLowerCase().includes(q) ||
        b.tags.some((t) => t.includes(q)),
    )
  }, [books, query])

  return (
    <div className="pb-4">
      <div className="p-3.5">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un livre, un auteur, un thème…"
          className="w-full bg-neutral-900 rounded-xl px-4 py-2.5 text-sm placeholder:text-neutral-500 outline-none focus:ring-1 focus:ring-neutral-600"
        />
      </div>
      <div className="grid grid-cols-3 gap-0.5">
        {filtered.map((b) => (
          <button
            key={b.id}
            onClick={() => onOpen(b.id)}
            className="relative aspect-square flex flex-col justify-between p-2.5 text-left"
            style={{ background: `linear-gradient(150deg, ${b.theme.from}, ${b.theme.to})`, color: b.theme.text }}
          >
            <span className="text-2xl" aria-hidden>{b.glyph}</span>
            <span className="text-[11px] font-bold leading-tight line-clamp-3">{b.title}</span>
          </button>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-neutral-500 text-sm py-10">Aucun résultat pour « {query} »</p>
      )}
    </div>
  )
}
