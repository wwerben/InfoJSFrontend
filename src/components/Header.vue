<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-colors duration-300" 
    :class="isScrolled ? 'bg-blue2 shadow-md ' : 'bg-transparent pt-1'">
    <div class="flex justify-between items-center pl-3 sm:pl-6 px-6 py-3">
      <!-- Logo -->
      <router-link to="/">
        <img
          :src="isScrolled ? scrollLogoSrc : defaultLogoSrc"
          alt="Logo"
          class="  transition-all duration-300" 
          :class="isScrolled ? ' -ml-2 md:ml-0 h-8 md:h-10 xl:h-8' : 'h-10 md:h-12 xl:h-18 '"
        />
      </router-link>


      <nav 
        class="hidden md:flex font-base transition-all  duration-300"
        :class="isScrolled ? 'text-normal font-normal xl:gap-8 gap-6' : 'text-xl gap-8 xl:gap-10'"
      >
        <router-link
          to="#"
          class="text-white hover:text-gray-300 hover:scale-115 duration-300 ease-in-out transition"
        >Firma</router-link>
        <router-link
          to="/oferta"
          class="text-gray-50 hover:text-gray-300 hover:scale-115 duration-300 ease-in-out transition"
        >Oferta</router-link>
        <router-link
          to="/rfid"
          class="text-gray-50 hover:text-gray-300 hover:scale-115 duration-300 ease-in-out transition"
        >RFID</router-link>
        <router-link
          to="/blog"
          class="text-gray-50 hover:text-gray-300 hover:scale-115 duration-300 ease-in-out transition"
        >Aktualności</router-link>
        <router-link
          to="/kontakt"
          class="text-gray-50 hover:text-gray-300 hover:scale-115 duration-300 ease-in-out transition"
        >Kontakt</router-link>
      </nav>

      <!-- Przycisk menu mobilnego -->
      <button
        class="md:hidden text-white focus:outline-none cursor-pointer"
        @click="toggleMobileMenu"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
      </svg>
      </button>
    </div>

    <!-- Menu mobilne -->
    <transition name="fade">
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden absolute top-0  left-0 w-full backdrop-blur-md bg-blue1/55"
      >
        <div class="flex flex-row justify-between bg-blue1/70 py-2 top-0 items-center">
          <div class="h-11 w-12"> </div>
            <router-link to="/">
          <img
            :src="isScrolled ? scrollLogoSrc : scrollLogoSrc"
            alt="Logo"
            class="  transition-all flex justify-center duration-300" 
            :class="isScrolled ? 'h-10' : 'h-10'"
          />
        </router-link>

          <button
              class="md:hidden  text-white mr-5 justify-self-end focus:outline-none cursor-pointer"
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
            to="/oferta"
            class="text-gray-200"
            @click="closeMobileMenu"
          >Oferta</router-link>
          <router-link
            to="#"
            class="text-gray-200"
            @click="closeMobileMenu"
          >Aktualności</router-link>
          <router-link
            to="/kontakt"
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
