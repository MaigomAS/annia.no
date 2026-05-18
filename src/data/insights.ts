export type Insight = {
  title: string
  eyebrow: string
  image: string
  excerpt: string
  readTime: string
}

export const insights: Insight[] = [
  {
    title: 'Strategic Collaboration Infrastructure: a Nordic operating model',
    eyebrow: 'Platform brief',
    image: '/assets/insights/report-1.svg',
    excerpt: 'A practical frame for coordinating institutions, capital, talent and territories around applied transformation.',
    readTime: '8 min read',
  },
  {
    title: 'Territorial intelligence for sustainability pilots',
    eyebrow: 'Field note',
    image: '/assets/insights/report-2.svg',
    excerpt: 'How challenge definition, ecosystem mapping and demand signals can reduce pilot fragmentation.',
    readTime: '6 min read',
  },
  {
    title: 'From pilots to capital pathways',
    eyebrow: 'Report preview',
    image: '/assets/insights/report-3.svg',
    excerpt: 'Designing applied innovation pilots that can become procurement, investment and scale opportunities.',
    readTime: '10 min read',
  },
]
