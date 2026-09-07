<script setup lang="ts">
const { data: response, status, error, refresh } = await usePublicNews({ per_page: 4 });
const news = computed(() => response.value?.data ?? []);
const { selectedSlug, openNews, closeNews } = useNewsModal();
</script>

<template>
  <section id="comunicacion" class="scroll-mt-24 bg-white py-16 lg:py-20" aria-labelledby="communication-title">
    <AppContainer>
      <div class="mb-9 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div class="max-w-2xl">
          <h2 id="communication-title" class="text-3xl font-bold tracking-[-0.04em] text-heading sm:text-4xl">Comunicación</h2>
          <p class="mt-3 max-w-xl text-sm leading-7 text-body">
            Historias, actividades y avances que conectan a nuestra institución con el desarrollo de La Paz.
          </p>
        </div>
        <NuxtLink to="/noticias"
          class="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full border border-brand-navy/15 px-5 py-3 text-xs font-semibold text-heading transition-colors hover:border-brand-copper hover:bg-brand-cream/40">
          Todas las noticias
          <NewsIcon name="arrow" class="size-4 transition-transform motion-safe:group-hover:translate-x-1" />
        </NuxtLink>
      </div>
      <div v-if="status === 'pending'" role="status" class="grid gap-5 lg:grid-cols-[1.2fr_1fr] lg:gap-7">
        <span class="sr-only">Cargando noticias...</span>
        <div class="min-h-[28rem] animate-pulse rounded-2xl bg-brand-cream/70" aria-hidden="true" />
        <div class="grid gap-4" aria-hidden="true">
          <div v-for="index in 3" :key="index" class="min-h-32 animate-pulse rounded-2xl bg-brand-cream/70" />
        </div>
      </div>
      <div v-else-if="error" role="alert" class="rounded-2xl border border-brand-navy/10 bg-surface-soft px-6 py-10 text-center">
        <p class="text-sm text-muted">No se pudieron cargar las noticias.</p>
        <button type="button" class="mt-4 rounded-full border border-brand-navy/15 px-5 py-2.5 text-xs font-semibold text-heading" @click="refresh()">Reintentar</button>
      </div>
      <HomeNewsGrid v-else-if="news.length" :items="news" @open="openNews" />
      <p v-else class="rounded-2xl bg-surface-soft px-6 py-10 text-center text-sm text-muted">Aún no hay noticias publicadas.</p>
    </AppContainer>
    <ClientOnly>
      <LazyNewsModal v-if="selectedSlug" :key="selectedSlug" :slug="selectedSlug" @close="closeNews" />
    </ClientOnly>
  </section>
</template>
