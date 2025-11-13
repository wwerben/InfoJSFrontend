<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

import DefaultHeader from '@/components/Header.vue'
import AltHeader     from '@/components/AltHeader.vue'
import Footer        from '@/components/Footter.vue'
import Loading       from '@/components/Loading.vue'
import CookieBanner from '@/components/CookieBanner.vue';


const isLoaded       = ref(false)
const isFooterLoaded = ref(false)

// hook vue-router
const route = useRoute()


const headerComponent = computed(() => {
  if (route.path.startsWith('/post/')) {
    return AltHeader
  }
  if (route.path === '/blog') {
    return AltHeader
  }
  return DefaultHeader
})

onMounted(() => {
  isLoaded.value = true
  setTimeout(() => { isFooterLoaded.value = true }, 3000)
  document.title = 'InfoBase Systemy Informatyczne'
  
  const favicon = document.querySelector('link[rel="icon"]')
  if (favicon) {
    favicon.href = '/favicon.ico'
  }

  document.addEventListener('DOMContentLoaded', () => {
  // --- Meta Description ---
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', 'Serwis firmy INFOBASE zajmującej się produkcją oprogramowania. Podstawowy produkt naszej firmy ZSI PULSAR jest kompleksowym systemem wspomagającym zarządzanie w firmie.');

  // --- Meta Keywords ---
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', 'oracle, transport, produkcja, CRM, koszty, RFID, TAG, magazyn wysokiego składowania, automatyczna identyfikacja, antena, czytnik, automatyczny magazyn, kody kreskowe, zarządzanie produkcją, logistyka sprzedaży, B2B, finanse, wielowalutowość, spedycja, warsztat, stacja obsługi, kalkulacje, technologia, systemy informatyczne, komputeryzacja, programy komputerowe, zintegrowane systemy informatyczne, PULSAR, Turek, optymalizacja dystrybucji, odys, pakowanie, algorytm pakowania, najkrótsza droga, tir, optymalizacja trasy');
});

})




</script>


<template>
  <meta name="google-site-verification" content="CJoBQZ6b8p2t-Ifz3Mo8vKnjmSlnld59v1WCuilD-wQ" />
  <div id="app">
    <!-- loader na start -->
    <Loading v-if="!isLoaded" />

    <!-- cała zawartość po załadowaniu -->
    <template v-else>
      <!-- tu wyświetli się DefaultHeader albo AltHeader -->
      <component :is="headerComponent" />

      <router-view />
      <CookieBanner />

      <Footer v-if="isFooterLoaded" />
    </template>
  </div>
</template>
