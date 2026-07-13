import { useRef, useState } from 'react'
import type { Book, Slide } from '../types'
import { ClockIcon } from './Icons'

function SlideCard({ slide, book, index, total }: { slide: Slide; book: Book; index: number; total: number }) {
  const { theme } = book
  return (
    <div
      className="snap-center shrink-0 w-full h-full relative flex flex-col justify-between p-7 select-none"
      style={{
        background: `linear-gradient(150deg, ${theme.from} 0%, ${theme.to} 100%)`,
        color: theme.text,
      }}
    >
      {/* top row */}
      <div className="flex items-center justify-between text-[11px] font-semibold tracking-wide opacity-80">
        <span className="uppercase">{slide.eyebrow ?? book.publisher}</span>
        <span>{index + 1}/{total}</span>
      </div>

      {/* main content, vertically centered */}
      <div className="flex-1 flex flex-col justify-center py-4">
        {slide.kind === 'cover' && (
          <div className="text-6xl mb-4" aria-hidden>{book.glyph}</div>
        )}
        {slide.kind === 'quote' ? (
          <blockquote className="text-2xl font-semibold leading-snug italic">
            {slide.title}
          </blockquote>
        ) : (
          <h2 className={`font-bold leading-tight ${slide.kind === 'cover' ? 'text-3xl' : 'text-[26px]'}`}>
            {slide.title}
          </h2>
        )}
        {slide.body && (
          <p className="mt-3 text-[15px] leading-relaxed opacity-90 font-medium">{slide.body}</p>
        )}
        {slide.attribution && (
          <p className="mt-4 text-sm font-semibold opacity-75">— {slide.attribution}</p>
        )}
      </div>

      {/* footer */}
      <div className="flex items-center justify-between text-[11px] font-semibold opacity-70">
        <span>{book.author}</span>
        {slide.kind === 'cover' ? (
          <span className="flex items-center gap-1"><ClockIcon /> {book.readTime}</span>
        ) : slide.kind === 'takeaway' ? (
          <span>✦ swipe pour le suivant</span>
        ) : (
          <span className="brand text-base opacity-90">still</span>
        )}
      </div>
    </div>
  )
}

export function Carousel({ book }: { book: Book }) {
  const scroller = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const total = book.slides.length

  function onScroll() {
    const el = scroller.current
    if (!el) return
    const idx = Math.round(el.scrollLeft / el.clientWidth)
    if (idx !== active) setActive(idx)
  }

  return (
    <div className="relative w-full aspect-[4/5] bg-black">
      <div
        ref={scroller}
        onScroll={onScroll}
        className="no-scrollbar snap-x-mandatory flex overflow-x-auto w-full h-full"
      >
        {book.slides.map((slide, i) => (
          <SlideCard key={i} slide={slide} book={book} index={i} total={total} />
        ))}
      </div>

      {/* dots */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5 pointer-events-none">
        {book.slides.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-200 ${
              i === active ? 'w-1.5 bg-white' : 'w-1.5 bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
