import { Languages } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'
import { copy, localeNames, type Locale } from '../i18n/translations'

const locales: Locale[] = ['es', 'en']

export function LanguageSwitch() {
  const { locale, setLocale, t } = useI18n()

  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1 text-xs text-steel" aria-label={t(copy.nav.languageLabel)}>
      <Languages className="ml-2 h-4 w-4 text-cyanMist" aria-hidden="true" />
      <span className="sr-only">{t(copy.nav.autoLabel)}</span>
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={`rounded-full px-3 py-1.5 font-semibold transition ${locale === item ? 'bg-cyanMist text-midnight shadow-glow' : 'text-steel hover:bg-white/10 hover:text-bone'}`}
          aria-pressed={locale === item}
          title={localeNames[item]}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
