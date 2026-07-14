import type { Lang, Post } from '../types'
import { GridTiles } from './GridTiles'
import { useLang } from '../lang'
import { useTheme, type ThemeMode } from '../theme'

interface ProfileViewProps {
  allPosts: Post[]
  likedPosts: Post[]
  savedCount: number
  bookCount: number
  onOpen: (id: string) => void
}

export function ProfileView({ allPosts, likedPosts, savedCount, bookCount, onOpen }: ProfileViewProps) {
  const { t, lang, setLang } = useLang()
  const { mode, setMode } = useTheme()

  return (
    <div className="pb-4">
      <div className="px-4 pt-5 pb-4">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-4xl bg-gradient-to-br from-fuchsia-600 to-indigo-700 text-white">
            📚
          </div>
          <div className="flex-1 grid grid-cols-3 text-center">
            <Stat n={likedPosts.length} label={t.statLiked} />
            <Stat n={savedCount} label={t.statSaved} />
            <Stat n={allPosts.length} label={t.statCards} />
          </div>
        </div>
        <div className="mt-3">
          <div className="font-semibold text-sm">{t.journeyTitle}</div>
          <p className="text-sm text-muted leading-snug mt-0.5">{t.journeyBody(bookCount)}</p>
        </div>
      </div>

      {/* ── Réglages ── */}
      <div className="px-4 py-4 border-t border-line">
        <div className="text-sm font-semibold mb-3">{t.settingsTitle}</div>

        <div className="space-y-3">
          <SettingRow label={t.langLabel}>
            <Segmented<Lang>
              value={lang}
              onChange={setLang}
              options={[
                { value: 'fr', label: 'FR' },
                { value: 'en', label: 'EN' },
              ]}
            />
          </SettingRow>

          <SettingRow label={t.themeLabel}>
            <Segmented<ThemeMode>
              value={mode}
              onChange={setMode}
              options={[
                { value: 'system', label: t.themeSystem },
                { value: 'light', label: t.themeLight },
                { value: 'dark', label: t.themeDark },
              ]}
            />
          </SettingRow>
        </div>
      </div>

      <div className="px-4 pb-2 text-sm font-semibold text-muted border-t border-line pt-3">
        {likedPosts.length > 0 ? t.likedRecent : t.allLibrary}
      </div>
      <GridTiles posts={likedPosts.length > 0 ? likedPosts : allPosts} onOpen={onOpen} />
    </div>
  )
}

function Stat({ n, label }: { n: number; label: string }) {
  return (
    <div>
      <div className="text-lg font-semibold leading-tight">{n}</div>
      <div className="text-xs text-muted">{label}</div>
    </div>
  )
}

function SettingRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm">{label}</span>
      {children}
    </div>
  )
}

function Segmented<T extends string>({
  value,
  onChange,
  options,
}: {
  value: T
  onChange: (v: T) => void
  options: { value: T; label: string }[]
}) {
  return (
    <div className="flex items-center rounded-full bg-surface p-0.5 text-xs font-bold">
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => onChange(o.value)}
          aria-pressed={value === o.value}
          className={`px-3 py-1 rounded-full transition-colors ${
            value === o.value ? 'bg-ink text-page' : 'text-muted'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
