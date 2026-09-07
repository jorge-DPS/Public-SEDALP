<script setup lang="ts">
type BrandVariant =
  | "copper"
  | "navy"
  | "gray"
  | "light-gray"
  | "cream"
  | "white";

interface Props {
  variant?: BrandVariant;
  alt?: string;
  eager?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "copper",
  alt: "La Paz, Departamento Maravilloso",
  eager: false,
});

const source = computed(() => `/images/brand/la-paz-${props.variant}.png`);
</script>

<template>
  <span class="relative block aspect-[2.28/1] overflow-hidden">
    <img
      :src="source"
      :alt="alt"
      width="5000"
      height="5001"
      :loading="eager ? 'eager' : 'lazy'"
      :fetchpriority="eager ? 'high' : undefined"
      class="absolute left-1/2 top-1/2 w-[175%] max-w-none -translate-x-1/2 -translate-y-1/2"
    />
  </span>
</template>
