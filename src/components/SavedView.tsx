import type { Book } from '../types'
import { GridTiles } from './GridTiles'
import { BookmarkIcon } from './Icons'

export function SavedView({ books, onOpen }: { books: Book[]; onOpen: (id: string) => void }) {
  return (
    <div>
      <div className="px-4 py-4 border-b border-neutral-800">
        <h1 className="text-lg font-semibold">Enregistrés</h1>
        <p className="text-sm text-neutral-400">Tes fiches à relire, toujours à portée.</p>
      </div>
      {books.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center px-8 py-24 text-neutral-500">
          <BookmarkIcon className="w-12 h-12 mb-3" />
          <p className="font-semibold text-neutral-300">Rien d'enregistré</p>
          <p className="text-sm mt-1">Appuie sur le marque-page d'un post pour le retrouver ici.</p>
        </div>
      ) : (
        <GridTiles books={books} onOpen={onOpen} />
      )}
    </div>
  )
}
