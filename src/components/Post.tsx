import { useState } from 'react'
import type { Post as PostType } from '../types'
import { Carousel } from './Carousel'
import { HeartIcon, ShareIcon, BookmarkIcon } from './Icons'
import { useLang } from '../lang'

interface PostProps {
  post: PostType
  liked: boolean
  saved: boolean
  onToggleLike: (id: string) => void
  onToggleSave: (id: string) => void
  onRead: (id: string) => void
}

export function Post({ post, liked, saved, onToggleLike, onToggleSave, onRead }: PostProps) {
  const { t, lang } = useLang()
  const [burst, setBurst] = useState(false)
  const [copied, setCopied] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  function buy() {
    const domain = lang === 'fr' ? 'fr' : 'com'
    const q = encodeURIComponent(`${post.title} ${post.author}`)
    window.open(`https://www.amazon.${domain}/s?k=${q}`, '_blank', 'noopener,noreferrer')
    setMenuOpen(false)
  }

  function doLike() {
    if (!liked) {
      setBurst(true)
      setTimeout(() => setBurst(false), 700)
    }
    onToggleLike(post.id)
  }

  function onDoubleTap() {
    if (!liked) doLike()
    else {
      setBurst(true)
      setTimeout(() => setBurst(false), 700)
    }
  }

  async function share() {
    const url = window.location.href
    const data: ShareData = {
      title: `${post.title} — ${post.author}`,
      text: `${post.caption}\n\nsur still`,
      url,
    }
    try {
      if (navigator.share) {
        await navigator.share(data)
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(`${data.title}\n${url}`)
        setCopied(true)
        setTimeout(() => setCopied(false), 1600)
      }
    } catch {
      /* partage annulé par l'utilisateur — on ignore */
    }
  }

  return (
    <article className="border-b border-line pb-3 mb-4 md:mb-8">
      {/* header */}
      <header className="flex items-center gap-3 px-3.5 py-2.5">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-lg ring-2 ring-offset-2 ring-offset-page"
          style={{
            background: `linear-gradient(135deg, ${post.theme.from}, ${post.theme.to})`,
            boxShadow: `0 0 0 2px ${post.theme.from}`,
          }}
          aria-hidden
        >
          {post.glyph}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold leading-tight">{post.handle}</div>
          <div className="text-[11px] text-muted leading-tight truncate">{post.title} · {post.author}</div>
        </div>
        <div className="relative">
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="text-muted text-xl leading-none px-2"
            aria-label={t.optionsLabel}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
          >
            ⋯
          </button>
          {menuOpen && (
            <>
              <div className="fixed inset-0 z-20" onClick={() => setMenuOpen(false)} />
              <div className="absolute right-0 top-full mt-1 z-30 w-48 rounded-xl border border-line bg-page shadow-lg overflow-hidden" role="menu">
                <button
                  onClick={buy}
                  role="menuitem"
                  className="w-full text-left px-4 py-2.5 text-sm hover:bg-surface flex items-center gap-2"
                >
                  <span aria-hidden>🛒</span> {t.buyBook}
                </button>
              </div>
            </>
          )}
        </div>
      </header>

      {/* carousel with double-tap-to-like; reaching the last card marks it read */}
      <div className="relative" onDoubleClick={onDoubleTap}>
        <Carousel post={post} onComplete={() => onRead(post.id)} />
        {burst && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <HeartIcon filled className="w-24 h-24 animate-pop drop-shadow-lg" />
          </div>
        )}
      </div>

      {/* action bar */}
      <div className="flex items-center gap-4 px-3.5 pt-3">
        <button onClick={doLike} aria-label={t.likeLabel} className="active:scale-90 transition-transform">
          <HeartIcon filled={liked} />
        </button>
        <button onClick={share} aria-label={t.shareLabel} className="active:scale-90 transition-transform text-ink">
          <ShareIcon />
        </button>
        {copied && <span className="text-xs text-emerald-400 font-medium">{t.linkCopied}</span>}
        <button
          onClick={() => onToggleSave(post.id)}
          aria-label={t.saveLabel}
          className="ml-auto active:scale-90 transition-transform text-ink"
        >
          <BookmarkIcon filled={saved} />
        </button>
      </div>

      {/* caption */}
      <div className="px-3.5 pt-2">
        <p className="text-sm leading-snug">
          <span className="font-semibold">{post.handle}</span>{' '}
          <span className="text-ink">{post.caption}</span>
        </p>
        <div className="mt-1.5 flex flex-wrap gap-x-2 text-sm text-sky-400">
          {post.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
