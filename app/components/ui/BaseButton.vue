<script setup lang="ts">
interface Props {
  to?: string
  variant?: 'primary' | 'outline' | 'light' | 'dark'
}

const props = withDefaults(
  defineProps<Props>(),
  {
    to: undefined,
    variant: 'primary',
  },
)

const buttonClasses = computed(() => {
  const base = [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'min-h-12',
    'rounded-button',
    'px-6',
    'text-sm',
    'font-semibold',
    'transition-all',
    'duration-200',
  ]

  const variants = {
    primary: [
      'bg-brand-copper',
      'text-white',
      'hover:bg-brand-copper-dark',
    ],

    outline: [
      'border',
      'border-brand-navy/25',
      'text-brand-navy',
      'hover:border-brand-navy',
      'hover:bg-brand-navy',
      'hover:text-white',
    ],

    light: [
      'border',
      'border-white/30',
      'bg-white',
      'text-brand-navy',
      'hover:border-brand-copper',
      'hover:bg-brand-copper',
      'hover:text-white',
    ],

    dark: [
      'bg-brand-navy',
      'text-white',
      'hover:bg-brand-copper',
    ],
  }

  return [
    ...base,
    ...variants[props.variant],
  ]
})
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="buttonClasses"
  >
    <slot />
  </NuxtLink>

  <button
    v-else
    type="button"
    :class="buttonClasses"
  >
    <slot />
  </button>
</template>
