<script setup lang="ts">
import { mockNews } from "~/data/news";

definePageMeta({
  path: "/noticias",
});

const search = ref("");

const filteredNews = computed(() => {
  const term = search.value.trim().toLocaleLowerCase("es");

  if (!term) {
    return mockNews;
  }

  return mockNews.filter((news) => {
    return [news.title, news.subtitle, news.excerpt]
      .filter(Boolean)
      .some((value) => value!.toLocaleLowerCase("es").includes(term));
  });
});

const { selectedNews, openNews, closeNews } = useNewsModal(mockNews);

useSeoMeta({
  title: "Comunicación",

  description:
    "Noticias y actividades institucionales del Servicio Departamental de Autonomías de La Paz.",
});
</script>

<template>
  <div>
    <NewsHero />

    <section class="section-spacing bg-white">
      <AppContainer>
        <!-- Cabecera listado -->

        <div
          class="flex flex-col gap-6 border-b border-border-soft pb-8 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p
              class="text-xs font-bold uppercase tracking-[0.14em] text-sedalp-green"
            >
              Comunicación institucional
            </p>

            <h2
              class="mt-2 text-2xl font-extrabold tracking-[-0.035em] text-heading sm:text-3xl"
            >
              Últimas noticias
            </h2>

            <p class="mt-2 text-sm text-muted">
              {{ filteredNews.length }}
              noticias disponibles
            </p>
          </div>

          <!-- Buscador -->

          <label class="relative block w-full md:max-w-sm">
            <span class="sr-only"> Buscar noticias </span>

            <svg
              viewBox="0 0 24 24"
              class="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted"
              aria-hidden="true"
            >
              <circle
                cx="11"
                cy="11"
                r="6.5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
              />

              <path
                d="m16 16 4 4"
                fill="none"
                stroke="currentColor"
                stroke-width="1.7"
                stroke-linecap="round"
              />
            </svg>

            <input
              v-model="search"
              type="search"
              placeholder="Buscar noticia..."
              class="h-12 w-full rounded-xl border border-border-soft bg-surface-soft pl-12 pr-4 text-sm text-heading outline-none transition-all placeholder:text-muted focus:border-sedalp-green/40 focus:bg-white focus:ring-4 focus:ring-sedalp-green/10"
            />
          </label>
        </div>

        <!-- Noticias -->

        <div class="mt-10">
          <NewsGrid
            v-if="filteredNews.length"
            :items="filteredNews"
            @open="openNews"
          />

          <div v-else class="py-24 text-center">
            <div
              class="mx-auto flex size-16 items-center justify-center rounded-full bg-surface-green text-2xl text-sedalp-green"
            >
              ⌕
            </div>

            <h3 class="mt-5 text-lg font-bold text-heading">
              No encontramos noticias
            </h3>

            <p class="mt-2 text-sm text-muted">
              Intenta realizar la búsqueda utilizando otras palabras.
            </p>
          </div>
        </div>
      </AppContainer>
    </section>

    <!-- Exactamente el mismo modal -->

    <NewsModal v-if="selectedNews" :news="selectedNews" @close="closeNews" />
  </div>
</template>
