<script setup lang="ts">
import type { InstitutionalPillarIcon } from "~/config/home";

interface Props {
  title: string;
  description: string;
  icon: InstitutionalPillarIcon;
  index: number;
}

defineProps<Props>();
</script>

<template>
  <article :class="['group border-b border-brand-navy/10 py-7 md:border-b-0 md:px-8 md:py-1 lg:px-10', index > 1 ? 'md:border-l md:border-brand-navy/12' : '']">
    <div class="flex items-center gap-4">
      <svg v-if="icon === 'mission'" class="size-8 shrink-0 text-brand-copper" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="15" cy="17" r="10"/><circle cx="15" cy="17" r="5"/><path d="m18 14 9-9M21 5h6v6"/></svg>
      <svg v-else-if="icon === 'vision'" class="size-8 shrink-0 text-brand-copper" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M3 16s5-8 13-8 13 8 13 8-5 8-13 8S3 16 3 16Z"/><circle cx="16" cy="16" r="3.5"/></svg>
      <svg v-else class="size-8 shrink-0 text-brand-copper" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M7 28V4M8 6c7-4 10 4 17 0v12c-7 4-10-4-17 0"/><path d="M4 28h7"/></svg>
      <h3 class="text-lg font-bold tracking-[-0.03em] text-brand-navy">{{ title }}</h3>
    </div>
    <span class="mt-5 block h-0.5 w-7 bg-brand-copper" aria-hidden="true" />
    <p class="mt-5 text-xs leading-6 text-body sm:text-[0.8rem]">{{ description }}</p>
  </article>
</template>
