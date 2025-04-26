<!-- src/components/CountingSlider.vue -->
<template>
    <div class="relative text-gray-50  w-full h-[70vh] bg-transparent">
      <!-- centralny kontener, tu można zmienić pozycję -->
      <div class="absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <transition
          mode="out-in"
          enter-active-class="transition-opacity duration-1000"
          leave-active-class="transition-opacity duration-500"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <!-- klucz wymusza podmianę elementu przy zmianie currentIndex -->
          <div :key="currentIndex" class="flex flex-col  items-center">
            <div class="text-9xl font-bold leading-none">
              {{ displayCount }}+
            </div>
            <div class="text-2xl -mt-2">
              {{ items[currentIndex].label }}
            </div>
          </div>
        </transition>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from 'vue'
  
  const items = [
    { target: 30,    label: 'lat doświadczenia'                  },
    { target: 1000,  label: 'użytkowników systemu dziennie'          },
    { target: 10000, label: 'dokumentów sprzedaży każdego dnia'   },
  ]
  
  const currentIndex = ref(0)
  const displayCount  = ref(0)
  

  function animateCount(target, duration = 1500) {
    return new Promise(resolve => {
      const start = performance.now()
      function tick(now) {
        const t = Math.min((now - start) / duration, 1)
        displayCount.value = Math.floor(t * target)
        if (t < 1) {
          requestAnimationFrame(tick)
        } else {
          displayCount.value = target

          setTimeout(resolve, 3500)
        }
      }
      requestAnimationFrame(tick)
    })
  }
  
  onMounted(() => {

  const cycle = async () => {
    
    displayCount.value = 0
    await nextTick()                
    await animateCount(items[currentIndex.value].target)

    
    currentIndex.value = (currentIndex.value + 1) % items.length

    
    cycle()
  }

  cycle()  
})
  </script>
  