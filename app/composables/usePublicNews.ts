import type { MaybeRefOrGetter } from "vue";
import type { LaravelPaginatedResponse } from "~/types/api";
import type { ApiNewsSummary } from "~/types/api/news";
import { mapNewsSummary } from "~/utils/news/mapNews";

interface PublicNewsQuery {
  page?: number;
  per_page?: number;
  search?: string;
}

export const usePublicNews = (
  query: MaybeRefOrGetter<PublicNewsQuery> = {},
) => useApi("/public/news", {
  query,
  transform: (response: LaravelPaginatedResponse<ApiNewsSummary>) => ({
    ...response,
    data: response.data.map(mapNewsSummary),
  }),
});
