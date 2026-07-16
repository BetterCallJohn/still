import type { Tab } from '../types'
import { HomeIcon, ExploreIcon, BookmarkIcon, ProfileIcon } from './Icons'
import { useLang } from '../lang'

const items: { tab: Tab; Icon: typeof HomeIcon }[] = [
  { tab: 'home', Icon: HomeIcon },
  { tab: 'explore', Icon: ExploreIcon },
  { tab: 'saved', Icon: BookmarkIcon },
  { tab: 'profile', Icon: ProfileIcon },
]

export function BottomNav({ tab, onChange, className = '' }: { tab: Tab; onChange: (t: Tab) => void; className?: string }) {
  const { t } = useLang()
  const labels: Record<Tab, string> = {
    home: t.navHome,
    explore: t.navExplore,
    saved: t.navSaved,
    profile: t.navProfile,
  }
  return (
    // La rangée d'icônes garde une hauteur fixe (h-14) ; la safe-area iOS
    // (home indicator en mode web app) s'ajoute EN DESSOUS, sans écraser les icônes.
    <nav className={`shrink-0 border-t border-line bg-page/95 backdrop-blur pb-[env(safe-area-inset-bottom)] ${className}`}>
      <div className="flex items-center justify-around h-14">
        {items.map(({ tab: it, Icon }) => (
          <button
            key={it}
            onClick={() => onChange(it)}
            aria-label={labels[it]}
            className={`flex items-center justify-center flex-1 h-full ${tab === it ? 'text-ink' : 'text-faint'}`}
          >
            <Icon filled={tab === it} />
          </button>
        ))}
      </div>
    </nav>
  )
}
