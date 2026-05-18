import { useMemo, useState } from 'react'
import { ChallengeCard } from '../components/ChallengeCard'
import { CTAButton } from '../components/CTAButton'
import { GlassPanel } from '../components/GlassPanel'
import { SectionHeader } from '../components/SectionHeader'
import { challengeCategories, challenges, type ChallengeCategory } from '../data/challenges'

export function SpringChallenges() {
  const [active, setActive] = useState<ChallengeCategory | 'All'>('All')
  const filtered = useMemo(() => active === 'All' ? challenges : challenges.filter((challenge) => challenge.category === active), [active])

  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader eyebrow="Spring Challenges" title="Applied Innovation Pilots for Real-World Challenges" description="A structured portfolio of sustainability, industry and territorial pilots designed for institutions and companies that need real implementation pathways — not one-off events." />
      <div className="mt-8 flex flex-wrap gap-3" aria-label="Filter challenges by category">
        {(['All', ...challengeCategories] as const).map((category) => <button key={category} onClick={() => setActive(category)} className={`rounded-full border px-4 py-2 text-sm transition ${active === category ? 'border-cyanMist bg-cyanMist text-midnight' : 'border-white/10 bg-white/5 text-steel hover:text-bone'}`}>{category}</button>)}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((challenge) => <ChallengeCard key={challenge.id} challenge={challenge} />)}</div>
      <GlassPanel className="mt-12 p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_.7fr]">
          <div><h2 className="text-3xl font-semibold text-bone">Submit a strategic challenge for the next cohort.</h2><p className="mt-4 leading-8 text-steel">ANNIA helps shape challenge briefs, partner coalitions, talent teams and pilot roadmaps with credible governance and capital pathways.</p></div>
          <div className="flex flex-col justify-center gap-4"><CTAButton to="/contact">Submit a Challenge</CTAButton><CTAButton to="/contact" variant="secondary">Apply as Partner</CTAButton></div>
        </div>
      </GlassPanel>
    </div>
  )
}
