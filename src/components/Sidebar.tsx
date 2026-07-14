import type { Tab } from '../types'
import { HomeIcon, ExploreIcon, BookmarkIcon, ProfileIcon } from './Icons'
import { useLang } from '../lang'

const items: { tab: Tab; Icon: typeof HomeIcon }[] = [
  { tab: 'home', Icon: HomeIcon },
  { tab: 'explore', Icon: ExploreIcon },
  { tab: 'saved', Icon: BookmarkIcon },
  { tab: 'profile', Icon: ProfileIcon },
]

/** Desktop-only left navigation rail (Instagram style). Hidden below md. */
export function Sidebar({ tab, onChange }: { tab: Tab; onChange: (t: Tab) => void }) {
  const { lang, setLang, t } = useLang()

  const labels: Record<Tab, string> = {
    home: t.navHome,
    explore: t.navExplore,
    saved: t.navSaved,
    profile: t.navProfile,
  }

  return (
    <nav className="hidden md:flex shrink-0 flex-col h-full border-r border-neutral-800 bg-black md:w-[76px] lg:w-[245px] px-3 py-6">
      {/* brand */}
      <div className="px-3 mb-8 h-10 flex items-center">
        <span className="brand text-3xl hidden lg:block">still</span>
        <span className="text-2xl lg:hidden mx-auto" aria-hidden>📚</span>
      </div>

      {/* nav items */}
      <div className="flex flex-col gap-1.5">
        {items.map(({ tab: it, Icon }) => (
          <button
            key={it}
            onClick={() => onChange(it)}
            aria-label={labels[it]}
            aria-current={tab === it ? 'page' : undefined}
            className={`flex items-center gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-neutral-900 justify-center lg:justify-start ${
              tab === it ? 'text-white font-bold' : 'text-neutral-200 font-normal'
            }`}
          >
            <Icon filled={tab === it} className="w-7 h-7 shrink-0" />
            <span className="hidden lg:block text-base">{labels[it]}</span>
          </button>
        ))}
      </div>

      {/* spacer + language toggle */}
      <div className="mt-auto px-1">
        <div
          role="group"
          aria-label={t.langLabel}
          className="flex items-center justify-center rounded-full bg-neutral-900 p-1 text-xs font-bold w-fit lg:w-full mx-auto"
        >
          {(['fr', 'en'] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`px-3 py-1 rounded-full transition-colors lg:flex-1 ${
                lang === l ? 'bg-white text-black' : 'text-neutral-400'
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
