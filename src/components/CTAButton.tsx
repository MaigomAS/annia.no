import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type CTAButtonProps = {
  children: ReactNode
  to?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export function CTAButton({ children, to = '/', variant = 'primary' }: CTAButtonProps) {
  const styles = {
    primary: 'border-cyanMist/60 bg-cyanMist text-midnight shadow-glow hover:bg-arctic',
    secondary: 'border-white/15 bg-white/8 text-bone hover:border-cyanMist/50 hover:bg-white/12',
    ghost: 'border-transparent bg-transparent text-arctic hover:border-white/10 hover:bg-white/5',
  }

  return (
    <Link className={`group inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition ${styles[variant]}`} to={to}>
      {children}
      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
    </Link>
  )
}
