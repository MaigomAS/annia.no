import { motion } from 'framer-motion'
import { Blocks, Compass, Handshake, Layers3, ShieldCheck, Workflow } from 'lucide-react'
import { ChallengeCard } from '../components/ChallengeCard'
import { CTAButton } from '../components/CTAButton'
import { EcosystemNode } from '../components/EcosystemNode'
import { FeatureCard } from '../components/FeatureCard'
import { GlassPanel } from '../components/GlassPanel'
import { Hero } from '../components/Hero'
import { ImageCard } from '../components/ImageCard'
import { PartnerCard } from '../components/PartnerCard'
import { SectionHeader } from '../components/SectionHeader'
import { StatCard } from '../components/StatCard'
import { useI18n } from '../i18n/I18nProvider'
import { localizeChallenge, localizeEcosystemNode, localizeInsight, localizePartner, localizeText } from '../i18n/localize'
import { copy, localizedChallenges, localizedEcosystemNodes, localizedInsights, localizedPartners, localizedStats } from '../i18n/translations'

const operateIcons = [Compass, Workflow, ShieldCheck]
const featureIcons = [Layers3, Handshake, Blocks]

export function Home() {
  const { locale, t } = useI18n()
  const challenges = localizedChallenges.map((challenge) => localizeChallenge(challenge, locale))
  const ecosystemNodes = localizedEcosystemNodes.map((node) => localizeEcosystemNode(node, locale))
  const insights = localizedInsights.map((insight) => localizeInsight(insight, locale))
  const partners = localizedPartners.map((partner) => localizePartner(partner, locale))

  return (
    <>
      <Hero />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <SectionHeader eyebrow={t(copy.home.what.eyebrow)} title={t(copy.home.what.title)} description={t(copy.home.what.description)} />
          <div className="grid gap-5 sm:grid-cols-2">
            {copy.home.features.map((feature, index) => <FeatureCard key={t(feature.title)} icon={featureIcons[index]} title={t(feature.title)} description={t(feature.description)} />)}
            <ImageCard image="/assets/hero/fjord-network.svg" eyebrow={t(copy.home.imageCard.eyebrow)} title={t(copy.home.imageCard.title)} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader eyebrow={t(copy.home.operate.eyebrow)} title={t(copy.home.operate.title)} description={t(copy.home.operate.description)} />
        <div className="mt-10 grid gap-5 md:grid-cols-3">{copy.home.operate.cards.map((item, index) => <FeatureCard key={t(item.title)} icon={operateIcons[index]} title={t(item.title)} description={t(item.description)} />)}</div>
        <GlassPanel className="mt-8 p-6">
          <div className="grid gap-4 md:grid-cols-5">{copy.home.operate.timeline.map((item, index) => <div key={t(item)} className="relative rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-sm text-cyanMist">0{index + 1}</p><p className="mt-2 font-semibold text-bone">{t(item)}</p></div>)}</div>
        </GlassPanel>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <SectionHeader eyebrow={t(copy.home.spring.eyebrow)} title={t(copy.home.spring.title)} description={t(copy.home.spring.description)} />
          <div className="grid gap-5 md:grid-cols-2">{challenges.slice(0, 2).map((challenge) => <ChallengeCard key={challenge.id} challenge={challenge} />)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader eyebrow={t(copy.home.explorer.eyebrow)} title={t(copy.home.explorer.title)} align="center" />
        <GlassPanel className="relative mt-10 min-h-[36rem] overflow-hidden p-6">
          <div className="absolute inset-10 rounded-full border border-cyanMist/10" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyanMist/10 blur-3xl" />
          <svg className="absolute inset-0 h-full w-full opacity-50" aria-hidden="true"><line x1="46%" y1="40%" x2="12%" y2="24%" stroke="#6FE7F5" strokeWidth="1" /><line x1="46%" y1="40%" x2="68%" y2="16%" stroke="#6FE7F5" strokeWidth="1" /><line x1="46%" y1="40%" x2="78%" y2="62%" stroke="#6FE7F5" strokeWidth="1" /><line x1="46%" y1="40%" x2="22%" y2="70%" stroke="#6FE7F5" strokeWidth="1" /><line x1="46%" y1="40%" x2="46%" y2="82%" stroke="#6FE7F5" strokeWidth="1" /></svg>
          {ecosystemNodes.map((node) => <EcosystemNode key={node.label} node={node} />)}
        </GlassPanel>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader eyebrow={t(copy.home.preview.eyebrow)} title={t(copy.home.preview.title)} description={t(copy.home.preview.description)} />
        <div className="mt-10 grid gap-5 md:grid-cols-4">{localizedStats.map((stat) => <StatCard key={stat.value} value={stat.value} label={localizeText(stat.label, locale)} />)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader eyebrow={t(copy.home.partners.eyebrow)} title={t(copy.home.partners.title)} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{partners.map((partner) => <PartnerCard key={partner.name} partner={partner} />)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {insights.map((insight) => <motion.article key={insight.title} whileHover={{ y: -6 }} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055]"><img src={insight.image} alt="" className="h-48 w-full object-cover opacity-80" /><div className="p-6"><p className="text-xs uppercase tracking-[0.24em] text-cyanMist">{insight.eyebrow}</p><h3 className="mt-3 text-xl font-semibold text-bone">{insight.title}</h3><p className="mt-3 leading-7 text-steel">{insight.excerpt}</p></div></motion.article>)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <GlassPanel className="p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_.8fr]">
            <SectionHeader eyebrow={t(copy.home.collaboration.eyebrow)} title={t(copy.home.collaboration.title)} description={t(copy.home.collaboration.description)} />
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:flex-col"><CTAButton to="/contact">{t(copy.home.collaboration.apply)}</CTAButton><CTAButton to="/contact" variant="secondary">{t(copy.home.collaboration.submit)}</CTAButton><CTAButton to="/contact" variant="ghost">{t(copy.home.collaboration.join)}</CTAButton></div>
          </div>
        </GlassPanel>
      </section>
    </>
  )
}
