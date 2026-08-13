<script setup lang="ts">
import type {
  NewsItem,
} from '~/types/news'

interface Props {
  news: NewsItem
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
}>()

const dialog = ref<HTMLElement | null>(null)
const closeButton =
  ref<HTMLButtonElement | null>(null)

let previousFocus:
  HTMLElement | null = null

const titleId = computed(
  () => `news-title-${props.news.id}`,
)

const descriptionId = computed(
  () => `news-description-${props.news.id}`,
)

const close = () => {
  emit('close')
}

const handleKeydown = (
  event: KeyboardEvent,
) => {
  if (event.key === 'Escape') {
    close()

    return
  }

  if (
    event.key !== 'Tab'
    || !dialog.value
  ) {
    return
  }

  const focusable =
    dialog.value.querySelectorAll<HTMLElement>(
      [
        'button:not([disabled])',
        'a[href]',
        'iframe',
        '[tabindex]:not([tabindex="-1"])',
      ].join(','),
    )

  if (!focusable.length) {
    return
  }

  const first = focusable[0]
  const last =
    focusable[focusable.length - 1]

  if (
    event.shiftKey
    && document.activeElement === first
  ) {
    event.preventDefault()
    last?.focus()

    return
  }

  if (
    !event.shiftKey
    && document.activeElement === last
  ) {
    event.preventDefault()
    first?.focus()
  }
}

onMounted(async () => {
  previousFocus = document.activeElement as HTMLElement | null

  document.body.style.overflow =
    'hidden'

  window.addEventListener(
    'keydown',
    handleKeydown,
  )

  await nextTick()

  closeButton.value?.focus()
})

onBeforeUnmount(() => {
  document.body.style.overflow = ''

  window.removeEventListener(
    'keydown',
    handleKeydown,
  )

  previousFocus?.focus()
})
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-[2000] overflow-y-auto bg-black/60 px-4 py-6 backdrop-blur-sm sm:px-6 sm:py-10"
      @click.self="close"
    >
      <article
        ref="dialog"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="titleId"
        :aria-describedby="descriptionId"
        class="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[1.25rem] bg-white shadow-2xl"
      >
        <!-- Cerrar -->

        <button
          ref="closeButton"
          type="button"
          class="absolute right-4 top-4 z-30 flex size-11 items-center justify-center rounded-full bg-white/95 text-heading shadow-md backdrop-blur transition-all duration-200 hover:rotate-90 hover:bg-sedalp-green hover:text-white"
          aria-label="Cerrar noticia"
          @click="close"
        >
          ✕
        </button>

        <!-- Galería -->

        <NewsImageCarousel :key="news.id" :images="news.images" variant="modal" />

        <!-- Contenido -->

        <div class="px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-12">
          <!-- Fecha -->

          <div class="flex flex-wrap items-center gap-3">
            <span
              class="rounded-full bg-sedalp-yellow px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-sedalp-green-darker"
            >
              Comunicación
            </span>

            <time
              :datetime="news.publishedAt"
              class="text-xs font-semibold text-muted"
            >
              {{ formatDate(news.publishedAt) }}
            </time>
          </div>

          <!-- Título -->

          <h2
            :id="titleId"
            class="mt-5 max-w-4xl text-balance text-2xl font-extrabold leading-tight tracking-[-0.04em] text-heading sm:text-3xl lg:text-4xl"
          >
            {{ news.title }}
          </h2>

          <!-- Subtítulo -->

          <p
            v-if="news.subtitle"
            class="mt-4 max-w-3xl text-base font-semibold leading-7 text-sedalp-green"
          >
            {{ news.subtitle }}
          </p>

          <!-- Descripción -->

          <p
            :id="descriptionId"
            class="mt-6 max-w-4xl border-l-[3px] border-sedalp-yellow pl-5 text-[0.95rem] font-medium leading-8 text-body"
          >
            {{ news.description }}
          </p>

          <!-- Contenido -->

          <div class="mt-8 max-w-4xl space-y-5">
            <p
              v-for="(paragraph, index) in news.content"
              :key="index"
              class="text-[0.95rem] leading-8 text-body"
            >
              {{ paragraph }}
            </p>
          </div>

          <!-- Videos -->

          <div
            v-if="news.videos.length"
            class="mt-12 border-t border-border-soft pt-10"
          >
            <NewsVideoList :videos="news.videos" />
          </div>
        </div>
      </article>
    </div>
  </Teleport>
</template>
