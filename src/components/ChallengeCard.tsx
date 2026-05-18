import { MapPin } from 'lucide-react'
import type { Challenge } from '../data/challenges'
import { useI18n } from '../i18n/I18nProvider'
import { categoryLabels, statusLabels } from '../i18n/translations'
import { GlassPanel } from './GlassPanel'

export function ChallengeCard({ challenge }: { challenge: Challenge }) {
  const { t } = useI18n()

  return (
    <GlassPanel className="group overflow-hidden transition hover:-translate-y-1 hover:border-cyanMist/35">
      <img src={challenge.image} alt="" className="h-48 w-full object-cover opacity-80 transition group-hover:scale-[1.03]" />
      <div className="p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]">
          <span className="rounded-full border border-cyanMist/30 bg-cyanMist/10 px-3 py-1 text-cyanMist">{t(categoryLabels[challenge.category])}</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-steel">{t(statusLabels[challenge.status])}</span>
        </div>
        <h3 className="text-xl font-semibold text-bone">{challenge.title}</h3>
        <p className="mt-3 leading-7 text-steel">{challenge.summary}</p>
        <p className="mt-5 flex items-center gap-2 text-sm text-arctic"><MapPin className="h-4 w-4" />{challenge.region}</p>
        <ul className="mt-5 space-y-2 text-sm text-steel">
          {challenge.outcomes.map((outcome) => <li key={outcome} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-lichen" />{outcome}</li>)}
        </ul>
      </div>
    </GlassPanel>
  )
}
