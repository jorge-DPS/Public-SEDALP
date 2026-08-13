<script setup lang="ts">
import { mockNews } from "~/data/news";
import NewsCard from "~/components/news/NewCard.vue";

definePageMeta({
  path: "/noticias",
});

const route = useRoute();
const router = useRouter();

const search = ref("");

const selectedSlug = computed(() => {
  const value = route.query.noticia;

  return typeof value === "string" ? value : null;
});

const selectedNews = computed(() => {
  if (!selectedSlug.value) {
    return null;
  }

  return mockNews.find((item) => item.slug === selectedSlug.value) ?? null;
});

const filteredNews = computed(() => {
  const term = search.value.trim().toLocaleLowerCase("es");

  if (!term) {
    return mockNews;
  }

  return mockNews.filter((item) => {
    return (
      item.title.toLocaleLowerCase("es").includes(term) ||
      item.excerpt.toLocaleLowerCase("es").includes(term)
    );
  });
});

const closeNews = async () => {
  const query = {
    ...route.query,
  };

  delete query.noticia;

  await router.replace({
    path: "/noticias",
    query,
  });
};

useSeoMeta({
  title: "Noticias",

  description:
    "Conoce las noticias, actividades y acciones institucionales del Servicio Departamental de Autonomías de La Paz.",
});
</script>

<template>
  <main>
    <!-- Hero interior -->

    <section
      class="relative overflow-hidden bg-sedalp-green-darker py-16 text-white sm:py-20 lg:py-24"
    >
      <div
        class="pointer-events-none absolute -right-32 -top-40 size-[420px] rounded-full bg-sedalp-green/40 blur-3xl"
        aria-hidden="true"
      />

      <AppContainer>
        <div class="relative z-10 max-w-3xl">
          <div class="mb-5 flex gap-2" aria-hidden="true">
            <span class="h-[3px] w-8 bg-sedalp-red" />
            <span class="h-[3px] w-8 bg-sedalp-yellow" />
            <span class="h-[3px] w-8 bg-white" />
          </div>

          <h1
            class="text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl"
          >
            Noticias
          </h1>

          <p
            class="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base"
          >
            Información sobre actividades, asistencia técnica, acciones
            institucionales y acontecimientos relevantes del Servicio
            Departamental de Autonomías de La Paz.
          </p>
        </div>
      </AppContainer>
    </section>

    <!-- Listado -->

    <section class="section-spacing bg-white">
      <AppContainer>
        <!-- Cabecera -->

        <div
          class="flex flex-col gap-6 border-b border-border-soft pb-7 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p class="text-sm font-bold text-sedalp-green">
              Actualidad institucional
            </p>

            <h2
              class="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-heading"
            >
              Todas las noticias
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
              placeholder="Buscar una noticia..."
              class="h-12 w-full rounded-xl border border-border-soft bg-surface-soft pl-12 pr-4 text-sm text-heading outline-none transition-all placeholder:text-muted focus:border-sedalp-green/40 focus:bg-white focus:ring-4 focus:ring-sedalp-green/10"
            />
          </label>
        </div>

        <!-- Grid -->

        <div
          v-if="filteredNews.length"
          class="mt-10 grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          <NewsCard v-for="news in filteredNews" :key="news.id" :news="news" />
        </div>

        <!-- Empty -->

        <div v-else class="py-24 text-center">
          <div
            class="mx-auto flex size-16 items-center justify-center rounded-full bg-surface-green text-sedalp-green"
          >
            <svg viewBox="0 0 24 24" class="size-7" aria-hidden="true">
              <circle
                cx="11"
                cy="11"
                r="6.5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
              />

              <path
                d="m16 16 4 4"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
              />
            </svg>
          </div>

          <h3 class="mt-5 text-lg font-bold text-heading">
            No encontramos noticias
          </h3>

          <p class="mt-2 text-sm text-muted">
            Intenta realizar la búsqueda con otras palabras.
          </p>
        </div>
      </AppContainer>
    </section>

    <!-- Modal -->

    <NewsModal v-if="selectedNews" :news="selectedNews" @close="closeNews" />
  </main>
</template>
