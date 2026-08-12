<script setup lang="ts">
interface Props {
  to?: string
  variant?: 'primary' | 'outline'
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
    'rounded-button',
    'px-5',
    'py-3',
    'text-sm',
    'font-semibold',
    'transition-all',
    'duration-200',
  ]

  const variants = {
    primary: [
      'bg-sedalp-green',
      'text-white',
      'shadow-soft',
      'hover:-translate-y-0.5',
      'hover:bg-sedalp-green-dark',
      'hover:shadow-card',
    ],

    outline: [
      'border',
      'border-sedalp-green',
      'text-sedalp-green',
      'hover:bg-sedalp-green',
      'hover:text-white',
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