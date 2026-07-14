import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type ThemeMode = 'system' | 'light' | 'dark'

interface ThemeValue {
  mode: ThemeMode
  setMode: (m: ThemeMode) => void
  /** Résolu réellement appliqué ('light' | 'dark'). */
  resolved: 'light' | 'dark'
}

const ThemeContext = createContext<ThemeValue | null>(null)

function initialMode(): ThemeMode {
  try {
    const saved = localStorage.getItem('still.theme')
    if (saved === 'system' || saved === 'light' || saved === 'dark') return saved
  } catch {
    /* ignore */
  }
  return 'system'
}

function systemPrefersDark(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(initialMode)
  const [systemDark, setSystemDark] = useState<boolean>(systemPrefersDark)

  // Suivre les changements du système (utile quand mode = 'system').
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => setSystemDark(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const resolved: 'light' | 'dark' = mode === 'system' ? (systemDark ? 'dark' : 'light') : mode

  useEffect(() => {
    try {
      localStorage.setItem('still.theme', mode)
    } catch {
      /* ignore */
    }
    const root = document.documentElement
    root.classList.toggle('dark', resolved === 'dark')
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', resolved === 'dark' ? '#000000' : '#ffffff')
  }, [mode, resolved])

  const value = useMemo<ThemeValue>(() => ({ mode, setMode, resolved }), [mode, resolved])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider')
  return ctx
}
