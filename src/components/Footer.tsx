import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'
import { copy } from '../i18n/translations'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-white/10 px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div><p className="text-xl font-semibold tracking-[0.24em] text-bone">ANNIA</p><p className="mt-4 max-w-md leading-7 text-steel">{t(copy.footer.description)}</p></div>
        <div><p className="font-semibold text-bone">{t(copy.footer.platform)}</p><div className="mt-4 grid gap-2 text-steel"><Link to="/spring-challenges">{t(copy.home.spring.eyebrow)}</Link><Link to="/ecosystem">{t(copy.footer.ecosystem)}</Link><Link to="/insights">{t(copy.insightsPage.eyebrow)}</Link></div></div>
        <div><p className="font-semibold text-bone">{t(copy.footer.activation)}</p><div className="mt-4 grid gap-2 text-steel"><Link to="/contact">{t(copy.home.collaboration.apply)}</Link><Link to="/contact">{t(copy.home.collaboration.submit)}</Link><Link to="/contact">{t(copy.home.collaboration.join)}</Link></div></div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-sm text-steel">{t(copy.footer.copyright)}</p>
    </footer>
  )
}
