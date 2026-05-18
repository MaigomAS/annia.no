import { ArrowLeft, ArrowRight, ExternalLink, Loader2, Play, Rss } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { GlassPanel } from './GlassPanel'
import { SectionHeader } from './SectionHeader'
import { PodcastEpisode, podcastIntent, youtubeChannel } from '../data/podcasts'

const CORS_PROXIES = [
  (url: string) => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  (url: string) => `https://corsproxy.io/?${encodeURIComponent(url)}`,
]

const directFetch = (url: string) => url
const youtubeApiKey = import.meta.env.VITE_YOUTUBE_API_KEY as string | undefined

async function fetchText(url: string) {
  const candidates = [directFetch, ...CORS_PROXIES]

  for (const toUrl of candidates) {
    try {
      const response = await fetch(toUrl(url))

      if (response.ok) {
        const text = await response.text()

        if (text.trim()) return text
      }
    } catch {
      // Try the next source. Browser CORS rules commonly block direct YouTube RSS requests.
    }
  }

  throw new Error('Unable to fetch the ANNIA YouTube feed.')
}

async function getChannelIdFromApi() {
  if (!youtubeApiKey) return undefined

  const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${youtubeChannel.handle.replace('@', '')}&key=${youtubeApiKey}`)
  if (!response.ok) return undefined

  const data = await response.json() as { items?: { id?: string }[] }
  return data.items?.[0]?.id
}

async function getEpisodesFromApi(channelId: string): Promise<PodcastEpisode[] | undefined> {
  if (!youtubeApiKey) return undefined

  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=12&order=date&type=video&key=${youtubeApiKey}`)
  if (!response.ok) return undefined

  const data = await response.json() as {
    items?: {
      id?: { videoId?: string }
      snippet?: { title?: string; description?: string; publishedAt?: string; thumbnails?: { high?: { url?: string }; medium?: { url?: string }; default?: { url?: string } } }
    }[]
  }

  return data.items?.map((item) => {
    const videoId = item.id?.videoId ?? ''
    const snippet = item.snippet

    return {
      id: videoId,
      title: snippet?.title ?? '',
      description: snippet?.description,
      publishedAt: snippet?.publishedAt,
      thumbnail: snippet?.thumbnails?.high?.url || snippet?.thumbnails?.medium?.url || snippet?.thumbnails?.default?.url || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      url: `https://www.youtube.com/watch?v=${videoId}`,
    }
  }).filter((episode) => episode.id && episode.title)
}

function getChannelId(pageMarkup: string) {
  const patterns = [
    /"channelId":"(?<id>UC[\w-]+)"/,
    /"externalId":"(?<id>UC[\w-]+)"/,
    /youtube(?:\\\/|\/)channel(?:\\\/|\/)(?<id>UC[\w-]+)/,
  ]

  return patterns.map((pattern) => pageMarkup.match(pattern)?.groups?.id).find(Boolean)
}

function getText(entry: Element, selector: string) {
  return entry.querySelector(selector)?.textContent?.trim() ?? ''
}

function parseEpisodes(feedMarkup: string): PodcastEpisode[] {
  const document = new DOMParser().parseFromString(feedMarkup, 'text/xml')
  const entries = Array.from(document.querySelectorAll('entry'))

  return entries.map((entry) => {
    const videoId = getText(entry, 'videoId') || getText(entry, 'yt\\:videoId')
    const title = getText(entry, 'title')
    const description = getText(entry, 'media\\:description') || getText(entry, 'description')
    const publishedAt = getText(entry, 'published')
    const thumbnail = entry.querySelector('media\\:thumbnail')?.getAttribute('url') || entry.querySelector('thumbnail')?.getAttribute('url') || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    const url = getText(entry, 'link') || entry.querySelector('link')?.getAttribute('href') || `https://www.youtube.com/watch?v=${videoId}`

    return { id: videoId, title, description, publishedAt, thumbnail, url }
  }).filter((episode) => episode.id && episode.title)
}

function formatDate(value?: string) {
  if (!value) return 'Latest episode'

  return new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(value))
}

function cleanDescription(value?: string) {
  if (!value) return 'A new ANNIA conversation from our YouTube podcast channel.'

  return value.replace(/\s+/g, ' ').slice(0, 180)
}

