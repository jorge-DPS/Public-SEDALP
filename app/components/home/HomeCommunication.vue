<script setup lang="ts">
import { mockNews } from "~/data/news";
import NewsCard from "~/components/news/NewCard.vue";

const featuredNews = mockNews.slice(0, 3);
</script>

<template>
  <section
    id="noticias"
    class="section-spacing bg-surface-soft"
    aria-labelledby="home-news-title"
  >
    <AppContainer>
      <!-- Header sección -->

      <div
        class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <SectionHeading
            title="Noticias"
            description="Conoce las actividades, acciones institucionales y principales novedades del Servicio Departamental de Autonomías de La Paz."
          />
        </div>

        <NuxtLink
          to="/noticias"
          class="group/link inline-flex shrink-0 items-center gap-2 text-sm font-bold text-sedalp-green transition-colors hover:text-sedalp-green-dark"
        >
          Ver todas las noticias

          <svg
            viewBox="0 0 24 24"
            class="size-4 transition-transform duration-200 group-hover/link:translate-x-1"
            aria-hidden="true"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NuxtLink>
      </div>

      <!-- Cards -->

      <div
        class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7"
      >
        <NewsCard v-for="news in featuredNews" :key="news.id" :news="news" />
      </div>
    </AppContainer>
  </section>
</template>
