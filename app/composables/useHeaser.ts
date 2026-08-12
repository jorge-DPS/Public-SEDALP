export const useHeader = () => {
  const isMenuOpen = ref(false)
  const isScrolled = ref(false)

  const openMenu = () => {
    isMenuOpen.value = true
  }

  const closeMenu = () => {
    isMenuOpen.value = false
  }

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }

  const handleScroll = () => {
    if (!import.meta.client) {
      return
    }

    isScrolled.value = window.scrollY > 20
  }

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeMenu()
    }
  }

  watch(isMenuOpen, (open) => {
    if (!import.meta.client) {
      return
    }

    document.body.style.overflow = open
      ? 'hidden'
      : ''
  })

  onMounted(() => {
    handleScroll()

    window.addEventListener(
      'scroll',
      handleScroll,
      {
        passive: true,
      },
    )

    window.addEventListener(
      'keydown',
      handleKeydown,
    )
  })

  onBeforeUnmount(() => {
    window.removeEventListener(
      'scroll',
      handleScroll,
    )

    window.removeEventListener(
      'keydown',
      handleKeydown,
    )

    document.body.style.overflow = ''
  })

  return {
    isMenuOpen,
    isScrolled,

    openMenu,
    closeMenu,
    toggleMenu,
  }
}