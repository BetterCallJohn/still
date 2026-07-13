import { useMemo, useRef, useState } from 'react'
import type { Tab } from './types'
import { getBooks, getStories } from './data/books'
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

  const books = useMemo(() => getBooks(lang), [lang])
  const stories = useMemo(() => getStories(lang), [lang])
  const savedBooks = useMemo(() => books.filter((b) => saved.has(b.id)), [books, saved])
  const likedBooks = useMemo(() => books.filter((b) => liked.has(b.id)), [books, liked])
  const openBook = useMemo(() => books.find((b) => b.id === openId) ?? null, [books, openId])

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
            books={books}
            stories={stories}
            isLiked={liked.has}
            isSaved={saved.has}
            toggleLike={liked.toggle}
            toggleSave={saved.toggle}
            onOpenStory={setOpenId}
          />
        )}
        {tab === 'explore' && <ExploreGrid books={books} onOpen={setOpenId} />}
        {tab === 'saved' && <SavedView books={savedBooks} onOpen={setOpenId} />}
        {tab === 'profile' && (
          <ProfileView allBooks={books} likedBooks={likedBooks} savedCount={saved.set.size} onOpen={setOpenId} />
        )}
      </main>

      <BottomNav tab={tab} onChange={changeTab} />

      {openBook && (
        <BookModal
          book={openBook}
          liked={liked.has(openBook.id)}
          saved={saved.has(openBook.id)}
          onToggleLike={liked.toggle}
          onToggleSave={saved.toggle}
          onClose={() => setOpenId(null)}
        />
      )}
    </div>
  )
}
