import type { Post } from '../types'

export function GridTiles({ posts, onOpen }: { posts: Post[]; onOpen: (id: string) => void }) {
  return (
    <div className="grid grid-cols-3 gap-0.5">
      {posts.map((p) => (
        <button
          key={p.id}
          onClick={() => onOpen(p.id)}
          className="relative aspect-square flex flex-col justify-between p-2.5 text-left"
          style={{ background: `linear-gradient(150deg, ${p.theme.from}, ${p.theme.to})`, color: p.theme.text }}
        >
          <span className="text-2xl" aria-hidden>{p.glyph}</span>
          <span className="text-[11px] font-bold leading-tight line-clamp-3">{p.concept}</span>
        </button>
      ))}
    </div>
  )
}