export function PodcastHub({ compact = false }: { compact?: boolean }) {
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const [status, setStatus] = useState<'loading' | 'ready' | 'empty' | 'error'>('loading')
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mounted = true

    async function loadEpisodes() {
      try {
        const apiChannelId = await getChannelIdFromApi()
        const channelMarkup = apiChannelId ? '' : await fetchText(youtubeChannel.url)
        const channelId = apiChannelId || getChannelId(channelMarkup)

        if (!channelId) throw new Error('YouTube channel id was not found.')

        const apiEpisodes = await getEpisodesFromApi(channelId)
        const nextEpisodes = apiEpisodes ?? parseEpisodes(await fetchText(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`))

        if (!mounted) return

        setEpisodes(nextEpisodes)
        setStatus(nextEpisodes.length ? 'ready' : 'empty')
      } catch {
        if (!mounted) return
        setStatus('error')
      }
    }

    loadEpisodes()

    return () => {
      mounted = false
    }
  }, [])

  const activeEpisode = episodes[activeIndex]
  const embedUrl = useMemo(() => activeEpisode ? `https://www.youtube.com/embed/${activeEpisode.id}` : undefined, [activeEpisode])

  function navigate(direction: -1 | 1) {
    if (!episodes.length) return

    const nextIndex = (activeIndex + direction + episodes.length) % episodes.length
    setActiveIndex(nextIndex)
    scrollerRef.current?.children[nextIndex]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  return (
    <section className={compact ? 'mx-auto max-w-7xl px-5 py-14 lg:px-8' : 'mx-auto max-w-7xl px-5 py-20 lg:px-8'}>
      <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
        <SectionHeader eyebrow="Podcasts" title="Listen to the conversations behind the ANNIA operating environment." description="A living podcast shelf connected to the ANNIA YouTube channel. Browse laterally, preview the current conversation, then continue on YouTube when you want the full context." />
        <GlassPanel className="p-5">
          <div className="grid gap-3 sm:grid-cols-3">
            {podcastIntent.map((item, index) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4"><p className="text-sm text-cyanMist">0{index + 1}</p><p className="mt-2 text-sm leading-6 text-steel">{item}</p></div>)}
          </div>
        </GlassPanel>
      </div>

      <GlassPanel className="mt-10 overflow-hidden p-4 md:p-6">
        {status === 'loading' ? (
          <div className="flex min-h-96 flex-col items-center justify-center gap-4 text-center text-steel"><Loader2 className="h-8 w-8 animate-spin text-cyanMist" /><p>Fetching the latest ANNIA podcast episodes from YouTube...</p></div>
        ) : null}

        {status === 'error' || status === 'empty' ? (
          <div className="grid min-h-96 place-items-center rounded-[1.5rem] border border-dashed border-white/15 bg-white/[0.03] p-8 text-center">
            <div className="max-w-2xl"><Rss className="mx-auto h-10 w-10 text-cyanMist" /><h2 className="mt-5 text-2xl font-semibold text-bone">Podcast feed ready for new episodes</h2><p className="mt-3 leading-7 text-steel">We could not load the YouTube feed in this browser session, but the section is connected to {youtubeChannel.handle} and will populate as public episodes are available.</p><div className="mt-6"><a href={youtubeChannel.videosUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-3 text-sm font-semibold text-bone transition hover:border-cyanMist/50 hover:bg-white/12">Open ANNIA on YouTube <ExternalLink className="h-4 w-4" /></a></div></div>
          </div>
        ) : null}

        {activeEpisode && embedUrl ? (
          <div className="grid gap-6 lg:grid-cols-[1.18fr_.82fr]">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/30">
              <div className="aspect-video"><iframe title={activeEpisode.title} src={embedUrl} className="h-full w-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>
            </div>
            <div className="flex flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-6">
              <div><p className="text-xs uppercase tracking-[0.24em] text-cyanMist">Featured podcast</p><h2 className="mt-3 text-2xl font-semibold text-bone">{activeEpisode.title}</h2><p className="mt-4 leading-7 text-steel">{cleanDescription(activeEpisode.description)}</p><p className="mt-4 text-sm text-arctic">{formatDate(activeEpisode.publishedAt)}</p></div>
              <div className="mt-8 flex flex-wrap items-center gap-3"><a href={activeEpisode.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyanMist px-5 py-3 text-sm font-semibold text-midnight transition hover:bg-bone"><Play className="h-4 w-4" /> Watch on YouTube</a><a href={youtubeChannel.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-bone transition hover:border-cyanMist/60 hover:text-cyanMist"><ExternalLink className="h-4 w-4" /> Subscribe</a></div>
            </div>
          </div>
        ) : null}

        {episodes.length ? (
          <div className="mt-6">
            <div className="mb-4 flex items-center justify-between gap-4"><p className="text-sm uppercase tracking-[0.2em] text-steel">{episodes.length} episodes available</p><div className="flex gap-2"><button onClick={() => navigate(-1)} className="rounded-full border border-white/10 p-3 text-bone transition hover:border-cyanMist/60 hover:text-cyanMist" aria-label="Previous podcast"><ArrowLeft className="h-4 w-4" /></button><button onClick={() => navigate(1)} className="rounded-full border border-white/10 p-3 text-bone transition hover:border-cyanMist/60 hover:text-cyanMist" aria-label="Next podcast"><ArrowRight className="h-4 w-4" /></button></div></div>
            <div ref={scrollerRef} className="flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-color:#6FE7F5_transparent]">
              {episodes.map((episode, index) => <motion.button key={episode.id} whileHover={{ y: -4 }} onClick={() => setActiveIndex(index)} className={`min-w-[18rem] snap-center overflow-hidden rounded-[1.5rem] border text-left transition ${index === activeIndex ? 'border-cyanMist/70 bg-cyanMist/10' : 'border-white/10 bg-white/[0.045] hover:border-white/25'}`}><img src={episode.thumbnail} alt="" className="h-36 w-full object-cover opacity-85" /><div className="p-4"><p className="text-xs uppercase tracking-[0.2em] text-cyanMist">{formatDate(episode.publishedAt)}</p><h3 className="mt-2 line-clamp-2 font-semibold text-bone">{episode.title}</h3></div></motion.button>)}
            </div>
          </div>
        ) : null}
      </GlassPanel>
    </section>
  )
}
