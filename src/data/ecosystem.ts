import { Building2, CircleDollarSign, FlaskConical, Landmark, Map, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type EcosystemNodeData = {
  label: string
  description: string
  icon: LucideIcon
  x: string
  y: string
}

export const ecosystemNodes: EcosystemNodeData[] = [
  { label: 'People', description: 'Founders, operators, researchers and civic leaders.', icon: Users, x: '12%', y: '24%' },
  { label: 'Institutions', description: 'Public bodies, universities and anchor organizations.', icon: Landmark, x: '68%', y: '16%' },
  { label: 'Territories', description: 'Regions and places with concrete transition agendas.', icon: Map, x: '78%', y: '62%' },
  { label: 'Talent', description: 'International talent activated around real missions.', icon: Building2, x: '22%', y: '70%' },
  { label: 'Capital', description: 'Funding, procurement and investment pathways.', icon: CircleDollarSign, x: '46%', y: '82%' },
  { label: 'Applied Innovation', description: 'Pilots, prototypes and operating models.', icon: FlaskConical, x: '46%', y: '40%' },
]
