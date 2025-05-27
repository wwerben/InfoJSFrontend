<!-- components/LogoSlider.vue -->
<template>
    <div class="max-w-7xl mx-auto px-4 ">
      <div
        class="relative w-full max-w-6xl mx-auto h-[15vh] overflow-hidden group"
        @mouseenter="onHover(true)"
        @mouseleave="onHover(false)"
      >
        <transition name="fade" mode="out-in">
          <div
            :key="currentSlide"
            class="grid grid-cols-3 gap-6 items-center justify-items-center h-full"
          >
            <div
              v-for="logo in slides[currentSlide]"
              :key="logo.id"
              class="flex items-center justify-center"
            >
              <a
                :href="logo.link"
                target="_blank"
                rel="noopener noreferrer"
                class="block hover:opacity-80 transition-opacity"
                @click.stop="handleLogoClick(logo)"
              >
                <img
                  :src="logo.src"
                  :alt="logo.alt"
                  class="h-12 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </transition>
  
        <button
          v-if="showControls"
          @click.stop="prevSlide"
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-opacity duration-300 hover:bg-black/80 focus:outline-none"
          aria-label="Previous slide"
        >&lt;</button>
  
        <button
          v-if="showControls"
          @click.stop="nextSlide"
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-opacity duration-300 hover:bg-black/80 focus:outline-none"
          aria-label="Next slide"
        >&gt;</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
  
  // Import obrazków
  import benixImg    from '@/assets/img/benix.jpg'
  import dolmarImg   from '@/assets/img/Dolmarmeble.png'
  import mirjanImg   from '@/assets/img/mirjan.png'
  import wersalImg   from '@/assets/img/wersal.jpg'
  import matexImg   from '@/assets/img/matex.png'
  import koloImg     from '@/assets/img/kolo.png'
  import piaskiImg   from '@/assets/img/piaski.jpg'
  import agnellaImg  from '@/assets/img/agnella.png'
  import polakImg    from '@/assets/img/polak.jpg'
  import victoriaImg from '@/assets/img/victoria.png'
  import beliniImg from '@/assets/img/belini.jpg'
  import domelImg from '@/assets/img/domel.jpg'
  import gortexImg from '@/assets/img/gortex.jpg'
  import ariadnaImg from '@/assets/img/ariadna.jpg'
  import haftImg from '@/assets/img/haft.jpg'
  import pollenaImg from '@/assets/img/pollena.jpg'
  import elektrokabelImg from '@/assets/img/elektrokabel.jpg'
  import kablonexImg from '@/assets/img/kablonex.jpg'
  import chodziezImg from '@/assets/img/chodziez.jpg'
  import wistilImg from '@/assets/img/wistil.jpg'
  import cmielowImg from '@/assets/img/cmielow.jpg'
  import pgpImg from '@/assets/img/PGP.jpg'
  
  
  // Tablica logotypów
  const logos = [
    
    { id: 1, src: wersalImg,   alt: 'Wersal',         link: 'https://wersal.pl/' },
    { id: 2, src: benixImg,    alt: 'Benix',          link: 'https://benix.pl' },
    { id: 3, src: piaskiImg,   alt: 'Piaski',         link: 'https://piaski.com.pl/' },

    
    { id: 4, src: mirjanImg,   alt: 'Mirjan 24',      link: 'https://mirjan24.pl' },
    { id: 5, src: dolmarImg,   alt: 'Dolmar Meble',   link: 'https://dolmar.pl/' },
    { id: 6, src: matexImg,     alt: 'Matex',           link: 'https://matex-polstermoebel.com.pl/' },

    { id: 7, src: koloImg,     alt: 'Kolo',           link: 'https://www.kolo-materace.pl/' },
    { id: 8, src: victoriaImg, alt: 'Victoria Meble', link: 'https://victoriameble.pl/' },
    { id: 9, src: polakImg,    alt: 'Polak Meble',    link: 'https://polakmeble.pl/' },

    { id: 10, src: beliniImg,     alt: 'Belini',           link: 'https://belini.pl/' },
    { id: 11, src: gortexImg,  alt: 'Gortex',        link: 'https://gortex.com.pl/' },
    { id: 12, src: gortexImg,  alt: 'Gortex',        link: 'https://gortex.com.pl/' },

    { id: 13, src: ariadnaImg,     alt: 'Ariadna',           link: 'https://ariadna.com.pl/' },
    { id: 14, src: wistilImg,  alt: 'Wisil',        link: 'https://wistil.pl/' },
    { id: 15, src: pgpImg,     alt: 'PGP',           link: 'http://www.porcelana-cmielow.pl/grupaporcelanowa.php' },

    { id: 16, src: agnellaImg,  alt: 'Agnella',        link: 'https://www.agnella.pl/' },
    { id: 17, src: haftImg,  alt: 'Haft',        link: 'https://haft.com.pl/' },
    { id: 18, src: haftImg,  alt: 'Haft',        link: 'https://haft.com.pl/' },

    { id: 19, src: kablonexImg,     alt: 'Kablonex',           link: 'https://kablonex.pl/' },
    { id: 20, src: pollenaImg,  alt: 'Pollena',        link: 'https://pollena.com.pl/' },
    { id: 21, src: elektrokabelImg,  alt: 'Elektrokabel',        link: 'https://elektrokabel.pl/' },
   
   

    



    
    

    
   
  ]
  
  const visibleCount     = 3
  const autoplay         = true
  const autoplayInterval = 5000
  const pauseOnHover     = true
  
  const currentSlide  = ref(0)
  const isHovered     = ref(false)
  const autoplayTimer = ref(null)
  
  // Grupowanie w slajdy po 3 loga
  const slides = computed(() => {
    const chunks = []
    for (let i = 0; i < logos.length; i += visibleCount) {
      chunks.push(logos.slice(i, i + visibleCount))
    }
    return chunks
  })
  
  const totalSlides  = computed(() => slides.value.length)
  const showControls = computed(() => isHovered.value && totalSlides.value > 1)
  
  function nextSlide() {
    currentSlide.value = (currentSlide.value + 1) % totalSlides.value
    resetAutoplay()
  }
  
  function prevSlide() {
    currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value
    resetAutoplay()
  }
  
  function startAutoplay() {
    if (autoplay && !isHovered.value) {
      autoplayTimer.value = setInterval(nextSlide, autoplayInterval)
    }
  }
  
  function stopAutoplay() {
    clearInterval(autoplayTimer.value)
    autoplayTimer.value = null
  }
  
  function resetAutoplay() {
    stopAutoplay()
    startAutoplay()
  }
  
  function onHover(state) {
    isHovered.value = state
    if (pauseOnHover) {
      state ? stopAutoplay() : startAutoplay()
    }
  }
  
  function handleLogoClick(logo) {
    console.log('Kliknięto logo:', logo.alt)
  }
  
  onMounted(startAutoplay)
  onBeforeUnmount(stopAutoplay)
  </script>
  
  <style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  