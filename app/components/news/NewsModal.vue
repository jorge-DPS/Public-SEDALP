<script setup lang="ts">
import type { NewsItem } from "~/types/news";

interface Props {
  news: NewsItem;
}

const props = defineProps<Props>();

const emit = defineEmits<{
  close: [];
}>();

const closeButton = ref<HTMLButtonElement | null>(null);

let previousActiveElement: HTMLElement | null = null;

const modalTitleId = computed(() => `news-modal-title-${props.news.id}`);

const close = () => {
  emit("close");
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    close();
  }
};

onMounted(async () => {
  previousActiveElement = document.activeElement as HTMLElement | null;

  document.body.style.overflow = "hidden";

  window.addEventListener("keydown", handleKeydown);

  await nextTick();

  closeButton.value?.focus();
});

onBeforeUnmount(() => {
  document.body.style.overflow = "";

  window.removeEventListener("keydown", handleKeydown);

  previousActiveElement?.focus();
});
</script>

<template>
  <Teleport to="#teleports">
    <div
      class="fixed inset-0 z-[2000] flex items-center justify-center overflow-y-auto bg-black/60 px-4 py-8 backdrop-blur-sm sm:px-6"
      @click.self="close"
    >
      <article
        role="dialog"
        aria-modal="true"
        :aria-labelledby="modalTitleId"
        class="relative max-h-[90svh] w-full max-w-4xl overflow-y-auto overflow-x-hidden rounded-[1.25rem] bg-white shadow-2xl"
      >
        <!-- Cerrar -->

        <button
          ref="closeButton"
          type="button"
          class="absolute right-4 top-4 z-20 flex size-11 items-center justify-center rounded-full bg-white/95 text-heading shadow-md backdrop-blur transition-all duration-200 hover:rotate-90 hover:bg-sedalp-green hover:text-white"
          aria-label="Cerrar noticia"
          @click="close"
        >
          <svg viewBox="0 0 24 24" class="size-5" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6 6 18"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <!-- Imagen -->

        <div class="relative aspect-[16/7] overflow-hidden bg-surface-soft">
          <NuxtImg
            :src="news.coverImage"
            :alt="news.coverImageAlt"
            width="1200"
            height="525"
            sizes="100vw lg:900px"
            quality="85"
            format="webp"
            class="h-full w-full object-cover"
          />

          <div
            class="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent"
            aria-hidden="true"
          />
        </div>

        <!-- Contenido -->

        <div class="px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
          <div class="flex flex-wrap items-center gap-3">
            <span
              class="rounded-full bg-sedalp-yellow px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-sedalp-green-darker"
            >
              Noticias
            </span>

            <time
              :datetime="news.publishedAt"
              class="text-xs font-semibold text-muted"
            >
              {{ formatDate(news.publishedAt) }}
            </time>
          </div>

          <h2
            :id="modalTitleId"
            class="mt-5 max-w-3xl text-balance text-2xl font-extrabold leading-tight tracking-[-0.035em] text-heading sm:text-3xl lg:text-[2.25rem]"
          >
            {{ news.title }}
          </h2>

          <p
            class="mt-5 border-l-[3px] border-sedalp-yellow pl-5 text-base font-medium leading-7 text-body"
          >
            {{ news.excerpt }}
          </p>

          <div class="mt-8 space-y-5">
            <p
              v-for="(paragraph, index) in news.content"
              :key="index"
              class="text-[0.95rem] leading-8 text-body"
            >
              {{ paragraph }}
            </p>
          </div>

          <!-- Video -->

          <div
            v-if="news.videos[0]"
            class="mt-10 flex flex-col gap-4 rounded-xl border border-red-100 bg-red-50/60 p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p class="text-sm font-bold text-heading">
                Contenido audiovisual
              </p>

              <p class="mt-1 text-xs leading-5 text-muted">
                Esta noticia cuenta con material audiovisual disponible en
                YouTube.
              </p>
            </div>

            <a
              :href="news.videos[0].url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-700"
            >
              <svg viewBox="0 0 24 24" class="size-5" aria-hidden="true">
                <path
                  d="M21.2 7.1a2.6 2.6 0 0 0-1.8-1.9C17.8 4.8 12 4.8 12 4.8s-5.8 0-7.4.4a2.6 2.6 0 0 0-1.8 1.9A27 27 0 0 0 2.4 12a27 27 0 0 0 .4 4.9 2.6 2.6 0 0 0 1.8 1.9c1.6.4 7.4.4 7.4.4s5.8 0 7.4-.4a2.6 2.6 0 0 0 1.8-1.9 27 27 0 0 0 .4-4.9 27 27 0 0 0-.4-4.9Z"
                  fill="currentColor"
                />

                <path d="m10 15.4 5-3.4-5-3.4v6.8Z" fill="white" />
              </svg>

              Ver en YouTube
            </a>
          </div>
        </div>
      </article>
    </div>
  </Teleport>
</template>
