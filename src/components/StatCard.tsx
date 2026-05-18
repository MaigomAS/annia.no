import { GlassPanel } from './GlassPanel'

export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <GlassPanel className="p-5">
      <p className="text-3xl font-semibold text-bone">{value}</p>
      <p className="mt-2 text-sm uppercase tracking-[0.18em] text-steel">{label}</p>
    </GlassPanel>
  )
}
