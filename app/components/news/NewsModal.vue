<script setup lang="ts">


const props = defineProps<{ slug: string }>();
const { data: news, status, error, refresh } = usePublicNewsDetail(() => props.slug);
const emit = defineEmits<{ close: [] }>();
const dialog = ref<HTMLDialogElement | null>(null);
const titleId = useId();
let previousOverflow = '';
let previousFocus: HTMLElement | null = null;
const readingMinutes = computed(() => {
  if (!news.value) return 1;
  const text = `${news.value.description} ${getRichTextContent(news.value.content)}`;
  return Math.max(1, Math.ceil(text.trim().split(/\s+/).length / 200));
});
const close = () => emit('close');
const handleBackdrop = (event: MouseEvent) => {
  if (!dialog.value || event.target !== dialog.value) return;
  const bounds = dialog.value.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close();
};

onMounted(() => {
  previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  previousOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';
  dialog.value?.showModal();
});

onBeforeUnmount(() => {
  dialog.value?.close();
  document.body.style.overflow = previousOverflow;
  previousFocus?.focus({ preventScroll: true });
});
</script>

<template>
  <Teleport to="body">
    <dialog ref="dialog" :aria-labelledby="news ? titleId : undefined" aria-label="Noticia" class="news-dialog fixed inset-0 m-auto max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-[1120px] overflow-y-auto overscroll-contain rounded-[1.25rem] border-0 bg-white p-0 text-brand-navy shadow-2xl sm:w-[calc(100%-3rem)]" @cancel.prevent="close" @click="handleBackdrop">
      <div class="sticky top-0 z-40 flex items-center justify-between gap-4 border-b border-brand-navy/8 bg-white/95 px-5 py-3 backdrop-blur-xl sm:px-7">
        <div class="flex items-center gap-3 text-xs"><span class="h-5 w-0.5 rounded-full bg-brand-copper" aria-hidden="true" /><span class="font-semibold">Comunicación</span><span class="hidden text-muted sm:inline">/ Actualidad institucional</span></div>
        <button type="button" autofocus class="flex size-10 items-center justify-center rounded-full bg-brand-cream/60 text-brand-navy transition-colors hover:bg-brand-navy hover:text-white" aria-label="Cerrar noticia" @click="close"><NewsIcon name="close" class="size-5" /></button>
      </div>
      <p v-if="status === 'pending' || status === 'idle'" role="status" class="px-6 py-20 text-center text-sm text-muted">Cargando noticia...</p>
      <div v-else-if="error" role="alert" class="px-6 py-20 text-center">
        <p class="text-sm text-muted">{{ error.statusCode === 404 ? 'Esta noticia ya no está disponible.' : 'No se pudo cargar la noticia.' }}</p>
        <button v-if="error.statusCode !== 404" type="button" class="mt-4 rounded-full border border-brand-navy/15 px-5 py-2.5 text-sm font-semibold" @click="refresh()">Reintentar</button>
      </div>
      <article v-else-if="news" class="grid lg:grid-cols-[0.95fr_1.05fr]">
        <div class="min-w-0 bg-brand-cream/35 p-4 sm:p-6 lg:p-7">
          <div class="lg:sticky lg:top-24">
            <NewsImageCarousel :key="news.slug" :images="news.images" variant="modal" />
            <p class="mt-4 flex items-center gap-2 text-[0.68rem] text-muted"><NewsIcon name="image" class="size-4" />Galería de la noticia · {{ news.images.length }} {{ news.images.length === 1 ? 'imagen' : 'imágenes' }}</p>
          </div>
        </div>
        <div class="min-w-0 px-6 py-7 sm:p-8 lg:px-10 lg:py-9">
          <div class="flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.68rem] text-muted">
            <time :datetime="news.publishedAt">{{ formatDate(news.publishedAt) }}</time>
            <span class="size-1 rounded-full bg-brand-copper" aria-hidden="true" />
            <span>{{ readingMinutes }} min de lectura</span>
          </div>
          <h2 :id="titleId" class="mt-5 text-2xl font-semibold leading-[1.25] tracking-[-0.035em] text-heading sm:text-[1.9rem]">{{ news.title }}</h2>
          <p v-if="news.subtitle" class="mt-5 text-sm font-medium leading-7 text-brand-copper-dark">{{ news.subtitle }}</p>
          <div class="my-7 h-px w-14 bg-brand-copper/60" aria-hidden="true" />
          <p class="text-sm font-medium leading-7 text-brand-navy">{{ news.description }}</p>
          <RichText :document="news.content" class="mt-5 text-sm leading-7 text-body" />
          <div v-if="news.videos.length" class="mt-9 border-t border-brand-navy/10 pt-7"><NewsVideoList :videos="news.videos" /></div>
          <NuxtLink :to="`/news/${news.slug}`" class="mt-7 inline-block text-sm font-semibold text-brand-copper-dark">Abrir página completa <span aria-hidden="true">→</span></NuxtLink>
          <div class="mt-8 flex items-center gap-3 border-t border-brand-navy/10 pt-6 text-xs text-muted"><span class="size-2 rounded-full bg-brand-copper" />Servicio Departamental de Autonomías de La Paz</div>
        </div>
      </article>
    </dialog>
  </Teleport>
</template>

<style scoped>
.news-dialog::backdrop { background: rgb(17 23 34 / 72%); backdrop-filter: blur(8px); }
.news-dialog[open] { animation: news-dialog-enter 220ms ease-out; }
@keyframes news-dialog-enter { from { opacity: 0; transform: translateY(12px) scale(.99); } to { opacity: 1; transform: translateY(0) scale(1); } }
@media (prefers-reduced-motion: reduce) { .news-dialog[open] { animation: none; } }
</style>
