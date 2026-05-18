import { Building2, CircleDollarSign, FlaskConical, Landmark, Map, Users } from 'lucide-react'
import type { Challenge } from '../data/challenges'
import type { EcosystemNodeData } from '../data/ecosystem'
import type { Insight } from '../data/insights'
import type { Partner } from '../data/partners'
import type { Locale, LocalizedChallenge, LocalizedEcosystemNode, LocalizedInsight, LocalizedPartner, LocalizedString } from './translations'

const iconMap = {
  people: Users,
  institutions: Landmark,
  territories: Map,
  talent: Building2,
  capital: CircleDollarSign,
  innovation: FlaskConical,
}

export function localizeText(value: LocalizedString, locale: Locale) {
  return value[locale]
}

export function localizeChallenge(challenge: LocalizedChallenge, locale: Locale): Challenge {
  return {
    ...challenge,
    title: localizeText(challenge.title, locale),
    region: localizeText(challenge.region, locale),
    timeframe: localizeText(challenge.timeframe, locale),
    summary: localizeText(challenge.summary, locale),
    outcomes: challenge.outcomes.map((outcome) => localizeText(outcome, locale)),
  }
}

export function localizeEcosystemNode(node: LocalizedEcosystemNode, locale: Locale): EcosystemNodeData {
  return {
    label: localizeText(node.label, locale),
    description: localizeText(node.description, locale),
    icon: iconMap[node.iconKey],
    x: node.x,
    y: node.y,
  }
}

export function localizeInsight(insight: LocalizedInsight, locale: Locale): Insight {
  return {
    ...insight,
    title: localizeText(insight.title, locale),
    eyebrow: localizeText(insight.eyebrow, locale),
    excerpt: localizeText(insight.excerpt, locale),
    readTime: localizeText(insight.readTime, locale),
  }
}

export function localizePartner(partner: LocalizedPartner, locale: Locale): Partner {
  return {
    ...partner,
    type: localizeText(partner.type, locale),
    description: localizeText(partner.description, locale),
  }
}
