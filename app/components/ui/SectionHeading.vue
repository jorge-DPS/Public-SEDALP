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
    <!-- Acento -->

    <div :class="['mb-4 flex items-center gap-2', centered ? 'justify-center' : '', ]"  aria-hidden="true" >
      <span class="h-[3px] w-7 rounded-full bg-sedalp-yellow" />

      <span class="h-[3px] w-3 rounded-full bg-sedalp-red" />
    </div>

    <h2
      class="text-balance text-2xl font-extrabold tracking-[-0.035em] text-heading sm:text-3xl lg:text-[2rem]"
    >
      {{ title }}
    </h2>

    <p
      v-if="description"
      class="mt-3 text-sm leading-7 text-body sm:text-[0.95rem]"
    >
      {{ description }}
    </p>
  </div>
</template>
