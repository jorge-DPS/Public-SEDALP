<script setup lang="ts">
import { heroContent } from "~/config/home";
</script>

<template>
  <section class="relative isolate min-h-[540px] overflow-hidden bg-brand-navy sm:min-h-[570px] lg:min-h-[590px]" aria-labelledby="hero-title">
    <NuxtImg
      :src="heroContent.image"
      :alt="heroContent.imageAlt"
      width="1920"
      height="1080"
      quality="88"
      format="webp"
      fit="cover"
      :preload="{ fetchPriority: 'high' }"
      class="absolute inset-0 -z-30 h-full w-full object-cover object-[68%_center]"
    />
    <div class="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(17,23,34,0.98)_0%,rgba(17,23,34,0.88)_34%,rgba(17,23,34,0.38)_62%,rgba(17,23,34,0.08)_100%)] max-lg:bg-[linear-gradient(90deg,rgba(17,23,34,0.97)_0%,rgba(17,23,34,0.82)_60%,rgba(17,23,34,0.48)_100%)]" aria-hidden="true" />
    <div class="absolute inset-0 -z-10 bg-gradient-to-t from-brand-navy/35 via-transparent to-transparent" aria-hidden="true" />

    <AppContainer>
      <div class="relative z-10 flex min-h-[540px] items-center py-14 sm:min-h-[570px] lg:min-h-[590px] lg:w-[48%]">
        <div class="max-w-[480px]">
          <h1 id="hero-title" class="text-balance text-[2.65rem] font-bold leading-[1.02] tracking-[-0.045em] text-white sm:text-[3.25rem] lg:text-[3.55rem]">
            {{ heroContent.title }}
            <span class="block">{{ heroContent.highlightedText }}</span>
          </h1>
          <p class="mt-6 max-w-[450px] text-sm leading-6 text-white/82 sm:leading-7">{{ heroContent.description }}</p>
          <BaseButton :to="heroContent.buttonTo" class="mt-7 min-h-11 px-5 text-xs">{{ heroContent.buttonLabel }} <span aria-hidden="true">→</span></BaseButton>
        </div>
      </div>
    </AppContainer>
  </section>
</template>
