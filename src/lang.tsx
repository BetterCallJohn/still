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
  // 1) Préférence déjà choisie par l'utilisateur (persistée).
  try {
    const saved = localStorage.getItem('still.lang')
    if (saved === 'en' || saved === 'fr') return saved
  } catch {
    /* ignore */
  }
  // 2) Détection auto d'après le navigateur : FR seulement si une langue
  //    française est préférée, sinon fallback sur EN par défaut.
  const prefs =
    typeof navigator !== 'undefined'
      ? [navigator.language, ...(navigator.languages ?? [])]
      : []
  const isFrench = prefs.some((l) => l?.toLowerCase().startsWith('fr'))
  return isFrench ? 'fr' : 'en'
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
