import type { Tab } from '../types'
import { HomeIcon, ExploreIcon, BookmarkIcon, ProfileIcon } from './Icons'
import { useLang } from '../lang'

const items: { tab: Tab; Icon: typeof HomeIcon }[] = [
  { tab: 'home', Icon: HomeIcon },
  { tab: 'explore', Icon: ExploreIcon },
  { tab: 'saved', Icon: BookmarkIcon },
  { tab: 'profile', Icon: ProfileIcon },
]

/** Desktop-only left navigation rail (icons only). Hidden below md. */
export function Sidebar({ tab, onChange }: { tab: Tab; onChange: (t: Tab) => void }) {
  const { t } = useLang()

  const labels: Record<Tab, string> = {
    home: t.navHome,
    explore: t.navExplore,
    saved: t.navSaved,
    profile: t.navProfile,
  }

  return (
    <nav className="hidden md:flex shrink-0 flex-col items-center h-full w-[76px] border-r border-line bg-page px-2 py-6">
      {/* brand mark */}
      <div className="mb-8 h-10 flex items-center text-2xl" aria-label="still">
        📚
      </div>

      {/* nav items (icons only) */}
      <div className="flex flex-col gap-2">
        {items.map(({ tab: it, Icon }) => (
          <button
            key={it}
            onClick={() => onChange(it)}
            aria-label={labels[it]}
            title={labels[it]}
            aria-current={tab === it ? 'page' : undefined}
            className={`flex items-center justify-center w-12 h-12 rounded-xl transition-colors hover:bg-surface ${
              tab === it ? 'text-ink' : 'text-muted'
            }`}
          >
            <Icon filled={tab === it} className="w-7 h-7" />
          </button>
        ))}
      </div>
    </nav>
  )
}
