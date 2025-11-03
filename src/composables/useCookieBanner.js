import { ref } from 'vue'

// Shared state for cookie banner
const showBanner = ref(false)

export function useCookieBanner() {
  const openBanner = () => {
    showBanner.value = true
  }

  const closeBanner = () => {
    showBanner.value = false
  }

  return {
    showBanner,
    openBanner,
    closeBanner
  }
}

