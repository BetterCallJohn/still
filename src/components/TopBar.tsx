import type { Tab } from '../types'
import { HeartIcon } from './Icons'
import { useLang } from '../lang'

export function TopBar({ tab }: { tab: Tab }) {
  const { lang, setLang, t } = useLang()

  const titles: Record<Exclude<Tab, 'home'>, string> = {
    explore: t.headerExplore,
    saved: t.headerSaved,
    profile: t.headerProfile,
  }

  const LangToggle = (
    <div
      role="group"
      aria-label={t.langLabel}
      className="flex items-center rounded-full bg-neutral-900 p-0.5 text-[11px] font-bold"
    >
      {(['fr', 'en'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`px-2 py-0.5 rounded-full transition-colors ${
            lang === l ? 'bg-white text-black' : 'text-neutral-400'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )

  return (
    <header className="shrink-0 h-12 flex items-center justify-between px-4 border-b border-neutral-800 bg-black/95 backdrop-blur">
      {tab === 'home' ? (
        <>
          <span className="brand text-2xl">still</span>
          <div className="flex items-center gap-3 text-white">
            {LangToggle}
            <HeartIcon className="w-6 h-6" />
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
        </>
      ) : (
        <>
          <span className="w-[68px]" />
          <span className="text-base font-semibold">{titles[tab]}</span>
          {LangToggle}
        </>
      )}
    </header>
  )
}
