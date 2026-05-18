import { motion } from 'framer-motion'
import { Activity, Globe2, Network } from 'lucide-react'
import { CTAButton } from './CTAButton'
import { GlassPanel } from './GlassPanel'

const meshNodes = [
  { x: '8%', y: '72%', size: 'h-2 w-2', delay: 0.1 },
  { x: '20%', y: '62%', size: 'h-2 w-2', delay: 0.2 },
  { x: '35%', y: '78%', size: 'h-3 w-3', delay: 0.35 },
  { x: '48%', y: '66%', size: 'h-2 w-2', delay: 0.25 },
  { x: '62%', y: '84%', size: 'h-3 w-3', delay: 0.4 },
  { x: '78%', y: '70%', size: 'h-2 w-2', delay: 0.3 },
  { x: '88%', y: '82%', size: 'h-2 w-2', delay: 0.5 },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[url('/assets/hero/fjord-network.svg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/30 via-midnight/75 to-midnight" />
      <div className="hero-mesh absolute inset-0 opacity-80" aria-hidden="true" />
      <svg className="absolute bottom-0 left-0 h-[44%] w-full opacity-70" aria-hidden="true" viewBox="0 0 1440 420" fill="none">
        <path d="M0 360L220 260L460 318L700 210L980 280L1220 230L1440 300" stroke="#7EA6FF" strokeOpacity=".45" />
        <path d="M0 392L200 302L460 355L750 250L960 340L1240 280L1440 360" stroke="#D7E7FF" strokeOpacity=".36" />
      </svg>

      {meshNodes.map((node) => (
        <motion.span
          key={`${node.x}-${node.y}`}
          className={`absolute ${node.size} rounded-full bg-arctic/90 shadow-glow`}
          style={{ left: node.x, top: node.y }}
          animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.2, 1] }}
          transition={{ duration: 3.4, repeat: Infinity, delay: node.delay }}
        />
      ))}

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.img src="/assets/brand/annia-logo.svg" alt="ANNIA" className="mb-8 h-12 w-auto" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} />
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
