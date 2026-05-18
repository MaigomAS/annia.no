import { createContext, useContext, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export type Language = 'en' | 'es'

type TranslationTree = { readonly [key: string]: string | TranslationTree }

const translations = {
  en: {
    common: {
      languageLabel: 'Language',
      english: 'English',
      spanish: 'Spanish',
    },
    nav: {
      platform: 'Platform',
      springChallenges: 'Spring Challenges',
      ecosystem: 'Ecosystem',
      podcasts: 'Podcasts',
      contact: 'Contact',
      applyAsPartner: 'Apply as Partner',
      homeAria: 'ANNIA home',
      primaryAria: 'Primary navigation',
      mobileMenu: 'Mobile menu',
    },
    footer: {
      description: 'A Nordic strategic collaboration infrastructure for applied innovation, sustainability and territorial transformation.',
      platform: 'Platform',
      ecosystemExplorer: 'Ecosystem Explorer',
      activation: 'Activation',
      submitChallenge: 'Submit a Challenge',
      joinTalent: 'Join Talent Network',
      copyright: '© 2026 ANNIA. Strategic ecosystem platform in development.',
    },
    podcasts: {
      eyebrow: 'Podcasts',
      title: 'Listen to the conversations behind the ANNIA operating environment.',
      description: 'A living podcast shelf connected to the ANNIA YouTube channel. Browse laterally, preview the current conversation, then continue on YouTube when you want the full context.',
      intents: {
        first: 'Monthly conversations with founders, institutions and operators building applied transition pathways.',
        second: 'Episodes are pulled from the ANNIA YouTube channel so the carousel can grow as new podcasts are published.',
        third: 'Preview an episode in context, then continue directly on YouTube when you want to watch, subscribe or share.',
      },
      loading: 'Fetching the latest ANNIA podcast episodes from YouTube...',
      fallbackTitle: 'Podcast feed ready for new episodes',
      fallbackDescription: 'We could not load the YouTube feed in this browser session, but the section is connected to {handle} and will populate as public episodes are available.',
      openYouTube: 'Open ANNIA on YouTube',
      latestEpisode: 'Latest episode',
      defaultEpisodeDescription: 'A new ANNIA conversation from our YouTube podcast channel.',
      featuredPodcast: 'Featured podcast',
      watchOnYouTube: 'Watch on YouTube',
      subscribe: 'Subscribe',
      episodesAvailable: '{count} episodes available',
      previousPodcast: 'Previous podcast',
      nextPodcast: 'Next podcast',
      locale: 'en',
    },
  },
  es: {
    common: {
      languageLabel: 'Idioma',
      english: 'Inglés',
      spanish: 'Español',
    },
    nav: {
      platform: 'Plataforma',
      springChallenges: 'Spring Challenges',
      ecosystem: 'Ecosistema',
      podcasts: 'Podcasts',
      contact: 'Contacto',
      applyAsPartner: 'Aplicar como partner',
      homeAria: 'Inicio de ANNIA',
      primaryAria: 'Navegación principal',
      mobileMenu: 'Menú móvil',
    },
    footer: {
      description: 'Infraestructura nórdica de colaboración estratégica para innovación aplicada, sostenibilidad y transformación territorial.',
      platform: 'Plataforma',
      ecosystemExplorer: 'Explorador de ecosistema',
      activation: 'Activación',
      submitChallenge: 'Enviar un desafío',
      joinTalent: 'Unirse a la red de talento',
      copyright: '© 2026 ANNIA. Plataforma estratégica de ecosistema en desarrollo.',
    },
    podcasts: {
      eyebrow: 'Podcasts',
      title: 'Escucha las conversaciones detrás del entorno operativo de ANNIA.',
      description: 'Una biblioteca viva de podcasts conectada al canal de YouTube de ANNIA. Navega lateralmente, previsualiza la conversación activa y continúa en YouTube cuando quieras ver el contexto completo.',
      intents: {
        first: 'Conversaciones mensuales con founders, instituciones y operadores que construyen rutas de transición aplicada.',
        second: 'Los episodios se obtienen desde el canal de YouTube de ANNIA para que el carrusel crezca cuando se publiquen nuevos podcasts.',
        third: 'Previsualiza un episodio en contexto y continúa directamente en YouTube cuando quieras verlo, suscribirte o compartirlo.',
      },
      loading: 'Cargando los últimos episodios de podcast de ANNIA desde YouTube...',
      fallbackTitle: 'Feed de podcasts listo para nuevos episodios',
      fallbackDescription: 'No pudimos cargar el feed de YouTube en esta sesión del navegador, pero la sección está conectada a {handle} y se completará cuando haya episodios públicos disponibles.',
      openYouTube: 'Abrir ANNIA en YouTube',
      latestEpisode: 'Último episodio',
      defaultEpisodeDescription: 'Una nueva conversación de ANNIA desde nuestro canal de podcasts en YouTube.',
      featuredPodcast: 'Podcast destacado',
      watchOnYouTube: 'Ver en YouTube',
      subscribe: 'Suscribirse',
      episodesAvailable: '{count} episodios disponibles',
      previousPodcast: 'Podcast anterior',
      nextPodcast: 'Siguiente podcast',
      locale: 'es',
    },
  },
} as const

type TranslationKey = string

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey, replacements?: Record<string, string | number>) => string
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

function readTranslation(tree: TranslationTree, key: TranslationKey) {
  return key.split('.').reduce<string | TranslationTree | undefined>((value, segment) => {
    if (!value || typeof value === 'string') return undefined
    return value[segment]
  }, tree)
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
    t: (key, replacements = {}) => {
      const translated = readTranslation(translations[language], key) || readTranslation(translations.en, key)
      const template = typeof translated === 'string' ? translated : key

      return Object.entries(replacements).reduce((text, [name, replacement]) => text.replaceAll(`{${name}}`, String(replacement)), template)
    },
  }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) throw new Error('useLanguage must be used within LanguageProvider')

  return context
}
