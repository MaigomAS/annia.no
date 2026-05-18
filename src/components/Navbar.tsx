import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage, type Language } from '../i18n'
import { CTAButton } from './CTAButton'

const links = [
  { to: '/', labelKey: 'nav.platform' },
  { to: '/spring-challenges', labelKey: 'nav.springChallenges' },
  { to: '/ecosystem', labelKey: 'nav.ecosystem' },
  { to: '/podcasts', labelKey: 'nav.podcasts' },
  { to: '/contact', labelKey: 'nav.contact' },
]

function LanguageSelect() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <label className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-steel">
      <span className="sr-only">{t('common.languageLabel')}</span>
      <select className="bg-transparent text-bone outline-none" value={language} onChange={(event) => setLanguage(event.target.value as Language)} aria-label={t('common.languageLabel')}>
        <option className="bg-midnight text-bone" value="en">EN</option>
        <option className="bg-midnight text-bone" value="es">ES</option>
      </select>
    </label>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()
  const linkClass = ({ isActive }: { isActive: boolean }) => `rounded-full px-3 py-2 text-sm transition ${isActive ? 'bg-white/10 text-bone' : 'text-steel hover:text-bone'}`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label={t('nav.primaryAria')}>
        <NavLink to="/" className="flex items-center gap-3" aria-label={t('nav.homeAria')}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyanMist/40 bg-cyanMist/10 text-sm font-bold text-cyanMist">A</span>
          <span className="text-lg font-semibold tracking-[0.24em] text-bone">ANNIA</span>
        </NavLink>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => <NavLink key={link.to} to={link.to} className={linkClass}>{t(link.labelKey)}</NavLink>)}
        </div>
        <div className="hidden items-center gap-3 lg:flex"><LanguageSelect /><CTAButton to="/contact" variant="secondary">{t('nav.applyAsPartner')}</CTAButton></div>
        <div className="flex items-center gap-2 lg:hidden"><LanguageSelect /><button className="rounded-full border border-white/10 p-2 text-bone" onClick={() => setOpen(!open)} aria-label={t('nav.mobileMenu')} aria-expanded={open} aria-controls="mobile-menu">
          {open ? <X /> : <Menu />}
        </button></div>
      </nav>
      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => <NavLink key={link.to} to={link.to} className={linkClass} onClick={() => setOpen(false)}>{t(link.labelKey)}</NavLink>)}
          </div>
        </div>
      ) : null}
    </header>
  )
}
