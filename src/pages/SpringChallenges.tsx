import { useMemo, useState } from 'react'
import { ChallengeCard } from '../components/ChallengeCard'
import { CTAButton } from '../components/CTAButton'
import { GlassPanel } from '../components/GlassPanel'
import { SectionHeader } from '../components/SectionHeader'
import { challengeCategories, type ChallengeCategory } from '../data/challenges'
import { useI18n } from '../i18n/I18nProvider'
import { localizeChallenge } from '../i18n/localize'
import { categoryLabels, copy, localizedChallenges } from '../i18n/translations'

export function SpringChallenges() {
  const [active, setActive] = useState<ChallengeCategory | 'All'>('All')
  const { locale, t } = useI18n()
  const challenges = useMemo(() => localizedChallenges.map((challenge) => localizeChallenge(challenge, locale)), [locale])
  const filtered = useMemo(() => active === 'All' ? challenges : challenges.filter((challenge) => challenge.category === active), [active, challenges])

  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader eyebrow={t(copy.springPage.header.eyebrow)} title={t(copy.springPage.header.title)} description={t(copy.springPage.header.description)} />
      <div className="mt-8 flex flex-wrap gap-3" aria-label={t(copy.springPage.filterAria)}>
        {(['All', ...challengeCategories] as const).map((category) => <button key={category} onClick={() => setActive(category)} className={`rounded-full border px-4 py-2 text-sm transition ${active === category ? 'border-cyanMist bg-cyanMist text-midnight' : 'border-white/10 bg-white/5 text-steel hover:text-bone'}`}>{t(categoryLabels[category])}</button>)}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((challenge) => <ChallengeCard key={challenge.id} challenge={challenge} />)}</div>
      <GlassPanel className="mt-12 p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_.7fr]">
          <div><h2 className="text-3xl font-semibold text-bone">{t(copy.springPage.submitTitle)}</h2><p className="mt-4 leading-8 text-steel">{t(copy.springPage.submitDescription)}</p></div>
          <div className="flex flex-col justify-center gap-4"><CTAButton to="/contact">{t(copy.home.collaboration.submit)}</CTAButton><CTAButton to="/contact" variant="secondary">{t(copy.home.collaboration.apply)}</CTAButton></div>
        </div>
      </GlassPanel>
    </div>
  )
}
