import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Lang } from './types'
import { strings, type UIStrings } from './i18n'

interface LangValue {
  lang: Lang
  setLang: (l: Lang) => void
  toggle: () => void
  t: UIStrings
}

const LangContext = createContext<LangValue | null>(null)

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('still.lang')
    if (saved === 'en' || saved === 'fr') return saved
  } catch {
    /* ignore */
  }
  const nav = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : 'fr'
  return nav.startsWith('en') ? 'en' : 'fr'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)

  useEffect(() => {
    try {
      localStorage.setItem('still.lang', lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<LangValue>(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === 'fr' ? 'en' : 'fr')),
      t: strings(lang),
    }),
    [lang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang(): LangValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within a LangProvider')
  return ctx
}
