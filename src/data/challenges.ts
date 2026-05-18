export type ChallengeCategory = 'Sustainability' | 'Industry' | 'Territory' | 'Technology' | 'Capital' | 'Talent'

export type Challenge = {
  id: string
  title: string
  category: ChallengeCategory
  status: 'Scoping' | 'Partnering' | 'Pilot active'
  region: string
  timeframe: string
  image: string
  summary: string
  outcomes: string[]
}

export const challengeCategories: ChallengeCategory[] = [
  'Sustainability',
  'Industry',
  'Territory',
  'Technology',
  'Capital',
  'Talent',
]

export const challenges: Challenge[] = [
  {
    id: 'circular-nordic-industry',
    title: 'Circular Nordic Industry Corridors',
    category: 'Industry',
    status: 'Partnering',
    region: 'Norway · Sweden · Denmark',
    timeframe: '12-week pilot sprint',
    image: '/assets/challenges/circular-industry.svg',
    summary: 'Map industrial side streams, supplier needs and policy pathways into executable circular economy pilots.',
    outcomes: ['Material flow intelligence', 'Partner pilot thesis', 'Investment-ready roadmap'],
  },
  {
    id: 'territorial-resilience',
    title: 'Territorial Resilience Labs',
    category: 'Territory',
    status: 'Scoping',
    region: 'Nordic coastal municipalities',
    timeframe: 'Spring cohort',
    image: '/assets/challenges/territorial-resilience.svg',
    summary: 'Connect municipalities, researchers and talent to prototype adaptation solutions for climate-vulnerable territories.',
    outcomes: ['Challenge dossier', 'Public-private pilot design', 'Impact measurement frame'],
  },
  {
    id: 'blue-energy',
    title: 'Blue Energy Transition Ports',
    category: 'Sustainability',
    status: 'Pilot active',
    region: 'North Atlantic port network',
    timeframe: '90-day validation',
    image: '/assets/challenges/blue-energy.svg',
    summary: 'Advance port decarbonisation through demand aggregation, technology matching and shared transition finance.',
    outcomes: ['Technology shortlist', 'Capital pathway', 'Cross-border partner cluster'],
  },
  {
    id: 'ai-territorial-intelligence',
    title: 'AI Territorial Intelligence Layer',
    category: 'Technology',
    status: 'Scoping',
    region: 'European regions',
    timeframe: 'Discovery track',
    image: '/assets/ecosystem/explorer.svg',
    summary: 'Create a decision-support layer for ecosystem mapping, opportunity discovery and challenge-market fit.',
    outcomes: ['Data model', 'Governance principles', 'Prototype dashboard'],
  },
  {
    id: 'transition-capital',
    title: 'Transition Capital Pathways',
    category: 'Capital',
    status: 'Partnering',
    region: 'Nordic investment network',
    timeframe: 'Partner roundtable',
    image: '/assets/insights/report-3.svg',
    summary: 'Translate applied pilots into credible blended-finance, procurement and venture pathways.',
    outcomes: ['Capital readiness review', 'Investor briefing', 'Pilot financing map'],
  },
  {
    id: 'talent-residency',
    title: 'International Talent Residency',
    category: 'Talent',
    status: 'Scoping',
    region: 'Nordics + global talent',
    timeframe: 'Cohort design',
    image: '/assets/hero/fjord-network.svg',
    summary: 'Match high-signal international talent with institutional challenges and applied transformation projects.',
    outcomes: ['Talent profiles', 'Mentor network', 'Challenge-team matchmaking'],
  },
]
