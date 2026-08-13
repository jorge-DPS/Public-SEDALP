<script setup lang="ts">
import { mockNews } from "~/data/news";

definePageMeta({
  path: "/noticias/:slug",
});

const route = useRoute();
const slug = computed(() => String(route.params.slug ?? ""));
const news = computed(() => mockNews.find((item) => item.slug === slug.value));

if (!news.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Noticia no encontrada",
  });
}

useSeoMeta({
  title: () => news.value?.title ?? "Noticia",
  description: () => news.value?.excerpt ?? "",
  ogImage: () => news.value?.coverImage,
});
</script>

<template>
  <main v-if="news" class="section-spacing bg-white">
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
        <p class="mt-5 border-l-4 border-sedalp-yellow pl-5 text-lg leading-8 text-body">
          {{ news.excerpt }}
        </p>

        <NuxtImg
          :src="news.coverImage"
          :alt="news.coverImageAlt"
          width="1200"
          height="675"
          sizes="100vw lg:900px"
          class="mt-8 aspect-video w-full rounded-card object-cover"
        />

        <div class="mt-8 space-y-5">
          <p v-for="(paragraph, index) in news.content" :key="index" class="leading-8 text-body">
            {{ paragraph }}
          </p>
        </div>
      </article>
    </AppContainer>
  </main>
</template>
