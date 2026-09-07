<script setup lang="ts">
interface Props { eyebrow: string; title: string; description: string; accent?: string }
withDefaults(defineProps<Props>(), { accent: undefined });
</script>

<template>
  <section class="relative isolate overflow-hidden bg-brand-navy text-white">
    <NuxtImg src="/images/hero/sedalp-hero.webp" alt="" width="1920" height="800" sizes="100vw" quality="82" format="webp" class="absolute inset-y-0 right-0 -z-20 h-full w-full object-cover object-center opacity-20 md:w-[58%] md:opacity-70" />
    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/65 md:to-brand-navy/10" aria-hidden="true" />
    <svg class="pointer-events-none absolute -bottom-24 -left-16 h-80 w-[55%] text-white/[0.05]" viewBox="0 0 600 300" fill="none" aria-hidden="true">
      <path v-for="offset in 5" :key="offset" :d="`M0 ${offset * 54}C130 ${90 + offset * 27} 210 ${10 + offset * 42} 330 ${70 + offset * 33}S500 ${30 + offset * 46} 620 ${80 + offset * 35}`" stroke="currentColor" />
    </svg>
    <AppContainer>
      <div class="relative max-w-3xl py-20 sm:py-24 lg:py-28">
        <p class="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-brand-cream/65"><span class="h-px w-9 bg-brand-copper" />{{ eyebrow }}</p>
        <h1 class="mt-6 text-balance text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">{{ title }}</h1>
        <p v-if="accent" class="mt-3 text-lg font-semibold text-brand-copper sm:text-xl">{{ accent }}</p>
        <p class="mt-6 max-w-2xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">{{ description }}</p>
      </div>
    </AppContainer>
  </section>
</template>
