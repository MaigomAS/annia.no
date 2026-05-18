import type { Partner } from '../data/partners'
import { GlassPanel } from './GlassPanel'

export function PartnerCard({ partner }: { partner: Partner }) {
  return (
    <GlassPanel className="p-5 transition hover:border-cyanMist/30">
      <img src={partner.logo} alt={`${partner.name} logo`} className="h-16 w-full object-contain object-left" />
      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-cyanMist">{partner.type}</p>
      <h3 className="mt-2 text-lg font-semibold text-bone">{partner.name}</h3>
      <p className="mt-3 text-sm leading-6 text-steel">{partner.description}</p>
    </GlassPanel>
  )
}
