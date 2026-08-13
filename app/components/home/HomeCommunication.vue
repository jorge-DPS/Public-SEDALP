<script setup lang="ts">
import { mockNews } from "~/data/news";

const latestNews = computed(() => {
  return [...mockNews]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 3);
});

const { selectedNews, openNews, closeNews } = useNewsModal(latestNews);
</script>

<template>
  <section
    id="comunicacion"
    class="section-spacing scroll-mt-24 bg-surface-soft"
    aria-labelledby="communication-title"
  >
    <AppContainer>
      <!-- Cabecera -->

      <div
        class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p
            class="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-sedalp-green"
          >
            Actualidad institucional
          </p>

          <h2
            id="communication-title"
            class="text-3xl font-extrabold tracking-[-0.04em] text-heading sm:text-4xl"
          >
            Comunicación
          </h2>

          <p class="mt-4 max-w-2xl text-sm leading-7 text-body sm:text-base">
            Conoce nuestras últimas actividades, noticias y acciones
            institucionales desarrolladas en el departamento de La Paz.
          </p>
        </div>

        <NuxtLink
          to="/noticias"
          class="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-sedalp-green transition-colors hover:text-sedalp-green-dark"
        >
          Ver más noticias

          <span
            class="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </NuxtLink>
      </div>

      <!-- 3 últimas -->

      <div class="mt-10">
        <NewsGrid :items="latestNews" @open="openNews" />
      </div>

      <!-- CTA inferior -->

      <div class="mt-10 flex justify-center">
        <BaseButton to="/noticias" variant="outline">
          Ver más noticias

          <span aria-hidden="true"> → </span>
        </BaseButton>
      </div>
    </AppContainer>

    <!-- Mismo modal -->

    <NewsModal v-if="selectedNews" :news="selectedNews" @close="closeNews" />
  </section>
</template>
