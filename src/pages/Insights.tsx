import { useEffect, useMemo, useRef, useState } from 'react'
import { SectionHeader } from '../components/SectionHeader'
import { useI18n } from '../i18n/I18nProvider'
import { localizeInsight } from '../i18n/localize'
import { copy, localizedInsights } from '../i18n/translations'

type PodcastEpisode = {
  id: string
  title: string
  link: string
  thumbnail: string
  published: string
}

const PODCAST_CHANNEL_URL = 'https://www.youtube.com/@ANNiA-Hub'
const PODCAST_RSS_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCQ4hR0xXP4OX9h4QRGVIX7Q'
const RSS_PROXY_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent(PODCAST_RSS_URL)}`

function extractTagValue(entry: string, tagName: string): string {
  const match = entry.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`))
  return match?.[1]?.trim() ?? ''
}

function parseYoutubeFeed(xml: string): PodcastEpisode[] {
  return xml
    .split('<entry>')
    .slice(1)
    .map((entry) => {
      const videoId = extractTagValue(entry, 'yt:videoId')
      const title = extractTagValue(entry, 'title')
      const published = extractTagValue(entry, 'published')
      return {
        id: videoId,
        title,
        published,
        link: `https://www.youtube.com/watch?v=${videoId}`,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      }
    })
    .filter((episode) => episode.id && episode.title)
}

export function Insights() {
  const { locale, t } = useI18n()
  const insights = localizedInsights.map((insight) => localizeInsight(insight, locale))
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([])
  const [isLoadingPodcasts, setIsLoadingPodcasts] = useState(true)
  const [podcastError, setPodcastError] = useState(false)
  const carouselRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let isMounted = true

    const loadEpisodes = async () => {
      try {
        const response = await fetch(RSS_PROXY_URL)
        if (!response.ok) throw new Error('Unable to load podcast feed')

        const xml = await response.text()
        const items = parseYoutubeFeed(xml).slice(0, 12)

        if (isMounted) {
          setEpisodes(items)
          setPodcastError(items.length === 0)
        }
      } catch (error) {
        if (isMounted) {
          setPodcastError(true)
        }
      } finally {
        if (isMounted) {
          setIsLoadingPodcasts(false)
        }
      }
    }

    void loadEpisodes()

    return () => {
      isMounted = false
    }
  }, [])

  const text = useMemo(
    () =>
      locale === 'es'
        ? {
            podcastsEyebrow: 'Podcast ANNIA Hub',
            podcastsTitle: 'Podcasts y entrevistas para navegar el cambio',
            podcastsDescription: 'Episodios conectados a nuestros insights. Explora de forma lateral y abre el episodio completo en YouTube.',
            loading: 'Cargando episodios…',
            empty: 'No pudimos cargar los episodios por ahora. Puedes verlos directamente en el canal de YouTube.',
            openChannel: 'Ir al canal',
            listenEpisode: 'Ver episodio',
            previous: 'Anterior',
            next: 'Siguiente',
          }
        : {
            podcastsEyebrow: 'ANNIA Hub Podcast',
            podcastsTitle: 'Podcasts and interviews to navigate complexity',
            podcastsDescription: 'Episodes connected to our insights. Browse laterally and open the full conversation on YouTube.',
            loading: 'Loading episodes…',
            empty: 'We could not load episodes right now. You can still browse them directly on YouTube.',
            openChannel: 'Open channel',
            listenEpisode: 'Watch episode',
            previous: 'Previous',
            next: 'Next',
          },
    [locale]
  )

  const scrollByCards = (direction: 'left' | 'right') => {
    const container = carouselRef.current
    if (!container) return
    const amount = Math.max(container.clientWidth * 0.8, 320)
    container.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader eyebrow={t(copy.insightsPage.eyebrow)} title={t(copy.insightsPage.title)} description={t(copy.insightsPage.description)} />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {insights.map((insight) => <article key={insight.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055]"><img src={insight.image} alt="" className="h-56 w-full object-cover opacity-80" /><div className="p-6"><p className="text-xs uppercase tracking-[0.24em] text-cyanMist">{insight.eyebrow}</p><h2 className="mt-3 text-xl font-semibold text-bone">{insight.title}</h2><p className="mt-3 leading-7 text-steel">{insight.excerpt}</p><p className="mt-5 text-sm text-arctic">{insight.readTime}</p></div></article>)}
      </div>

      <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
        <SectionHeader eyebrow={text.podcastsEyebrow} title={text.podcastsTitle} description={text.podcastsDescription} />

        <div className="mt-6 flex items-center justify-between gap-3">
          <a
            href={PODCAST_CHANNEL_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-bone transition hover:border-cyanMist/70"
          >
            {text.openChannel}
          </a>
          <div className="flex gap-2">
            <button type="button" onClick={() => scrollByCards('left')} className="rounded-full border border-white/15 px-4 py-2 text-sm text-bone hover:border-cyanMist/70" aria-label={text.previous}>←</button>
            <button type="button" onClick={() => scrollByCards('right')} className="rounded-full border border-white/15 px-4 py-2 text-sm text-bone hover:border-cyanMist/70" aria-label={text.next}>→</button>
          </div>
        </div>

        {isLoadingPodcasts && <p className="mt-6 text-sm text-steel">{text.loading}</p>}

        {!isLoadingPodcasts && podcastError && <p className="mt-6 text-sm text-steel">{text.empty}</p>}

        {!isLoadingPodcasts && !podcastError && (
          <div ref={carouselRef} className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {episodes.map((episode) => (
              <article key={episode.id} className="group min-w-[280px] max-w-[280px] snap-start overflow-hidden rounded-3xl border border-white/10 bg-midnight/80">
                <img src={episode.thumbnail} alt={episode.title} className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.02]" loading="lazy" />
                <div className="p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-cyanMist">{new Date(episode.published).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                  <h3 className="mt-2 line-clamp-2 text-base font-semibold text-bone">{episode.title}</h3>
                  <a href={episode.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-medium text-arctic underline decoration-arctic/40 underline-offset-4">
                    {text.listenEpisode}
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
