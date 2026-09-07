import type { NewsSummary } from "~/types/news";

export const useNewsModal = () => {
  const route = useRoute();
  const router = useRouter();

  const selectedSlug = computed(() => {
    const value = route.query.noticia;
    return (Array.isArray(value) ? value[0] : value) || null;
  });

  const openNews = (news: NewsSummary) => router.push({
    path: route.path,
    hash: route.hash,
    query: { ...route.query, noticia: news.slug },
  });

  const closeNews = () => {
    const query = { ...route.query };
    delete query.noticia;
    return router.replace({ path: route.path, hash: route.hash, query });
  };

  return { selectedSlug, openNews, closeNews };
};
