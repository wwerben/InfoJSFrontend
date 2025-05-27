
<template>
  <div class="relative text-gray-50 w-full h-[85vh] bg-transparent">
    <div class="absolute bottom-0 inset-x-0 px-4 pb-8">

      <div
        class="grid
               grid-cols-2 grid-rows-2 gap-x-4 gap-y-2
               md:grid-cols-3 md:grid-rows-1 md:gap-x-2 md:gap-y-0
               justify-items-center justify-center items-center">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex flex-col justify-center items-center"
          :class="[
            index === 1
              ? 'max-md:col-span-2 max-md:row-start-1'       
              : index === 0
                ? 'max-md:col-start-1 max-md:row-start-2'     
                : 'max-md:col-start-2 max-md:row-start-2',    
            index === 0
              ? 'md:col-start-1 md:row-start-auto'
              : index === 1
                ? 'md:col-start-2 md:row-start-auto'
                : 'md:col-start-3 md:row-start-auto'
          ]">
          <div class="text-sm">
       

          </div>
          <div class="text-4xl lg:text-5xl font-bold leading-none">
            <span class="text-sm -ml-4 font-normal">ponad</span>
            {{ displayCounts[index] }}
          </div>
          <div class="text-xs text-center lg:text-lg font-medium">
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
  { target: 10000, label: 'dokumentów sprzedaży każdego dnia' },
  { target: 30,    label: 'lat doświadczenia' },
  { target: 1000,  label: 'użytkowników systemu dziennie' }
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
