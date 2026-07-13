import type { Tab } from '../types'
import { HeartIcon } from './Icons'

const titles: Record<Exclude<Tab, 'home'>, string> = {
  explore: 'Explorer',
  saved: 'Enregistrés',
  profile: 'Profil',
}

export function TopBar({ tab }: { tab: Tab }) {
  return (
    <header className="shrink-0 h-12 flex items-center justify-between px-4 border-b border-neutral-800 bg-black/95 backdrop-blur">
      {tab === 'home' ? (
        <>
          <span className="brand text-2xl">still</span>
          <div className="flex items-center gap-4 text-white">
            <HeartIcon className="w-6 h-6" />
            <span className="relative">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </span>
          </div>
        </>
      ) : (
        <span className="text-base font-semibold mx-auto">{titles[tab]}</span>
      )}
    </header>
  )
}
