export type Partner = {
  name: string
  type: string
  logo: string
  description: string
}

export const partners: Partner[] = [
  {
    name: 'Nordic Council Studio',
    type: 'Institutional partner',
    logo: '/assets/logos/nordic-council.svg',
    description: 'Policy convening and cross-border collaboration design for resilient Nordic systems.',
  },
  {
    name: 'Fjord Labs',
    type: 'Applied research',
    logo: '/assets/logos/fjord-labs.svg',
    description: 'Systems research, field validation and innovation methodology for pilot teams.',
  },
  {
    name: 'Arctic University Network',
    type: 'Talent partner',
    logo: '/assets/logos/arctic-university.svg',
    description: 'International researchers and graduate talent aligned to territorial transformation needs.',
  },
  {
    name: 'Green Capital Port',
    type: 'Industry cluster',
    logo: '/assets/logos/green-capital-port.svg',
    description: 'Industrial operators and port authorities building credible transition pilots.',
  },
]
