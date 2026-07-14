import { useEffect, useRef, useState } from 'react'
import type { Post, Slide } from '../types'
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
        {slide.kind === 'takeaway' ? (
          <span className="shrink-0">{t.swipeNext}</span>
        ) : (
          <span className="brand text-base opacity-90 shrink-0">still</span>
        )}
      </div>
    </div>
  )
}

export function Carousel({
  post,
  onComplete,
  alwaysKeyboard = false,
}: {
  post: Post
  onComplete?: () => void
  /** Clavier ← / → actif sans survol (ex. post zoomé dans le modal). */
  alwaysKeyboard?: boolean
}) {
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

  // Navigation clavier (desktop) : ← / → quand le curseur survole le carrousel,
  // ou en permanence quand le post est zoomé (alwaysKeyboard).
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    if (!hovered && !alwaysKeyboard) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        go(-1)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        go(1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [hovered, alwaysKeyboard])

  const arrowClass =
    'hidden md:flex absolute top-1/2 -translate-y-1/2 w-9 h-9 items-center justify-center rounded-full border border-line bg-surface text-ink hover:bg-line shadow-sm z-10'

  return (
    <div
      className="relative w-full aspect-[4/5] bg-page"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={scroller}
        onScroll={onScroll}
        className="no-scrollbar snap-x-mandatory flex overflow-x-auto w-full h-full"
      >
        {post.slides.map((slide, i) => (
          <SlideCard key={i} slide={slide} post={post} index={i} total={total} />
        ))}
      </div>

      {/* desktop nav arrows — déportées à l'extérieur de l'image (gauche/droite).
          Masquées sur mobile : le swipe reste le seul mode tactile. */}
      {active > 0 && (
        <button
          type="button"
          aria-label="Précédent"
          onClick={() => go(-1)}
          className={`${arrowClass} right-full mr-3`}
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
      )}
      {active < total - 1 && (
        <button
          type="button"
          aria-label="Suivant"
          onClick={() => go(1)}
          className={`${arrowClass} left-full ml-3`}
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
