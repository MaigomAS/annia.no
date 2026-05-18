import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { defaultLocale, type Locale, type LocalizedString } from './translations'

const storageKey = 'annia-locale'

function isLocale(value: string | null): value is Locale {
  return value === 'es' || value === 'en'
}

function detectLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale

  const stored = window.localStorage.getItem(storageKey)
  if (isLocale(stored)) return stored

  const candidates = window.navigator.languages?.length ? window.navigator.languages : [window.navigator.language]
  const hasEnglishPreference = candidates.some((language) => language.toLowerCase().startsWith('en'))
  return hasEnglishPreference ? 'en' : defaultLocale
}

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (value: LocalizedString) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectLocale())

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = 'ltr'
    window.localStorage.setItem(storageKey, locale)
  }, [locale])

  const value = useMemo<I18nContextValue>(() => ({
    locale,
    setLocale: setLocaleState,
    t: (localized) => localized[locale],
  }), [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used within I18nProvider')
  return context
}
