<script setup lang="ts">
definePageMeta({ key: (route) => route.path });

const route = useRoute();
const { data: news, error, status, refresh } = await usePublicNewsDetail(() => String(route.params.slug));

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode === 404 ? 404 : 503,
    statusMessage: error.value.statusCode === 404 ? "Noticia no encontrada" : "No se pudo cargar la noticia",
  });
}

useSeoMeta({
  title: () => news.value?.title,
  description: () => news.value?.excerpt,
  ogImage: () => news.value?.images[0]?.url,
  ogType: "article",
});
</script>

<template>
  <div class="section-spacing bg-white">
    <AppContainer>
      <NuxtLink to="/news" class="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-copper-dark"><span aria-hidden="true">←</span> Volver a noticias</NuxtLink>
      <p v-if="status === 'pending'" role="status" class="py-16 text-center text-muted">Cargando noticia...</p>
      <div v-else-if="error" role="alert" class="py-16 text-center">
        <p>No se pudo cargar la noticia.</p>
        <button type="button" class="mt-4 text-brand-copper-dark" @click="refresh()">Reintentar</button>
      </div>
      <article v-else-if="news" class="mx-auto mt-10 max-w-4xl">
        <time :datetime="news.publishedAt" class="text-sm font-semibold text-muted">{{ formatDate(news.publishedAt) }}</time>
        <h1 class="mt-4 text-3xl font-bold leading-tight tracking-[-0.05em] text-heading sm:text-5xl">{{ news.title }}</h1>
        <p v-if="news.subtitle" class="mt-4 text-base font-semibold leading-7 text-brand-gray">{{ news.subtitle }}</p>
        <p class="mt-6 border-l-2 border-brand-copper pl-5 text-lg leading-8 text-body">{{ news.description }}</p>
        <div v-if="news.images.length" class="mt-10 overflow-hidden"><NewsImageCarousel :images="news.images" /></div>
        <RichText :document="news.content" class="mt-8 leading-8 text-body" />
        <div v-if="news.videos.length" class="mt-12 border-t border-border-soft pt-10"><NewsVideoList :videos="news.videos" /></div>
      </article>
    </AppContainer>
  </div>
</template>
