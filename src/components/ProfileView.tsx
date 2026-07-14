import type { Post } from '../types'
import { GridTiles } from './GridTiles'
import { useLang } from '../lang'

interface ProfileViewProps {
  allPosts: Post[]
  likedPosts: Post[]
  savedCount: number
  bookCount: number
  onOpen: (id: string) => void
}

export function ProfileView({ allPosts, likedPosts, savedCount, bookCount, onOpen }: ProfileViewProps) {
  const { t } = useLang()
  return (
    <div className="pb-4">
      <div className="px-4 pt-5 pb-4">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-gradient-to-br from-fuchsia-600 to-indigo-700">
            📚
          </div>
          <div className="flex-1 grid grid-cols-3 text-center">
            <Stat n={likedPosts.length} label={t.statLiked} />
            <Stat n={savedCount} label={t.statSaved} />
            <Stat n={allPosts.length} label={t.statCards} />
          </div>
        </div>
        <div className="mt-3">
          <div className="font-semibold text-sm">{t.journeyTitle}</div>
          <p className="text-sm text-neutral-300 leading-snug mt-0.5">{t.journeyBody(bookCount)}</p>
        </div>
      </div>

      <div className="px-4 pb-2 text-sm font-semibold text-neutral-300 border-t border-neutral-800 pt-3">
        {likedPosts.length > 0 ? t.likedRecent : t.allLibrary}
      </div>
      <GridTiles posts={likedPosts.length > 0 ? likedPosts : allPosts} onOpen={onOpen} />
    </div>
  )
}

function Stat({ n, label }: { n: number; label: string }) {
  return (
    <div>
      <div className="text-lg font-semibold leading-tight">{n}</div>
      <div className="text-xs text-neutral-400">{label}</div>
    </div>
  )
}
