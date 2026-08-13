import type { MaybeRefOrGetter } from "vue";

import { toValue } from "vue";

import type { NewsItem } from "~/types/news";

export const useNewsModal = (items: MaybeRefOrGetter<readonly NewsItem[]>) => {
  const route = useRoute();
  const router = useRouter();
  const openedNews = ref<NewsItem | null>(null);

  const selectedSlug = computed(() => {
    const value = route.query.noticia;

    if (Array.isArray(value)) {
      return value[0] ?? null;
    }

    return value ?? null;
  });

  const selectedNews = computed(() => {
    if (openedNews.value) {
      return openedNews.value;
    }

    if (!selectedSlug.value) {
      return null;
    }

    return (
      toValue(items).find((item) => item.slug === selectedSlug.value) ?? null
    );
  });

  const openNews = async (news: NewsItem) => {
    openedNews.value = news;

    await router.push({
      path: route.path,

      query: {
        ...route.query,
        noticia: news.slug,
      },
    });
  };

  const closeNews = async () => {
    openedNews.value = null;

    const query = {
      ...route.query,
    };

    delete query.noticia;

    await router.replace({
      path: route.path,
      query,
    });
  };

  return {
    selectedNews,
    openNews,
    closeNews,
  };
};
