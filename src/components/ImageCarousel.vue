<template>
  <div class="relative group w-full">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :autoplay="autoplayOptions"
      :pagination="{ /* ... */ }"
      :navigation="{ /* ... */ }"
      class="aspect-[19/11] w-full overflow-hidden "
      @swiper="onSwiperInitialized"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <div class="relative h-full ">
          <img 
            :src="image.src" 
            :alt="image.alt || `Slide ${index + 1}`" 
            class="w-full h-full object-cover"
          />
          <div 
            v-if="image.caption" 
            class="absolute top-0 left-0 right-0 bg-black/50 lg:text-xl text-normal  font-medium text-white lg:p-3 p-1 text-center"
          >
            {{ image.caption }}
          </div>
        </div>
      </swiper-slide>

    
    </swiper>

    <div class="custom-pagination absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination, Autoplay]
const autoplayOptions = {
  delay: 5000,
  disableOnInteraction: false,
}

const props = defineProps({
  images: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(img => {
        return 'src' in img && typeof img.src === 'string'
      })
    }
  },
})

const swiperInstance = ref(null)

const onSwiperInitialized = (swiper) => {
  swiperInstance.value = swiper
  console.log('Swiper initialized:', swiper)
}

// Możesz dodać więcej funkcji np. do ręcznego sterowania karuzelą
const nextSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideNext()
  }
}

const prevSlide = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slidePrev()
  }
}

// Udostępnij metody jeśli potrzebujesz sterować z komponentu nadrzędnego

</script>