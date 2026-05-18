import { motion } from 'framer-motion'
import { Activity, Globe2, Network } from 'lucide-react'
import { CTAButton } from './CTAButton'
import { GlassPanel } from './GlassPanel'

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[url('/assets/hero/fjord-network.svg')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-midnight/80 to-midnight" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-cyanMist">Strategic collaboration infrastructure</p>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-bone md:text-7xl lg:text-8xl">Connecting systems. Accelerating real change.</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-steel md:text-xl">ANNIA is a strategic collaboration infrastructure linking people, institutions and territories to drive applied innovation, sustainability and systemic transformation.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton to="/ecosystem">Explore the ecosystem</CTAButton>
            <CTAButton to="/spring-challenges" variant="secondary">View Spring Challenges</CTAButton>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <GlassPanel className="p-5">
            <div className="rounded-[1.5rem] border border-white/10 bg-midnight/60 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="text-sm font-semibold text-bone">ANNIA operating layer</span><span className="rounded-full bg-lichen/15 px-3 py-1 text-xs text-lichen">Live preview</span></div>
              <div className="grid gap-4 py-5 sm:grid-cols-3">
                {[{ value: '18', label: 'Active pilots' }, { value: '7', label: 'Countries' }, { value: '42', label: 'Partners' }].map(({ value, label }) => <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-2xl font-semibold text-bone">{value}</p><p className="text-xs uppercase tracking-widest text-steel">{label}</p></div>)}
              </div>
              <div className="space-y-3">
                {[{ label: 'Circular industry corridor', Icon: Network }, { label: 'Territorial resilience lab', Icon: Globe2 }, { label: 'Capital pathway review', Icon: Activity }].map(({ label, Icon }) => <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4"><div className="flex items-center gap-3"><Icon className="h-5 w-5 text-cyanMist" /><span className="text-sm text-bone">{label}</span></div><span className="text-xs text-steel">Matching</span></div>)}
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  )
}
