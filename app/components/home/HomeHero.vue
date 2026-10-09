<script setup lang="ts">
import { heroContent } from "~/config/home";
</script>

<template>
  <section class="relative isolate min-h-[580px] overflow-hidden bg-brand-navy sm:min-h-[620px] lg:min-h-[660px]" aria-labelledby="hero-title">
    <!-- Imagen de fondo optimizada -->
    <NuxtImg
      :src="heroContent.image"
      :alt="heroContent.imageAlt"
      width="1920"
      height="1080"
      quality="90"
      format="webp"
      fit="cover"
      :preload="{ fetchPriority: 'high' }"
      class="absolute inset-0 -z-30 h-full w-full object-cover object-[72%_center] lg:object-[68%_center]"
    />

    <!-- Gradientes calibrados para máxima legibilidad del texto sin oscurecer completamente la fotografía -->
    <div
      class="absolute inset-0 -z-20 bg-gradient-to-r from-[#111722]/98 via-[#111722]/85 to-transparent max-lg:bg-gradient-to-b max-lg:from-[#111722]/95 max-lg:via-[#111722]/80 max-lg:to-[#111722]/60"
      aria-hidden="true"
    />
    <div
      class="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-[#111722] to-transparent opacity-60"
      aria-hidden="true"
    />

    <AppContainer>
      <div class="relative z-10 flex min-h-[580px] items-center py-16 sm:min-h-[620px] sm:py-20 lg:min-h-[660px] lg:w-[54%]">
        <div class="max-w-xl">
          <!-- Kicker institucional con identidad La Paz -->
          <div class="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
            <span class="size-2 rounded-full bg-brand-copper" aria-hidden="true" />
            <span class="text-[0.72rem] font-semibold tracking-wider text-white/90 uppercase">
              {{ heroContent.eyebrow }}
            </span>
          </div>

          <!-- Título principal con jerarquía y espaciado armónico -->
          <h1
            id="hero-title"
            class="text-balance text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]"
          >
            {{ heroContent.title }}
            <span class="mt-1 block text-brand-cream/95">
              {{ heroContent.highlightedText }}
            </span>
          </h1>

          <!-- Descripción institucional legible -->
          <p class="mt-5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base sm:leading-7">
            {{ heroContent.description }}
          </p>

          <!-- Acciones principales -->
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <BaseButton
              :to="heroContent.buttonTo"
              class="group min-h-12 px-6 text-xs font-semibold tracking-wide uppercase shadow-lg shadow-brand-copper/20 hover:shadow-brand-copper/30"
            >
              <span>{{ heroContent.buttonLabel }}</span>
              <span class="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </BaseButton>

            <NuxtLink
              to="/#simred"
              class="inline-flex min-h-12 items-center gap-2 rounded-button border border-white/25 bg-white/5 px-5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm transition-colors hover:border-brand-copper hover:bg-white/10"
            >
              <span>Explorar SIMRED</span>
              <span class="text-brand-copper" aria-hidden="true">◉</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
