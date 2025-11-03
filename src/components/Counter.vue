
<template>
  <div class="relative text-gray-50 w-full h-[85vh] bg-transparent">
    <div class="absolute bottom-0 inset-x-0 px-4 pb-8">
      
      <!-- Mobile Carousel (visible only on mobile) -->
      <div class="relative overflow-hidden md:hidden">
        <!-- Slides Container - Horizontal -->
        <div 
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <!-- Slide 1: Items 0-1 -->
          <div class="w-full flex-shrink-0">
            <div class="grid grid-cols-2 gap-x-4 gap-y-4 justify-items-center items-center">
              <div
                v-for="index in [0, 1]"
                :key="`slide1-${index}`"
                class="flex flex-col justify-center items-center"
              >
                <div class="text-2xl font-bold leading-none">
                  <span class="text-sm -ml-2 -mr-1 font-lg font-medium" v-if="items[index].target < 9999">ponad</span>
                  {{ displayCounts[index] }}<span v-if="items[index].target >= 9999">+</span>
                </div>
                <div class="text-[10px] text-center font-base">
                  {{ items[index].label }}
                </div>
              </div>
            </div>
          </div>

          <!-- Slide 2: Items 2-3 -->
          <div class="w-full flex-shrink-0">
            <div class="grid grid-cols-2 gap-x-4 gap-y-4 justify-items-center items-center">
              <div
                v-for="index in [2, 3]"
                :key="`slide2-${index}`"
                class="flex flex-col justify-center items-center"
              >
                <div class="text-2xl font-bold leading-none">
                  <span class="text-xs -ml-2 -mr-1 md:text-sm lg:text-base font-medium" v-if="items[index].target < 9999">ponad</span>
                  {{ displayCounts[index] }}<span v-if="items[index].target >= 9999">+</span>
                </div>
                <div class="text-[10px] text-center font-base">
                  {{ items[index].label }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop Grid (visible only on desktop) -->
      <div class="hidden md:block">
        <div class="grid grid-cols-4 gap-x-2 justify-items-center items-center">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="flex flex-col justify-center items-center"
          >
            <div class="text-2xl lg:text-6xl font-bold leading-none">
              <span class="text-sm -ml-2 -mr-1 font-lg font-medium" v-if="item.target < 9999">ponad</span>
              {{ displayCounts[index] }}<span v-if="item.target >= 9999">+</span>
            </div>
            <div class="text-[10px] text-center lg:text-base font-base lg:font-base">
              {{ item.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import { useCookieBanner } from '@/composables/useCookieBanner'

const items = [
  { target: 9999, label: 'dziennie produkowanych mebli' },
  { target: 30,    label: 'lat doświadczenia' },
  { target: 16,    label: 'konektorów integracyjnych EDI' },
  { target: 1000,  label: 'użytkowników każdego dnia' }
]

const displayCounts = ref(items.map(() => 0))
const currentSlide = ref(0)
const { showBanner } = useCookieBanner()
const animationsStarted = ref(false)

// Carousel logic
const totalSlides = computed(() => Math.ceil(items.length / 2)) // 2 items per slide
const maxSlide = computed(() => totalSlides.value - 1)

function nextSlide() {
  if (currentSlide.value < maxSlide.value) {
    currentSlide.value++
  } else {
    currentSlide.value = 0 // Reset to first slide
  }
  // Restart animations for current slide
  restartSlideAnimations()
}

// Navigation functions removed - carousel is now auto-only

function restartSlideAnimations() {
  // Get indices for current slide (2 items per slide)
  const startIndex = currentSlide.value * 2
  const endIndex = Math.min(startIndex + 1, items.length - 1)
  
  // Reset display counts for current slide
  for (let i = startIndex; i <= endIndex; i++) {
    displayCounts.value[i] = 0
  }
  
  // Restart animations for current slide
  for (let i = startIndex; i <= endIndex; i++) {
    animateCount(i, items[i].target)
  }
}

// Auto-play functionality (optional)
let autoPlayInterval = null

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    nextSlide() // This will handle the slide change and animation restart
  }, 4000) // Change slide every 4 seconds
}

function stopAutoPlay() {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

function animateCount(index, target, duration = 2000) {
  const step = target >= 10000
    ? 100
    : target >= 1000
      ? 10
      : 1

  const start = performance.now()

  function tick(now) {
    const t = Math.min((now - start) / duration, 1)
    const value = Math.floor((t * target) / step) * step
    displayCounts.value[index] = Math.min(value, target)

    if (t < 1) {
      requestAnimationFrame(tick)
    } else {
      displayCounts.value[index] = target
    }
  }

  requestAnimationFrame(tick)
}

// Function to start all animations
function startAllAnimations() {
  if (animationsStarted.value) return // Prevent multiple starts
  
  // Start counter animations
  items.forEach((item, i) => {
    animateCount(i, item.target)
  })
  
  // Start auto-play only on mobile devices
  if (window.innerWidth < 768) { // md breakpoint
    startAutoPlay()
  }
  
  animationsStarted.value = true
}

onMounted(() => {
  // Start animations only if cookie banner is not shown
  if (!showBanner.value) {
    startAllAnimations()
  }
})

// Watch for cookie banner close - start animations when it closes
watch(showBanner, (newValue) => {
  if (!newValue && !animationsStarted.value) {
    // Banner closed and animations not yet started
    startAllAnimations()
  }
})

// Cleanup on unmount
onUnmounted(() => {
  stopAutoPlay()
})
</script>
