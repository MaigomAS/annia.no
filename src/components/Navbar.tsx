import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CTAButton } from './CTAButton'

const links = [
  { to: '/', label: 'Platform' },
  { to: '/spring-challenges', label: 'Spring Challenges' },
  { to: '/ecosystem', label: 'Ecosystem' },
  { to: '/podcasts', label: 'Podcasts' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }: { isActive: boolean }) => `rounded-full px-3 py-2 text-sm transition ${isActive ? 'bg-white/10 text-bone' : 'text-steel hover:text-bone'}`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-midnight/70 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8" aria-label="Primary navigation">
        <NavLink to="/" className="flex items-center gap-3" aria-label="ANNIA home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyanMist/40 bg-cyanMist/10 text-sm font-bold text-cyanMist">A</span>
          <span className="text-lg font-semibold tracking-[0.24em] text-bone">ANNIA</span>
        </NavLink>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => <NavLink key={link.to} to={link.to} className={linkClass}>{link.label}</NavLink>)}
        </div>
        <div className="hidden lg:block"><CTAButton to="/contact" variant="secondary">Apply as Partner</CTAButton></div>
        <button className="rounded-full border border-white/10 p-2 text-bone lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => <NavLink key={link.to} to={link.to} className={linkClass} onClick={() => setOpen(false)}>{link.label}</NavLink>)}
          </div>
        </div>
      ) : null}
    </header>
  )
}
