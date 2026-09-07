import type { RichTextDocument } from "~/types/richText";

export interface NewsImage {
  url: string;
  alt: string;
  caption: string | null;
}

export interface NewsVideo {
  youtubeUrl: string;
  title: string;
  position: number;
}

export interface NewsSummary {
  slug: string;
  title: string;
  subtitle: string | null;
  excerpt: string;
  publishedAt: string;
  coverImage: NewsImage | null;
}

export interface NewsDetail extends Omit<NewsSummary, "coverImage"> {
  description: string;
  content: RichTextDocument;
  images: NewsImage[];
  videos: NewsVideo[];
}
