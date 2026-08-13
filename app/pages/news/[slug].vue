<script setup lang="ts">
import { mockNews } from "~/data/news";

definePageMeta({
  path: "/noticias/:slug",
});

const route = useRoute();
const slug = String(route.params.slug ?? "");
const news = mockNews.find((item) => item.slug === slug);

if (!news) {
  throw createError({
    statusCode: 404,
    statusMessage: "Noticia no encontrada",
  });
}

useSeoMeta({
  title: news.title,
  description: news.excerpt,
  ogImage: news.images[0]?.url,
});
</script>

<template>
  <main class="section-spacing bg-white">
    <AppContainer>
      <NuxtLink
        to="/noticias"
        class="inline-flex items-center gap-2 text-sm font-bold text-sedalp-green hover:text-sedalp-green-dark"
      >
        <span aria-hidden="true">←</span>
        Volver a noticias
      </NuxtLink>

      <article class="mx-auto mt-8 max-w-4xl">
        <time :datetime="news.publishedAt" class="text-sm font-semibold text-muted">
          {{ formatDate(news.publishedAt) }}
        </time>

        <h1 class="mt-3 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-heading sm:text-5xl">
          {{ news.title }}
        </h1>

        <p
          v-if="news.subtitle"
          class="mt-4 text-base font-semibold leading-7 text-sedalp-green"
        >
          {{ news.subtitle }}
        </p>

        <p class="mt-5 border-l-4 border-sedalp-yellow pl-5 text-lg leading-8 text-body">
          {{ news.description }}
        </p>

        <div class="mt-8 overflow-hidden rounded-card">
          <NewsImageCarousel :images="news.images" variant="modal" />
        </div>

        <div class="mt-8 space-y-5">
          <p
            v-for="(paragraph, index) in news.content"
            :key="index"
            class="leading-8 text-body"
          >
            {{ paragraph }}
          </p>
        </div>

        <div v-if="news.videos.length" class="mt-12 border-t border-border-soft pt-10">
          <NewsVideoList :videos="news.videos" />
        </div>
      </article>
    </AppContainer>
  </main>
</template>
