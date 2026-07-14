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
  const { t } = useLang()
  const [burst, setBurst] = useState(false)
  const [showFull, setShowFull] = useState(false)
  const [copied, setCopied] = useState(false)

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
    <article className="border-b border-neutral-800 pb-2">
      {/* header */}
      <header className="flex items-center gap-3 px-3.5 py-2.5">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-lg ring-2 ring-offset-2 ring-offset-black"
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
          <div className="text-[11px] text-neutral-400 leading-tight truncate">{post.title} · {post.author}</div>
        </div>
        <button className="text-neutral-400 text-xl leading-none px-2" aria-label={t.optionsLabel}>⋯</button>
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
        <button onClick={share} aria-label={t.shareLabel} className="active:scale-90 transition-transform text-white">
          <ShareIcon />
        </button>
        {copied && <span className="text-xs text-emerald-400 font-medium">{t.linkCopied}</span>}
        <button
          onClick={() => onToggleSave(post.id)}
          aria-label={t.saveLabel}
          className="ml-auto active:scale-90 transition-transform text-white"
        >
          <BookmarkIcon filled={saved} />
        </button>
      </div>

      {/* caption */}
      <div className="px-3.5 pt-2">
        <p className="text-sm leading-snug">
          <span className="font-semibold">{post.handle}</span>{' '}
          <span className="text-neutral-100">{post.caption}</span>
        </p>
        {!showFull ? (
          <button onClick={() => setShowFull(true)} className="text-sm text-neutral-500 mt-0.5">
            {t.viewCards(post.slides.length)}
          </button>
        ) : (
          <div className="mt-2 space-y-1.5">
            {post.slides.filter((s) => s.kind !== 'cover').map((s, i) => (
              <p key={i} className="text-[13px] leading-snug text-neutral-300">
                <span className="font-semibold text-white">{s.title}</span>
                {s.body ? ` — ${s.body}` : ''}
              </p>
            ))}
          </div>
        )}
        <div className="mt-1.5 flex flex-wrap gap-x-2 text-sm text-sky-400">
          {post.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
