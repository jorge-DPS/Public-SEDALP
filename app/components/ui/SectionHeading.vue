<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
  centered?: boolean;
}

withDefaults(defineProps<Props>(), {
  description: undefined,
  centered: false,
});
</script>

<template>
  <div :class="['max-w-2xl', centered ? 'mx-auto text-center' : '']">
    <div :class="['mb-5 flex items-center gap-3', centered ? 'justify-center' : '']" aria-hidden="true">
      <span class="h-px w-10 bg-brand-copper" />
      <span class="size-1.5 rotate-45 bg-brand-copper" />
    </div>

    <h2
      class="text-balance text-3xl font-bold tracking-[-0.045em] text-heading sm:text-4xl lg:text-[2.65rem]"
    >
      {{ title }}
    </h2>

    <p
      v-if="description"
      class="mt-4 text-sm leading-7 text-body sm:text-base"
    >
      {{ description }}
    </p>
  </div>
</template>
