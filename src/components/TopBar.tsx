import type { Tab } from '../types'
import { useLang } from '../lang'

export function TopBar({ tab, className = '' }: { tab: Tab; className?: string }) {
  const { t } = useLang()

  const titles: Record<Exclude<Tab, 'home'>, string> = {
    explore: t.headerExplore,
    saved: t.headerSaved,
    profile: t.headerProfile,
  }

  return (
    <header className={`shrink-0 h-12 flex items-center px-4 border-b border-line bg-page/95 backdrop-blur ${className}`}>
      {tab === 'home' ? (
        <span className="brand text-2xl">still</span>
      ) : (
        <span className="text-base font-semibold mx-auto">{titles[tab]}</span>
      )}
    </header>
  )
}
