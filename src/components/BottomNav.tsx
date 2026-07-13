import type { Tab } from '../types'
import { HomeIcon, ExploreIcon, BookmarkIcon, ProfileIcon } from './Icons'

const items: { tab: Tab; label: string; Icon: typeof HomeIcon }[] = [
  { tab: 'home', label: 'Accueil', Icon: HomeIcon },
  { tab: 'explore', label: 'Explorer', Icon: ExploreIcon },
  { tab: 'saved', label: 'Enregistrés', Icon: BookmarkIcon },
  { tab: 'profile', label: 'Profil', Icon: ProfileIcon },
]

export function BottomNav({ tab, onChange }: { tab: Tab; onChange: (t: Tab) => void }) {
  return (
    <nav className="shrink-0 border-t border-neutral-800 bg-black/95 backdrop-blur flex items-center justify-around h-14 pb-[env(safe-area-inset-bottom)]">
      {items.map(({ tab: t, label, Icon }) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          aria-label={label}
          className={`flex items-center justify-center flex-1 h-full ${tab === t ? 'text-white' : 'text-neutral-500'}`}
        >
          <Icon filled={tab === t} />
        </button>
      ))}
    </nav>
  )
}
