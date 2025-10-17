
<template>
  <div class="relative text-gray-50 w-full h-[85vh] bg-transparent">
    <div class="absolute bottom-0 inset-x-0 px-4 pb-8">

      <div
        class="grid
               grid-cols-2 grid-rows-2 gap-x-4 gap-y-4
               md:grid-cols-4 md:grid-rows-1 md:gap-x-2 md:gap-y-0
               justify-items-center justify-center items-center">
               <div
                v-for="(item, index) in items"
                :key="index"
                class="flex flex-col justify-center items-center"
                :class="[
                  // Mobile - 2x2 (2 kolumny, 2 rzędy)
                  index === 0 
                    ? 'col-start-1 row-start-1'
                    : index === 1
                      ? 'col-start-2 row-start-1'
                      : index === 2
                        ? 'col-start-1 row-start-2'
                        : 'col-start-2 row-start-2',
                  // Desktop - 4x1 (4 kolumny, 1 rząd)
                  index === 0
                    ? 'md:col-start-1 md:row-start-1'
                    : index === 1
                      ? 'md:col-start-2 md:row-start-1'
                      : index === 2
                        ? 'md:col-start-3 md:row-start-1'
                        : 'md:col-start-4 md:row-start-1'
                ]"
              >
          <div class="text-sm">
       

          </div>
          <div class="text-2xl lg:text-6xl font-bold leading-none">
            <span class="text-sm -ml-2 -mr-1 font-lg font-medium " v-if="item.target < 9999">ponad</span>
            {{ displayCounts[index] }}<span v-if="item.target >= 9999">+</span>
            
          </div>
          <div class="text-[10px] text-center lg:text-base font-base lg:font-base">
            {{ item.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const items = [
  { target: 9999, label: 'dziennie produkowanych mebli' },
  { target: 30,    label: 'lat doświadczenia' },
  { target: 16,    label: 'konektorów integracyjnych EDI' },
  { target: 1000,  label: 'użytkowników każdego dnia' }
]

const displayCounts = ref(items.map(() => 0))

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

onMounted(() => {
  items.forEach((item, i) => {
    animateCount(i, item.target)
  })
})
</script>
