export type PodcastEpisode = {
  id: string
  title: string
  url: string
  publishedAt?: string
  description?: string
  thumbnail: string
}

export const youtubeChannel = {
  handle: '@ANNiA-Hub',
  url: 'https://www.youtube.com/@ANNiA-Hub',
  videosUrl: 'https://www.youtube.com/@ANNiA-Hub/videos',
}

export const podcastIntent = [
  'Monthly conversations with founders, institutions and operators building applied transition pathways.',
  'Episodes are pulled from the ANNIA YouTube channel so the carousel can grow as new podcasts are published.',
  'Preview an episode in context, then continue directly on YouTube when you want to watch, subscribe or share.',
]
