import type { Book } from '../types'

export function GridTiles({ books, onOpen }: { books: Book[]; onOpen: (id: string) => void }) {
  return (
    <div className="grid grid-cols-3 gap-0.5">
      {books.map((b) => (
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
  )
}
