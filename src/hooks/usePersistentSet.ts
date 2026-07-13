import { useCallback, useEffect, useState } from 'react'

/** A Set<string> persisted to localStorage, with a toggle helper. */
export function usePersistentSet(key: string) {
  const [set, setSet] = useState<Set<string>>(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw ? new Set<string>(JSON.parse(raw)) : new Set<string>()
    } catch {
      return new Set<string>()
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify([...set]))
    } catch {
      /* ignore quota / private mode errors */
    }
  }, [key, set])

  const toggle = useCallback((id: string) => {
    setSet((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const add = useCallback((id: string) => {
    setSet((prev) => {
      if (prev.has(id)) return prev
      const next = new Set(prev)
      next.add(id)
      return next
    })
  }, [])

  const has = useCallback((id: string) => set.has(id), [set])

  return { set, has, toggle, add }
}
