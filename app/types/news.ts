export interface NewsImage {
  id: number
  url: string
  alt: string
  caption?: string
}

export interface NewsVideo {
  id: number
  youtubeUrl: string
  title: string
}

export interface NewsItem {
  id: number
  slug: string

  title: string
  subtitle?: string

  excerpt: string
  description: string

  content: string[]

  publishedAt: string

  images: NewsImage[]
  videos: NewsVideo[]
}