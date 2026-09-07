<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const searchTerm = computed(() => typeof route.query.search === "string" ? route.query.search.trim().slice(0, 150) : "");
const page = computed(() => {
  const value = Number(route.query.page);
  return Number.isSafeInteger(value) && value > 0 ? value : 1;
});
const search = ref(searchTerm.value);
watch(searchTerm, (value) => { search.value = value; });

const { data: response, status, error, refresh } = await usePublicNews(() => ({
  page: page.value,
  per_page: 12,
  search: searchTerm.value || undefined,
}));
const news = computed(() => response.value?.data ?? []);
const meta = computed(() => response.value?.meta);
const { selectedSlug, openNews, closeNews } = useNewsModal();

const submitSearch = () => router.push({
  path: "/news",
  query: { search: search.value.trim() || undefined },
});
const pageLink = (value: number) => ({
  path: "/news",
  query: { search: searchTerm.value || undefined, page: value > 1 ? value : undefined },
});

useSeoMeta({
  title: "Comunicación",
  description: "Noticias y actividades institucionales del Servicio Departamental de Autonomías de La Paz.",
});
</script>

<template>
  <div>
    <NewsHero />
    <section class="section-spacing bg-surface-soft" aria-labelledby="news-list-title">
      <AppContainer>
        <div class="flex flex-col gap-6 border-b border-border-soft pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p class="section-kicker">Comunicación institucional</p>
            <h2 id="news-list-title" class="mt-4 text-3xl font-bold tracking-[-0.045em] text-heading sm:text-4xl">Últimas noticias</h2>
            <p v-if="meta && status === 'success'" class="mt-2 text-sm text-muted" role="status">
              {{ meta.total }} {{ meta.total === 1 ? 'noticia disponible' : 'noticias disponibles' }}
            </p>
          </div>
          <form role="search" class="flex w-full gap-2 md:max-w-md" @submit.prevent="submitSearch">
            <label class="relative block min-w-0 flex-1">
              <span class="sr-only">Buscar noticias</span>
              <input v-model="search" type="search" maxlength="150" placeholder="Buscar noticia..."
                class="h-12 w-full rounded-xl border border-brand-navy/15 bg-white px-4 text-sm text-heading outline-none transition-all placeholder:text-muted focus:border-brand-copper focus:ring-4 focus:ring-brand-copper/10" />
            </label>
            <button type="submit" class="rounded-xl bg-brand-navy px-5 text-sm font-semibold text-white hover:bg-brand-copper-dark">Buscar</button>
          </form>
        </div>
        <div class="mt-10" :aria-busy="status === 'pending'">
          <p v-if="status === 'pending'" role="status" class="py-24 text-center text-sm text-muted">Cargando noticias...</p>
          <div v-else-if="error" role="alert" class="py-24 text-center">
            <p class="text-sm text-muted">No se pudieron cargar las noticias.</p>
            <button type="button" class="mt-4 rounded-full border border-brand-navy/15 px-5 py-2.5 text-sm font-semibold text-heading" @click="refresh()">Reintentar</button>
          </div>
          <template v-else>
            <NewsGrid v-if="news.length" :items="news" @open="openNews" />
            <div v-else class="py-24 text-center">
              <h3 class="text-lg font-bold text-heading">{{ searchTerm ? 'No encontramos noticias' : 'Aún no hay noticias en esta página' }}</h3>
              <p class="mt-2 text-sm text-muted">{{ searchTerm ? 'Intenta realizar la búsqueda utilizando otras palabras.' : 'Las noticias aparecerán aquí cuando estén disponibles.' }}</p>
              <NuxtLink v-if="searchTerm || page > 1" to="/news" class="mt-5 inline-block text-sm font-semibold text-brand-copper-dark">Ver todas las noticias</NuxtLink>
            </div>
            <nav v-if="meta && meta.last_page > 1" aria-label="Paginación de noticias" class="mt-10 flex flex-wrap items-center justify-center gap-4 border-t border-border-soft pt-8">
              <NuxtLink v-if="page > 1" :to="pageLink(Math.min(page - 1, meta.last_page))" class="rounded-full border border-brand-navy/15 px-5 py-2.5 text-sm font-semibold text-heading">Anterior</NuxtLink>
              <span class="text-sm text-muted">Página {{ meta.current_page }} de {{ meta.last_page }}</span>
              <NuxtLink v-if="page < meta.last_page" :to="pageLink(page + 1)" class="rounded-full border border-brand-navy/15 px-5 py-2.5 text-sm font-semibold text-heading">Siguiente</NuxtLink>
            </nav>
          </template>
        </div>
      </AppContainer>
    </section>
    <ClientOnly>
      <LazyNewsModal v-if="selectedSlug" :key="selectedSlug" :slug="selectedSlug" @close="closeNews" />
    </ClientOnly>
  </div>
</template>
