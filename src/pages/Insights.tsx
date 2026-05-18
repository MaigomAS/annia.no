import { SectionHeader } from '../components/SectionHeader'
import { insights } from '../data/insights'

export function Insights() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader eyebrow="Insights" title="Reports and field intelligence for strategic transformation." description="Preview briefs and reports that will later connect to partner dashboards, opportunity marketplaces and ecosystem intelligence products." />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {insights.map((insight) => <article key={insight.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055]"><img src={insight.image} alt="" className="h-56 w-full object-cover opacity-80" /><div className="p-6"><p className="text-xs uppercase tracking-[0.24em] text-cyanMist">{insight.eyebrow}</p><h2 className="mt-3 text-xl font-semibold text-bone">{insight.title}</h2><p className="mt-3 leading-7 text-steel">{insight.excerpt}</p><p className="mt-5 text-sm text-arctic">{insight.readTime}</p></div></article>)}
      </div>
    </div>
  )
}
