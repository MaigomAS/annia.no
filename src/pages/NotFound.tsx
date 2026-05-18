import { CTAButton } from '../components/CTAButton'
import { useI18n } from '../i18n/I18nProvider'
import { copy } from '../i18n/translations'

export function NotFound() {
  const { t } = useI18n()

  return <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8"><h1 className="text-5xl font-semibold text-bone">{t(copy.notFound.title)}</h1><p className="mt-4 text-steel">{t(copy.notFound.description)}</p><div className="mt-8"><CTAButton to="/">{t(copy.notFound.cta)}</CTAButton></div></div>
}
