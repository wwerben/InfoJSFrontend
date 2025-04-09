<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-colors bg-blue2 duration-300">
    <div class="flex justify-between items-center px-6 py-3">
      <!-- Logo -->
      <router-link to="/">
        <img
          :src="isScrolled ? scrollLogoSrc : defaultLogoSrc"
          alt="Logo"
          class=" ml-0 md:ml-6 transition-all duration-300" 
          :class="isScrolled ? 'h-8 md:h-12' : 'h-10 md:h-16'"
        />
      </router-link>

      <!-- Nawigacja desktopowa -->
      <nav 
        class="hidden md:flex mr-6 font-medium transition-all  duration-300"
        :class="isScrolled ? 'text-lg gap-8' : 'text-xl gap-10'"
      >
        <router-link
          to="#"
          class="text-white hover:text-gray-300 transition-colors duration-200"
        >Firma</router-link>
        <router-link
          to="#"
          class="text-gray-50 hover:text-gray-300 transition-colors duration-200"
        >Oferta</router-link>
        <router-link
          to="#"
          class="text-gray-50 hover:text-gray-300 transition-colors duration-200"
        >Aktualności</router-link>
        <router-link
          to="#"
          class="text-gray-50 hover:text-gray-300 transition-colors duration-200"
        >Kontakt</router-link>
      </nav>

      <!-- Przycisk menu mobilnego -->
      <button
        class="md:hidden text-white focus:outline-none cursor-pointer"
        @click="toggleMobileMenu"
      >
        ☰
      </button>
    </div>

    <!-- Menu mobilne -->
    <transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-0  left-0 w-full backdrop-blur-md bg-blue1/55"
      >
        <div class="flex flex-row justify-between bg-blue1/60 py-2 top-0 items-center">
          <div class="h-10 w-12"> </div>
            <router-link to="/">
          <img
            :src="isScrolled ? scrollLogoSrc : defaultLogoSrc"
            alt="Logo"
            class="  transition-all flex justify-center duration-300" 
            :class="isScrolled ? 'h-10' : 'h-10'"
          />
        </router-link>

          <button
              class="md:hidden  text-white mr-4 justify-self-end focus:outline-none cursor-pointer"
              @click="toggleMobileMenu"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </button>
        </div>
       
     
        <nav
          class="flex flex-col p-4 py-4 font-medium text-center text-xl gap-5"
        >
          <router-link
            to="#"
            class="text-gray-200"
            @click="closeMobileMenu"
          >Firma</router-link>
          <router-link
            to="#"
            class="text-gray-200"
            @click="closeMobileMenu"
          >Oferta</router-link>
          <router-link
            to="#"
            class="text-gray-200"
            @click="closeMobileMenu"
          >Aktualności</router-link>
          <router-link
            to="#"
            class="text-white"
            @click="closeMobileMenu"
          >Kontakt</router-link>
        </nav>
        
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Importy logo (dostosuj ścieżki):
import LogoDefault from '@/assets/img/LogoSys_B.svg'
import LogoScroll from '@/assets/img/Logo_B.png'

// Ustawienia
const scrollTrigger = 300
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const defaultLogoSrc = LogoDefault
const scrollLogoSrc = LogoScroll

// Funkcje menu mobilnego
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Sprawdzanie scrolla
function checkScroll() {
  isScrolled.value = window.scrollY > scrollTrigger
}

// Zamykanie menu klikając poza nim
const handleClickOutside = (event) => {
  if (
    isMobileMenuOpen.value &&
    !event.target.closest('button') &&
    !event.target.closest('.md\\:hidden')
  ) {
    isMobileMenuOpen.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  document.addEventListener('click', handleClickOutside)
  checkScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Przykładowa prosta animacja (fade) przy użyciu <transition name="fade"> */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
