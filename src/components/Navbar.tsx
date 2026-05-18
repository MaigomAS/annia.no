import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'
import { copy, navigation } from '../i18n/translations'
import { CTAButton } from './CTAButton'
import { LanguageSwitch } from './LanguageSwitch'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [showPartnerInvite, setShowPartnerInvite] = useState(false)
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
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitch />
          <button
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-semibold text-bone transition hover:border-cyanMist/50 hover:bg-white/12"
            onClick={() => setShowPartnerInvite(!showPartnerInvite)}
            aria-expanded={showPartnerInvite}
            aria-controls="partner-invite"
          >
            {t(copy.nav.partnerCta)}
          </button>
        </div>
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
            <div className="pt-2"><a className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-semibold text-bone transition hover:border-cyanMist/50 hover:bg-white/12" href="https://annia.no/systemthinking/" target="_blank" rel="noreferrer">{t(copy.nav.partnerInvitePrimary)}</a></div>
          </div>
        </div>
      ) : null}
      {showPartnerInvite ? (
        <div id="partner-invite" className="border-t border-white/10 bg-midnight/90 px-5 py-4">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold text-bone">{t(copy.nav.partnerInviteTitle)}</p>
              <p className="mt-1 text-sm text-steel">{t(copy.nav.partnerInviteDescription)}</p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <a className="group inline-flex items-center gap-2 rounded-full border border-cyanMist/60 bg-cyanMist px-5 py-3 text-sm font-semibold text-midnight shadow-glow transition hover:bg-arctic" href="https://annia.no/systemthinking/">{t(copy.nav.partnerInvitePrimary)}</a>
              <a className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-bone transition hover:border-cyanMist/50 hover:bg-white/12" href="https://annia.no/systemthinking/" target="_blank" rel="noreferrer">{t(copy.nav.partnerInviteSecondary)}</a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
