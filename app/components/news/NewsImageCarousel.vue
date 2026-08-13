<script setup lang="ts">
import type { NewsImage } from "~/types/news";

interface Props {
  images: NewsImage[];
  variant?: "card" | "modal";
}

const props = withDefaults(defineProps<Props>(), {
  variant: "card",
});

const currentIndex = ref(0);

const currentImage = computed(() => {
  return props.images[currentIndex.value];
});

const hasMultipleImages = computed(() => props.images.length > 1);

let autoplayTimer: ReturnType<typeof setInterval> | undefined;

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = undefined;
  }
};

const startAutoplay = () => {
  stopAutoplay();

  if (props.images.length > 1) {
    autoplayTimer = setInterval(next, props.variant === "card" ? 4500 : 6000);
  }
};

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

const previous = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length;
};

watch(
  () => props.images,
  () => {
    currentIndex.value = 0;
    startAutoplay();
  },
);

onMounted(startAutoplay);
onBeforeUnmount(stopAutoplay);
</script>

<template>
  <div
    :class="[
      'group/media relative overflow-hidden bg-surface-soft',

      variant === 'card' ? 'aspect-[16/10]' : 'aspect-[16/9] sm:aspect-[16/8]',
    ]"
    role="region"
    aria-label="Galería de imágenes"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
    @focusin="stopAutoplay"
    @focusout="startAutoplay"
  >
    <Transition
      mode="out-in"
      enter-active-class="transition duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <NuxtImg
        v-if="currentImage"
        :key="currentImage.id"
        :src="currentImage.url"
        :alt="currentImage.alt"
        width="1200"
        height="675"
        sizes="100vw md:50vw lg:33vw"
        quality="84"
        format="webp"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-700 group-hover/media:scale-[1.025]"
      />
    </Transition>

    <div
      v-if="!currentImage"
      class="flex h-full items-center justify-center px-6 text-center text-sm font-semibold text-muted"
    >
      Imagen no disponible
    </div>

    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
      aria-hidden="true"
    />

    <!-- Controles -->

    <template v-if="hasMultipleImages">
      <button
        type="button"
        class="absolute left-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur transition hover:bg-sedalp-green"
        aria-label="Imagen anterior"
        @click.stop="previous"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <button
        type="button"
        class="absolute right-3 top-1/2 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur transition hover:bg-sedalp-green"
        aria-label="Imagen siguiente"
        @click.stop="next"
      >
        <span aria-hidden="true">›</span>
      </button>

      <div
        class="absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-[0.65rem] font-semibold text-white backdrop-blur"
      >
        {{ currentIndex + 1 }}
        /
        {{ images.length }}
      </div>

      <div class="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          v-for="(image, index) in images"
          :key="image.id"
          type="button"
          :class="[
            'size-2 rounded-full ring-2 ring-white/70 transition',
            index === currentIndex ? 'bg-sedalp-yellow' : 'bg-white/60',
          ]"
          :aria-label="`Mostrar imagen ${index + 1}`"
          :aria-current="index === currentIndex ? 'true' : undefined"
          @click.stop="currentIndex = index"
        />
      </div>
    </template>

    <p
      v-if="variant === 'modal' && currentImage?.caption"
      class="absolute bottom-3 left-4 max-w-[70%] text-xs text-white/90"
    >
      {{ currentImage.caption }}
    </p>
  </div>
</template>
