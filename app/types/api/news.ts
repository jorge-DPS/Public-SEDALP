import type { NewsDetail, NewsSummary } from "~/types/news";

export interface ApiNewsImage {
  filename: string;
  baseUrl: string;
  alt: string;
  caption: string | null;
  position: number;
}

export interface ApiNewsSummary extends Omit<NewsSummary, "coverImage"> {
  coverImage: ApiNewsImage | null;
}

export interface ApiNewsDetail extends Omit<NewsDetail, "images"> {
  images: ApiNewsImage[];
}
