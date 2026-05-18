import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-white/10 px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div><p className="text-xl font-semibold tracking-[0.24em] text-bone">ANNIA</p><p className="mt-4 max-w-md leading-7 text-steel">{t('footer.description')}</p></div>
        <div><p className="font-semibold text-bone">{t('footer.platform')}</p><div className="mt-4 grid gap-2 text-steel"><Link to="/spring-challenges">{t('nav.springChallenges')}</Link><Link to="/ecosystem">{t('footer.ecosystemExplorer')}</Link><Link to="/podcasts">{t('nav.podcasts')}</Link></div></div>
        <div><p className="font-semibold text-bone">{t('footer.activation')}</p><div className="mt-4 grid gap-2 text-steel"><Link to="/contact">{t('nav.applyAsPartner')}</Link><Link to="/contact">{t('footer.submitChallenge')}</Link><Link to="/contact">{t('footer.joinTalent')}</Link></div></div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-sm text-steel">{t('footer.copyright')}</p>
    </footer>
  )
}
