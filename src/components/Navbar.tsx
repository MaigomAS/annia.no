import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'
import { copy, navigation } from '../i18n/translations'
import { CTAButton } from './CTAButton'
import { LanguageSwitch } from './LanguageSwitch'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useI18n()
  const linkClass = ({ isActive }: { isActive: boolean }) => `rounded-full px-3 py-2 text-sm transition ${isActive ? 'bg-white/10 text-bone' : 'text-steel hover:text-bone'}`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8" aria-label={t(copy.nav.aria)}>
        <NavLink to="/" className="flex items-center gap-3" aria-label={t(copy.nav.home)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyanMist/40 bg-cyanMist/10 text-sm font-bold text-cyanMist">A</span>
          <span className="text-lg font-semibold tracking-[0.24em] text-bone">ANNIA</span>
        </NavLink>
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((link) => <NavLink key={link.to} to={link.to} className={linkClass}>{t(link.label)}</NavLink>)}
        </div>
        <div className="hidden items-center gap-3 lg:flex"><LanguageSwitch /><CTAButton to="/contact" variant="secondary">{t(copy.nav.partnerCta)}</CTAButton></div>
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitch />
          <button className="rounded-full border border-white/10 p-2 text-bone" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navigation.map((link) => <NavLink key={link.to} to={link.to} className={linkClass} onClick={() => setOpen(false)}>{t(link.label)}</NavLink>)}
            <div className="pt-2"><CTAButton to="/contact" variant="secondary">{t(copy.nav.partnerCta)}</CTAButton></div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
