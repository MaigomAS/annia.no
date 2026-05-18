import type { ReactNode } from 'react'

export function GlassPanel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-panel backdrop-blur-xl ${className}`}>{children}</div>
}
