import type { MaybeRefOrGetter } from "vue";
import type { LaravelResourceResponse } from "~/types/api";
import type { ApiNewsDetail } from "~/types/api/news";
import { mapNewsDetail } from "~/utils/news/mapNews";

export const usePublicNewsDetail = (slug: MaybeRefOrGetter<string>) =>
  useApi(() => `/public/news/${encodeURIComponent(toValue(slug))}`, {
    transform: (response: LaravelResourceResponse<ApiNewsDetail>) =>
      mapNewsDetail(response.data),
  });
