export function SectionHeader({ eyebrow, title, description, align = 'left' }: { eyebrow: string; title: string; description?: string; align?: 'left' | 'center' }) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-cyanMist">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-bone md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-steel md:text-lg">{description}</p> : null}
    </div>
  )
}
