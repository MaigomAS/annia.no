import { useEffect, useMemo, useState } from 'react'
import { SectionHeader } from '../components/SectionHeader'
import { useI18n } from '../i18n/I18nProvider'
import { copy } from '../i18n/translations'

type PodcastEpisode = {
  id: string
  title: string
  link: string
  thumbnail: string
  published: string
}

const PODCAST_CHANNEL_URL = 'https://www.youtube.com/@ANNiA-Hub'
const PODCAST_RSS_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=UCQ4hR0xXP4OX9h4QRGVIX7Q'
const RSS_PROXY_URLS = [
  `https://api.allorigins.win/raw?url=${encodeURIComponent(PODCAST_RSS_URL)}`,
  `https://r.jina.ai/http://www.youtube.com/feeds/videos.xml?channel_id=UCQ4hR0xXP4OX9h4QRGVIX7Q`,
]
const UPLOADS_PLAYLIST_ID = 'UUQ4hR0xXP4OX9h4QRGVIX7Q'

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
      return {
        id: videoId,
        title: extractTagValue(entry, 'title'),
        published: extractTagValue(entry, 'published'),
        link: `https://www.youtube.com/watch?v=${videoId}`,
        thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      }
    })
    .filter((episode) => episode.id && episode.title)
}

export function Insights() {
  const { locale, t } = useI18n()
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([])
  const [selectedEpisode, setSelectedEpisode] = useState<PodcastEpisode | null>(null)
  const [isLoadingPodcasts, setIsLoadingPodcasts] = useState(true)
  const [podcastError, setPodcastError] = useState(false)

  useEffect(() => {
    let isMounted = true

    const loadEpisodes = async () => {
      try {
        let xml = ''
        for (const url of RSS_PROXY_URLS) {
          try {
            const response = await fetch(url)
            if (!response.ok) continue
            xml = await response.text()
            if (xml.includes('<entry>')) break
          } catch {
            continue
          }
        }

        if (!xml) throw new Error('Unable to load podcast feed')
        const items = parseYoutubeFeed(xml).slice(0, 20)

        if (isMounted) {
          setEpisodes(items)
          setSelectedEpisode(items[0] ?? null)
          setPodcastError(items.length === 0)
        }
      } catch {
        if (isMounted) setPodcastError(true)
      } finally {
        if (isMounted) setIsLoadingPodcasts(false)
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
            latest: 'Más recientes',
            seeAll: 'Ir al canal',
            loading: 'Cargando episodios…',
            empty: 'No pudimos cargar el listado automático. Puedes reproducir el canal aquí o abrir YouTube.',
            playOnYoutube: 'Reproducir en YouTube',
            chooseEpisode: 'Selecciona un episodio para previsualizarlo.',
          }
        : {
            latest: 'Latest episodes',
            seeAll: 'Open channel',
            loading: 'Loading episodes…',
            empty: 'We could not load the automatic feed. You can still play the channel stream here or open YouTube.',
            playOnYoutube: 'Play on YouTube',
            chooseEpisode: 'Select an episode to preview it.',
          },
    [locale]
  )

  const visibleEpisodes = episodes.slice(0, 4)

  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader eyebrow={t(copy.insightsPage.eyebrow)} title={t(copy.insightsPage.title)} description={t(copy.insightsPage.description)} />

      <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8">
        {isLoadingPodcasts && <p className="text-sm text-steel">{text.loading}</p>}
        {!isLoadingPodcasts && podcastError && (
          <div className="grid gap-4">
            <p className="text-sm text-steel">{text.empty}</p>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-black">
              <iframe
                title="ANNIA Hub uploads"
                src={`https://www.youtube.com/embed/videoseries?list=${UPLOADS_PLAYLIST_ID}`}
                className="aspect-video w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <a href={PODCAST_CHANNEL_URL} target="_blank" rel="noreferrer" className="inline-flex w-fit rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-bone hover:border-cyanMist/70">
              {text.seeAll}
            </a>
          </div>
        )}

        {!isLoadingPodcasts && !podcastError && selectedEpisode && (
          <>
            <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr]">
              <div>
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-black">
                  <iframe
                    title={selectedEpisode.title}
                    src={`https://www.youtube.com/embed/${selectedEpisode.id}`}
                    className="aspect-video w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <h2 className="mt-4 text-xl font-semibold text-bone">{selectedEpisode.title}</h2>
                <a href={selectedEpisode.link} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-medium text-arctic underline decoration-arctic/40 underline-offset-4">
                  {text.playOnYoutube}
                </a>
              </div>

              <div>
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyanMist">{text.latest}</p>
                  <a href={PODCAST_CHANNEL_URL} target="_blank" rel="noreferrer" className="text-sm font-medium text-bone hover:text-cyanMist">
                    {text.seeAll}
                  </a>
                </div>
                <div className="grid gap-3">
                  {visibleEpisodes.map((episode) => (
                    <button
                      key={episode.id}
                      type="button"
                      onClick={() => setSelectedEpisode(episode)}
                      className={`grid w-full grid-cols-[96px_1fr] gap-3 rounded-2xl border p-2 text-left transition ${
                        selectedEpisode.id === episode.id ? 'border-cyanMist/60 bg-cyanMist/10' : 'border-white/10 bg-midnight/60 hover:border-cyanMist/35'
                      }`}
                    >
                      <img src={episode.thumbnail} alt={episode.title} className="h-16 w-24 rounded-xl object-cover" loading="lazy" />
                      <div>
                        <p className="line-clamp-2 text-sm font-medium text-bone">{episode.title}</p>
                        <p className="mt-1 text-xs text-steel">
                          {new Date(episode.published).toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
                {episodes.length > 4 && (
                  <p className="mt-4 text-xs text-steel">{locale === 'es' ? 'Mostrando los 4 más recientes. En el canal puedes navegar todos.' : 'Showing the latest 4. Browse all episodes in the channel.'}</p>
                )}
              </div>
            </div>
          </>
        )}

        {!isLoadingPodcasts && !podcastError && !selectedEpisode && <p className="text-sm text-steel">{text.chooseEpisode}</p>}
      </div>
    </div>
  )
}
