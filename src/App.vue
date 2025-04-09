<script setup>
import { ref, onMounted } from 'vue'
import Header from '@/components/Header.vue'
import Footter from '@/components/Footter.vue'
import { RouterView } from 'vue-router'
import Loading from '@/components/Loading.vue'

const isLoaded = ref(false)
const isFooterLoaded = ref(false)

onMounted(() => {
  // Ustawienie głównej zawartości jako załadowanej
  isLoaded.value = true

  // Opóźnione ładowanie stopki (np. 2000 ms)
  setTimeout(() => {
    isFooterLoaded.value = true
  }, 3000)
})
</script>

<template>
  <div id="app">
    <!-- Jeśli aplikacja jeszcze się nie załadowała, pokazujemy loader -->
    <template v-if="!isLoaded">
      <Loading />
    </template>
    <!-- Główna zawartość aplikacji -->
    <template v-else>
      <Header />
      <router-view></router-view>
      <!-- Stopka pojawi się z opóźnieniem -->
      <template v-if="isFooterLoaded">
        <Footter />
      </template>
      <template v-else>
        <!-- Opcjonalny placeholder dla stopki -->
        
      </template>
    </template>
  </div>
</template>
