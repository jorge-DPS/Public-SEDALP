<script setup lang="ts">
import type { NewsImage } from '~/types/news';

const props = withDefaults(defineProps<{ images: NewsImage[]; variant?: 'article' | 'modal' }>(), { variant: 'article' });
const currentIndex = ref(0);
const currentImage = computed(() => props.images[currentIndex.value]);
const selectImage = (index: number) => {
  if (props.images.length) currentIndex.value = (index + props.images.length) % props.images.length;
};
watch(() => props.images, () => { currentIndex.value = 0; });
</script>

<template>
  <div role="region" aria-label="Galería de imágenes" aria-roledescription="carrusel" class="min-w-0">
    <div :class="['relative isolate overflow-hidden bg-brand-navy', variant === 'modal' ? 'aspect-[4/3] rounded-xl lg:aspect-[4/4.5] lg:max-h-[calc(92dvh-15rem)]' : 'aspect-[16/10]']">
      <NuxtImg v-if="currentImage" :key="currentImage.url" :src="currentImage.url" :alt="currentImage.alt" :width="variant === 'modal' ? 1100 : 800" :sizes="variant === 'modal' ? 'sm:100vw lg:45vw' : 'sm:100vw lg:50vw'" format="webp" quality="88" :loading="variant === 'modal' ? 'eager' : 'lazy'" :class="['absolute inset-0 h-full w-full', variant === 'modal' ? 'object-contain' : 'object-cover']" />
      <div v-else class="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/70"><NewsIcon name="image" class="size-8" /><span class="text-xs">Imagen no disponible</span></div>
      <template v-if="images.length > 1">
        <button type="button" class="absolute left-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-brand-navy/65 text-white backdrop-blur transition-colors hover:bg-brand-copper" aria-label="Imagen anterior" @click="selectImage(currentIndex - 1)"><NewsIcon name="chevron-left" class="size-4" /></button>
        <button type="button" class="absolute right-3 top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-brand-navy/65 text-white backdrop-blur transition-colors hover:bg-brand-copper" aria-label="Imagen siguiente" @click="selectImage(currentIndex + 1)"><NewsIcon name="chevron-right" class="size-4" /></button>
      </template>
      <span v-if="images.length" class="absolute bottom-3 right-3 rounded-full bg-brand-navy/70 px-3 py-1.5 text-[0.65rem] font-medium tabular-nums text-white backdrop-blur" aria-live="polite" aria-atomic="true">{{ currentIndex + 1 }} / {{ images.length }}</span>
    </div>
    <p v-if="currentImage?.caption" class="mt-3 text-xs leading-5 text-muted">{{ currentImage.caption }}</p>
    <div v-if="images.length > 1 && variant === 'modal'" class="mt-3 flex gap-2 overflow-x-auto p-1" aria-label="Seleccionar imagen">
      <button v-for="(image, index) in images" :key="image.url" type="button" :aria-label="`Mostrar imagen ${index + 1}`" :aria-current="index === currentIndex ? 'true' : undefined" :class="['size-16 shrink-0 overflow-hidden rounded-lg border-2 p-0.5 transition-opacity sm:size-18', index === currentIndex ? 'border-brand-copper opacity-100' : 'border-transparent opacity-55 hover:opacity-100']" @click="selectImage(index)">
        <NuxtImg :src="image.url" alt="" width="140" height="140" sizes="72px" format="webp" loading="lazy" class="h-full w-full rounded-md object-cover" />
      </button>
    </div>
  </div>
</template>
