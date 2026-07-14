import type { Post } from '../types'
import { GridTiles } from './GridTiles'
import { BookmarkIcon } from './Icons'
import { useLang } from '../lang'

export function SavedView({ posts, onOpen }: { posts: Post[]; onOpen: (id: string) => void }) {
  const { t } = useLang()
  return (
    <div>
      <div className="px-4 py-4 border-b border-line">
        <h1 className="text-lg font-semibold">{t.savedTitle}</h1>
        <p className="text-sm text-muted">{t.savedSubtitle}</p>
      </div>
      {posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center px-8 py-24 text-faint">
          <BookmarkIcon className="w-12 h-12 mb-3" />
          <p className="font-semibold text-muted">{t.savedEmptyTitle}</p>
          <p className="text-sm mt-1">{t.savedEmptyBody}</p>
        </div>
      ) : (
        <GridTiles posts={posts} onOpen={onOpen} />
      )}
    </div>
  )
}
