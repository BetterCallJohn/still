import { useMemo, useRef, useState } from 'react'
import type { Tab } from './types'
import { getPosts, bookMeta } from './data/books'
import { useLang } from './lang'
import { usePersistentSet } from './hooks/usePersistentSet'
import { TopBar } from './components/TopBar'
import { BottomNav } from './components/BottomNav'
import { Feed } from './components/Feed'
import { ExploreGrid } from './components/ExploreGrid'
import { SavedView } from './components/SavedView'
import { ProfileView } from './components/ProfileView'
import { BookModal } from './components/BookModal'

export default function App() {
  const { lang } = useLang()
  const [tab, setTab] = useState<Tab>('home')
  const [openId, setOpenId] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  const liked = usePersistentSet('still.liked')
  const saved = usePersistentSet('still.saved')
  const read = usePersistentSet('still.read')

  const posts = useMemo(() => getPosts(lang), [lang])
  const savedPosts = useMemo(() => posts.filter((p) => saved.has(p.id)), [posts, saved])
  const likedPosts = useMemo(() => posts.filter((p) => liked.has(p.id)), [posts, liked])
  const openPost = useMemo(() => posts.find((p) => p.id === openId) ?? null, [posts, openId])

  // Consommé = lu en entier ∪ aimé ∪ enregistré → exclu du fil principal.
  const consumed = useMemo(
    () => new Set<string>([...read.set, ...liked.set, ...saved.set]),
    [read.set, liked.set, saved.set],
  )

  function changeTab(t: Tab) {
    setTab(t)
    scrollRef.current?.scrollTo({ top: 0 })
  }

  return (
    <div className="mx-auto max-w-[480px] h-full flex flex-col bg-black relative">
      <TopBar tab={tab} />

      <main ref={scrollRef} className="flex-1 overflow-y-auto no-scrollbar">
        {tab === 'home' && (
          <Feed
            posts={posts}
            consumed={consumed}
            isLiked={liked.has}
            isSaved={saved.has}
            toggleLike={liked.toggle}
            toggleSave={saved.toggle}
            markRead={read.add}
          />
        )}
        {tab === 'explore' && <ExploreGrid posts={posts} onOpen={setOpenId} />}
        {tab === 'saved' && <SavedView posts={savedPosts} onOpen={setOpenId} />}
        {tab === 'profile' && (
          <ProfileView
            allPosts={posts}
            likedPosts={likedPosts}
            savedCount={saved.set.size}
            bookCount={bookMeta.length}
            onOpen={setOpenId}
          />
        )}
      </main>

      <BottomNav tab={tab} onChange={changeTab} />

      {openPost && (
        <BookModal
          post={openPost}
          liked={liked.has(openPost.id)}
          saved={saved.has(openPost.id)}
          onToggleLike={liked.toggle}
          onToggleSave={saved.toggle}
          onRead={read.add}
          onClose={() => setOpenId(null)}
        />
      )}
    </div>
  )
}
