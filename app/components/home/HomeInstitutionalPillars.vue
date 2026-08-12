<script setup lang="ts">
import {
  institutionalPillars,
} from '~/config/home'
</script>

<template>
  <section
    id="institucional"
    class="
      relative
      scroll-mt-24
      overflow-hidden
      bg-white
    "
    aria-label="Información institucional"
  >
    <!-- Fondo decorativo muy sutil -->
    <div
      class="
        pointer-events-none
        absolute
        inset-x-0
        top-0
        h-40
        bg-gradient-to-b
        from-surface-green/60
        to-transparent
      "
      aria-hidden="true"
    />

    <AppContainer>
      <div
        class="
          relative
          z-10

          pt-16
          pb-16

          sm:pt-20
          sm:pb-20

          lg:pt-24
          lg:pb-24
        "
      >
        <div
          class="
            grid
            grid-cols-1
            gap-6

            md:grid-cols-3
            md:gap-7

            lg:gap-8
          "
        >
          <InstitutionalPillarCard
            v-for="pillar in institutionalPillars"
            :key="pillar.id"
            :title="pillar.title"
            :description="pillar.description"
            :icon="pillar.icon"
          />
        </div>
      </div>
    </AppContainer>
  </section>
</template>