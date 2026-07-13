import type { Book } from '../types'
import { GridTiles } from './GridTiles'

interface ProfileViewProps {
  allBooks: Book[]
  likedBooks: Book[]
  savedCount: number
  onOpen: (id: string) => void
}

export function ProfileView({ allBooks, likedBooks, savedCount, onOpen }: ProfileViewProps) {
  const totalSlides = allBooks.reduce((n, b) => n + b.slides.length, 0)
  return (
    <div className="pb-4">
      <div className="px-4 pt-5 pb-4">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-gradient-to-br from-fuchsia-600 to-indigo-700">
            📚
          </div>
          <div className="flex-1 grid grid-cols-3 text-center">
            <Stat n={likedBooks.length} label="aimés" />
            <Stat n={savedCount} label="enregistrés" />
            <Stat n={totalSlides} label="fiches" />
          </div>
        </div>
        <div className="mt-3">
          <div className="font-semibold text-sm">Ton parcours</div>
          <p className="text-sm text-neutral-300 leading-snug mt-0.5">
            Apprenant sur <span className="font-semibold">still</span> · {allBooks.length} livres startup, à un swipe.
            Commence par la collection Stripe Press. ✦
          </p>
        </div>
      </div>

      <div className="px-4 pb-2 text-sm font-semibold text-neutral-300 border-t border-neutral-800 pt-3">
        {likedBooks.length > 0 ? 'Aimés récemment' : 'Toute la bibliothèque'}
      </div>
      <GridTiles books={likedBooks.length > 0 ? likedBooks : allBooks} onOpen={onOpen} />
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
