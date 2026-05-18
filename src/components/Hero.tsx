import { motion } from 'framer-motion'
import { Activity, Globe2, Network } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'
import { copy } from '../i18n/translations'
import { CTAButton } from './CTAButton'
import { GlassPanel } from './GlassPanel'

const signalIcons = { Activity, Globe2, Network }

export function Hero() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden px-5 py-24 lg:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[url('/assets/hero/fjord-network.svg')] bg-cover bg-center opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-midnight/80 to-midnight" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.36em] text-cyanMist">{t(copy.hero.eyebrow)}</p>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-bone md:text-7xl lg:text-8xl">{t(copy.hero.title)}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-steel md:text-xl">{t(copy.hero.description)}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTAButton to="/ecosystem">{t(copy.hero.primaryCta)}</CTAButton>
            <CTAButton to="/spring-challenges" variant="secondary">{t(copy.hero.secondaryCta)}</CTAButton>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <GlassPanel className="p-5">
            <div className="rounded-[1.5rem] border border-white/10 bg-midnight/60 p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="text-sm font-semibold text-bone">{t(copy.hero.panelTitle)}</span><span className="rounded-full bg-lichen/15 px-3 py-1 text-xs text-lichen">{t(copy.hero.live)}</span></div>
              <div className="grid gap-4 py-5 sm:grid-cols-3">
                {copy.hero.metrics.map(({ value, label }) => <div key={value} className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-2xl font-semibold text-bone">{value}</p><p className="text-xs uppercase tracking-widest text-steel">{t(label)}</p></div>)}
              </div>
              <div className="space-y-3">
                {copy.hero.signals.map(({ label, icon }) => {
                  const Icon = signalIcons[icon as keyof typeof signalIcons]
                  return <div key={t(label)} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4"><div className="flex items-center gap-3"><Icon className="h-5 w-5 text-cyanMist" /><span className="text-sm text-bone">{t(label)}</span></div><span className="text-xs text-steel">{t(copy.hero.matching)}</span></div>
                })}
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  )
}
