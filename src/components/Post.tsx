import { useState } from 'react'
import type { Book } from '../types'
import { Carousel } from './Carousel'
import { HeartIcon, CommentIcon, ShareIcon, BookmarkIcon } from './Icons'

interface PostProps {
  book: Book
  liked: boolean
  saved: boolean
  onToggleLike: (id: string) => void
  onToggleSave: (id: string) => void
}

function formatCount(n: number) {
  if (n >= 1000) return (n / 1000).toFixed(1).replace('.0', '') + 'k'
  return String(n)
}

export function Post({ book, liked, saved, onToggleLike, onToggleSave }: PostProps) {
  const [burst, setBurst] = useState(false)
  const [showFull, setShowFull] = useState(false)

  function doLike() {
    if (!liked) {
      setBurst(true)
      setTimeout(() => setBurst(false), 700)
    }
    onToggleLike(book.id)
  }

  function onDoubleTap() {
    if (!liked) doLike()
    else {
      setBurst(true)
      setTimeout(() => setBurst(false), 700)
    }
  }

  const likeCount = book.likes + (liked ? 1 : 0)

  return (
    <article className="border-b border-neutral-800 pb-2">
      {/* header */}
      <header className="flex items-center gap-3 px-3.5 py-2.5">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-lg ring-2 ring-offset-2 ring-offset-black"
          style={{
            background: `linear-gradient(135deg, ${book.theme.from}, ${book.theme.to})`,
            // gradient ring feel
            boxShadow: `0 0 0 2px ${book.theme.from}`,
          }}
          aria-hidden
        >
          {book.glyph}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold leading-tight">{book.handle}</div>
          <div className="text-[11px] text-neutral-400 leading-tight truncate">{book.publisher} · {book.author}</div>
        </div>
        <button className="text-neutral-400 text-xl leading-none px-2" aria-label="Options">⋯</button>
      </header>

      {/* carousel with double-tap-to-like */}
      <div className="relative" onDoubleClick={onDoubleTap}>
        <Carousel book={book} />
        {burst && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <HeartIcon filled className="w-24 h-24 animate-pop drop-shadow-lg" />
          </div>
        )}
      </div>

      {/* action bar */}
      <div className="flex items-center gap-4 px-3.5 pt-3">
        <button onClick={doLike} aria-label="J'aime" className="active:scale-90 transition-transform">
          <HeartIcon filled={liked} />
        </button>
        <button aria-label="Commenter" className="active:scale-90 transition-transform text-white">
          <CommentIcon />
        </button>
        <button aria-label="Partager" className="active:scale-90 transition-transform text-white">
          <ShareIcon />
        </button>
        <button
          onClick={() => onToggleSave(book.id)}
          aria-label="Enregistrer"
          className="ml-auto active:scale-90 transition-transform text-white"
        >
          <BookmarkIcon filled={saved} />
        </button>
      </div>

      {/* likes + caption */}
      <div className="px-3.5 pt-2">
        <div className="text-sm font-semibold">{formatCount(likeCount)} j'aime</div>
        <p className="text-sm mt-1 leading-snug">
          <span className="font-semibold">{book.handle}</span>{' '}
          <span className="text-neutral-100">{book.caption}</span>
        </p>
        {!showFull ? (
          <button onClick={() => setShowFull(true)} className="text-sm text-neutral-500 mt-0.5">
            … voir les {book.slides.length} fiches
          </button>
        ) : (
          <div className="mt-2 space-y-1.5">
            {book.slides.filter((s) => s.kind !== 'cover').map((s, i) => (
              <p key={i} className="text-[13px] leading-snug text-neutral-300">
                <span className="font-semibold text-white">{s.title}</span>
                {s.body ? ` — ${s.body}` : ''}
              </p>
            ))}
          </div>
        )}
        <div className="mt-1.5 flex flex-wrap gap-x-2 text-sm text-sky-400">
          {book.tags.map((t) => (
            <span key={t}>#{t}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
