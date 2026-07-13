import type { Book } from '../types'
import { Post } from './Post'
import { StoriesBar } from './StoriesBar'

interface FeedProps {
  books: Book[]
  isLiked: (id: string) => boolean
  isSaved: (id: string) => boolean
  toggleLike: (id: string) => void
  toggleSave: (id: string) => void
  onOpenStory: (id: string) => void
}

export function Feed({ books, isLiked, isSaved, toggleLike, toggleSave, onOpenStory }: FeedProps) {
  return (
    <div>
      <StoriesBar onOpen={onOpenStory} />
      {books.map((book) => (
        <Post
          key={book.id}
          book={book}
          liked={isLiked(book.id)}
          saved={isSaved(book.id)}
          onToggleLike={toggleLike}
          onToggleSave={toggleSave}
        />
      ))}
      <div className="py-10 text-center text-neutral-600 text-sm">
        <div className="brand text-2xl text-neutral-400 mb-1">still</div>
        Tu as tout scrollé. Reviens demain pour apprendre encore. ✦
      </div>
    </div>
  )
}
