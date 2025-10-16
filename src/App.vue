<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'

import DefaultHeader from '@/components/Header.vue'
import AltHeader     from '@/components/AltHeader.vue'
import Footer        from '@/components/Footter.vue'
import Loading       from '@/components/Loading.vue'

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
})
</script>


<template>
  <div id="app">
    <!-- loader na start -->
    <Loading v-if="!isLoaded" />

    <!-- cała zawartość po załadowaniu -->
    <template v-else>
      <!-- tu wyświetli się DefaultHeader albo AltHeader -->
      <component :is="headerComponent" />

      <router-view />

      <Footer v-if="isFooterLoaded" />
    </template>
  </div>
</template>
