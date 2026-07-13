import { stories } from '../data/books'

export function StoriesBar({ onOpen }: { onOpen: (id: string) => void }) {
  return (
    <div className="no-scrollbar flex gap-3.5 overflow-x-auto px-3.5 py-3 border-b border-neutral-800">
      {stories.map((s) => (
        <button key={s.id} onClick={() => onOpen(s.id)} className="flex flex-col items-center gap-1 shrink-0 w-16">
          <span
            className="w-16 h-16 rounded-full p-[2.5px]"
            style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
          >
            <span
              className="w-full h-full rounded-full flex items-center justify-center text-2xl ring-2 ring-black"
              style={{ background: `linear-gradient(135deg, ${s.theme.from}, ${s.theme.to})` }}
            >
              {s.glyph}
            </span>
          </span>
          <span className="text-[11px] text-neutral-300 truncate w-full text-center">{s.handle}</span>
        </button>
      ))}
    </div>
  )
}
