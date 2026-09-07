<script setup lang="ts">
import { normativeDocuments } from "~/data/normative";
</script>

<template>
  <section id="normativa" class="scroll-mt-24 bg-[#f7f5ee] py-14 lg:py-16" aria-labelledby="normative-title">
    <AppContainer>
      <div class="grid gap-10 lg:grid-cols-[0.75fr_2.25fr] lg:gap-10">
        <div>
          <h2 id="normative-title" class="text-2xl font-bold tracking-[-0.04em] text-heading sm:text-[2rem]">Normativa</h2>
          <span class="mt-4 block h-0.5 w-8 bg-brand-copper" aria-hidden="true" />
          <p class="mt-6 max-w-sm text-xs leading-6 text-body sm:text-[0.8rem]">Accede a la normativa vigente que regula la autonomía municipal y regional en el marco legal del Estado Plurinacional de Bolivia.</p>
          <NuxtLink to="/#normativa" class="group mt-7 inline-flex items-center gap-4 text-xs font-semibold text-brand-navy">Ver archivo completo <span class="text-lg font-light transition-transform group-hover:translate-x-1" aria-hidden="true">→</span></NuxtLink>
        </div>
        <NormativeCarousel :documents="normativeDocuments" />
      </div>
    </AppContainer>
  </section>
</template>
