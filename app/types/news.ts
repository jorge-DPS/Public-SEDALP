export interface NewsImage {
  id: number
  url: string
  alt: string
}

export interface NewsVideo {
  id: number
  url: string
  title?: string
}

export interface NewsItem {
  id: number

  slug: string

  title: string

  excerpt: string

  content: string[]

  publishedAt: string

  coverImage: string

  coverImageAlt: string

  images: NewsImage[]

  videos: NewsVideo[]
}