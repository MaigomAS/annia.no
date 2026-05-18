import type { LucideIcon } from 'lucide-react'
import { GlassPanel } from './GlassPanel'

export function FeatureCard({ icon: Icon, title, description }: { icon: LucideIcon; title: string; description: string }) {
  return (
    <GlassPanel className="group p-6 transition hover:-translate-y-1 hover:border-cyanMist/35">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyanMist">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-bone">{title}</h3>
      <p className="mt-3 leading-7 text-steel">{description}</p>
    </GlassPanel>
  )
}
