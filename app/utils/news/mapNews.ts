import type { ApiNewsDetail, ApiNewsImage, ApiNewsSummary } from "~/types/api/news";
import type { NewsDetail, NewsImage, NewsSummary } from "~/types/news";

const mapNewsImage = (image: ApiNewsImage): NewsImage => {
  const filename = image.filename.endsWith(".webp")
    ? image.filename
    : `${image.filename}.webp`;

  return {
    url: `${image.baseUrl.replace(/\/+$/, "")}/${filename}`,
    alt: image.alt,
    caption: image.caption,
  };
};

export const mapNewsSummary = (news: ApiNewsSummary): NewsSummary => ({
  ...news,
  coverImage: news.coverImage ? mapNewsImage(news.coverImage) : null,
});

export const mapNewsDetail = (news: ApiNewsDetail): NewsDetail => ({
  ...news,
  images: news.images.map(mapNewsImage),
});
