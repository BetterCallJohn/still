import { useRef, useState } from 'react'
import type { Post, Slide } from '../types'
import { ClockIcon } from './Icons'
import { useLang } from '../lang'

function SlideCard({ slide, post, index, total }: { slide: Slide; post: Post; index: number; total: number }) {
  const { theme } = post
  const { t } = useLang()
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
        <span className="uppercase">{slide.eyebrow ?? post.publisher}</span>
        <span>{index + 1}/{total}</span>
      </div>

      {/* main content, vertically centered */}
      <div className="flex-1 flex flex-col justify-center py-4">
        {slide.kind === 'cover' && (
          <div className="text-6xl mb-4" aria-hidden>{post.glyph}</div>
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
        <span className="truncate pr-2">{post.title} · {post.author}</span>
        {slide.kind === 'cover' ? (
          <span className="flex items-center gap-1 shrink-0"><ClockIcon /> {post.readTime}</span>
        ) : slide.kind === 'takeaway' ? (
          <span className="shrink-0">{t.swipeNext}</span>
        ) : (
          <span className="brand text-base opacity-90 shrink-0">still</span>
        )}
      </div>
    </div>
  )
}

export function Carousel({ post, onComplete }: { post: Post; onComplete?: () => void }) {
  const scroller = useRef<HTMLDivElement>(null)
  const completed = useRef(false)
  const [active, setActive] = useState(0)
  const total = post.slides.length

  function onScroll() {
    const el = scroller.current
    if (!el) return
    const idx = Math.round(el.scrollLeft / el.clientWidth)
    if (idx !== active) setActive(idx)
    // "Lu en entier" : l'utilisateur a atteint la dernière fiche.
    if (idx >= total - 1 && !completed.current) {
      completed.current = true
      onComplete?.()
    }
  }

  function go(dir: -1 | 1) {
    const el = scroller.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' })
  }

  return (
    <div className="group relative w-full aspect-[4/5] bg-black">
      <div
        ref={scroller}
        onScroll={onScroll}
        className="no-scrollbar snap-x-mandatory flex overflow-x-auto w-full h-full"
      >
        {post.slides.map((slide, i) => (
          <SlideCard key={i} slide={slide} post={post} index={i} total={total} />
        ))}
      </div>

      {/* desktop nav arrows (hover) — hidden on mobile so touch stays swipe-only */}
      {active > 0 && (
        <button
          type="button"
          aria-label="Précédent"
          onClick={() => go(-1)}
          className="hidden md:group-hover:flex absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm z-10"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
      )}
      {active < total - 1 && (
        <button
          type="button"
          aria-label="Suivant"
          onClick={() => go(1)}
          className="hidden md:group-hover:flex absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm z-10"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      )}

      {/* dots */}
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5 pointer-events-none">
        {post.slides.map((_, i) => (
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
