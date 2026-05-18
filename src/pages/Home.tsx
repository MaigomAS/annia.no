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
import { challenges } from '../data/challenges'
import { ecosystemNodes } from '../data/ecosystem'
import { insights } from '../data/insights'
import { partners } from '../data/partners'
import { stats } from '../data/stats'

const operate = [
  { icon: Compass, title: 'Sense strategic demand', description: 'Identify real institutional, territorial and industry challenges with executive-level relevance.' },
  { icon: Workflow, title: 'Compose pilot coalitions', description: 'Bring together decision-makers, talent, operators and capital around shared operating briefs.' },
  { icon: ShieldCheck, title: 'Validate pathways', description: 'Convert exploration into pilots, procurement routes, investment cases and governance models.' },
]

const timeline = ['Challenge framing', 'Partner matching', 'Pilot sprint', 'Capital pathway', 'Scale decision']

export function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <SectionHeader eyebrow="What is ANNIA" title="A serious coordination layer for systemic change." description="ANNIA connects the actors, intelligence and operational pathways needed to move sustainability and industrial transformation from intent to execution." />
          <div className="grid gap-5 sm:grid-cols-2">
            <FeatureCard icon={Layers3} title="Strategic ecosystem platform" description="A common interface for institutions, territories, companies, talent and capital to coordinate around shared missions." />
            <FeatureCard icon={Handshake} title="Nordic innovation diplomacy" description="A trusted convening model for cross-border partnerships, public-private alignment and applied collaboration." />
            <FeatureCard icon={Blocks} title="Executive systems lab" description="Structured pilots, decision briefs and insight products designed for leaders building future infrastructure." />
            <ImageCard image="/assets/hero/fjord-network.svg" eyebrow="Platform direction" title="Human, industrial and territorial intelligence in one operating environment." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader eyebrow="How we operate" title="From strategic signal to applied pilot." description="ANNIA is designed as infrastructure: repeatable enough to scale, bespoke enough for complex real-world systems." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">{operate.map((item) => <FeatureCard key={item.title} {...item} />)}</div>
        <GlassPanel className="mt-8 p-6">
          <div className="grid gap-4 md:grid-cols-5">{timeline.map((item, index) => <div key={item} className="relative rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-sm text-cyanMist">0{index + 1}</p><p className="mt-2 font-semibold text-bone">{item}</p></div>)}</div>
        </GlassPanel>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <SectionHeader eyebrow="Spring Challenges" title="Applied Innovation Pilots for Real-World Challenges" description="Spring Challenges are ANNIA’s first activation mechanism: collaborative innovation pilots where companies, institutions and international talent explore concrete solutions for sustainability, industry and territorial transformation." />
          <div className="grid gap-5 md:grid-cols-2">{challenges.slice(0, 2).map((challenge) => <ChallengeCard key={challenge.id} challenge={challenge} />)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader eyebrow="Ecosystem Explorer" title="A living map of people, institutions, territories, talent, capital and applied innovation." align="center" />
        <GlassPanel className="relative mt-10 min-h-[36rem] overflow-hidden p-6">
          <div className="absolute inset-10 rounded-full border border-cyanMist/10" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyanMist/10 blur-3xl" />
          <svg className="absolute inset-0 h-full w-full opacity-50" aria-hidden="true"><line x1="46%" y1="40%" x2="12%" y2="24%" stroke="#6FE7F5" strokeWidth="1" /><line x1="46%" y1="40%" x2="68%" y2="16%" stroke="#6FE7F5" strokeWidth="1" /><line x1="46%" y1="40%" x2="78%" y2="62%" stroke="#6FE7F5" strokeWidth="1" /><line x1="46%" y1="40%" x2="22%" y2="70%" stroke="#6FE7F5" strokeWidth="1" /><line x1="46%" y1="40%" x2="46%" y2="82%" stroke="#6FE7F5" strokeWidth="1" /></svg>
          {ecosystemNodes.map((node) => <EcosystemNode key={node.label} node={node} />)}
        </GlassPanel>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader eyebrow="Platform preview" title="Operational signals, not marketing noise." description="The interface is prepared for partner dashboards, challenge submissions, talent profiles, opportunity marketplaces and matchmaking workflows." />
        <div className="mt-10 grid gap-5 md:grid-cols-4">{stats.map((stat) => <StatCard key={stat.label} {...stat} />)}</div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionHeader eyebrow="Institutions and partners" title="Built for credible coalitions." />
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
            <SectionHeader eyebrow="Start a collaboration" title="Bring a serious challenge into the ANNIA operating environment." description="Apply as a partner, submit a challenge, or join the talent network for upcoming Spring Challenges." />
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:flex-col"><CTAButton to="/contact">Apply as Partner</CTAButton><CTAButton to="/contact" variant="secondary">Submit a Challenge</CTAButton><CTAButton to="/contact" variant="ghost">Join Talent Network</CTAButton></div>
          </div>
        </GlassPanel>
      </section>
    </>
  )
}
