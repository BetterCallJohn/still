import { useEffect } from 'react'
import type { Book } from '../types'
import { Carousel } from './Carousel'
import { HeartIcon, BookmarkIcon } from './Icons'
import { useLang } from '../lang'

interface BookModalProps {
  book: Book
  liked: boolean
  saved: boolean
  onToggleLike: (id: string) => void
  onToggleSave: (id: string) => void
  onRead: (id: string) => void
  onClose: () => void
}

export function BookModal({ book, liked, saved, onToggleLike, onToggleSave, onRead, onClose }: BookModalProps) {
  const { t } = useLang()
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col">
      <div className="mx-auto w-full max-w-[480px] flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-3 px-4 py-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center text-lg"
            style={{ background: `linear-gradient(135deg, ${book.theme.from}, ${book.theme.to})` }}
          >
            {book.glyph}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold">{book.handle}</div>
            <div className="text-[11px] text-neutral-400 truncate">{book.title} · {book.author}</div>
          </div>
          <button onClick={onClose} aria-label={t.closeLabel} className="text-2xl text-neutral-300 px-2 leading-none">×</button>
        </div>

        <div className="rounded-xl overflow-hidden mx-2">
          <Carousel book={book} onComplete={() => onRead(book.id)} />
        </div>

        <div className="flex items-center gap-5 px-4 py-4">
          <button onClick={() => onToggleLike(book.id)} className="active:scale-90 transition-transform">
            <HeartIcon filled={liked} />
          </button>
          <button onClick={() => onToggleSave(book.id)} className="ml-auto active:scale-90 transition-transform">
            <BookmarkIcon filled={saved} />
          </button>
        </div>
      </div>
    </div>
  )
}
