<!-- src/components/LatestPosts.vue -->
<template>
  <section class="py-8">
    <h2 class="text-2xl font-medium text-gray-800 mb-6 text-center">Aktualności</h2>

    <div v-if="loading" class="text-center text-gray-500">Ładowanie…</div>
    <div v-else-if="error" class="text-center text-red-500">{{ error }}</div>
    
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div 
        v-for="post in posts" 
        :key="post.documentId" 
        class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
      >
        <router-link :to="`/post/${post.documentId}`" class="flex-1 flex flex-col">
          <!-- Obrazek -->
          <div class="h-48 overflow-hidden">
            <img
              v-if="post.MainImage && post.MainImage.url"
              :src="'http://168.119.240.129:1337/uploads/' + post.MainImage"
              alt="Post image"
              class="object-cover w-full h-full"
            />
          </div>

  
          <div class="p-4 flex-1 flex flex-col">
            <h3 class="text-xl font-semibold mb-2 hover:text-blue-700 transition">
              {{ post.Title }}
            </h3>
            <span class="text-sm text-gray-500 mb-3">
              {{ formatDate(post.publishedAt) }}
            </span>
            <p class="text-gray-700 flex-1">
              {{ excerpt(post.Des, 100) }}…
            </p>
          </div>
        </router-link>


        <div class="p-4 pt-0">
          <router-link :to="`/post/${post.documentId}`">
            <button class="w-full py-2 bg-blue3 text-white rounded hover:bg-blue2 transition">
              Czytaj dalej
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { request, gql } from 'graphql-request'
import { marked } from 'marked'

const GET_LATEST_POSTS = gql`
  query LatestPosts {
    posts(
      pagination: { limit: 3 }
      sort: ["publishedAt:desc"]
    ) {
      Title
      documentId
      publishedAt
      MainImage { url }
      Des
    }
  }
`

export default {
  name: 'LatestPosts',
  setup() {
    const posts   = ref([])
    const loading = ref(true)
    const error   = ref(null)
    const API_URL = 'https://infobase.tojest.dev/api/graphql'


   const fetchPosts = async () => {
  loading.value = true
  try {
    const res = await request(API_URL, GET_LATEST_POSTS)
    // res => { posts: [...] }
    posts.value = res?.posts ?? []
    error.value = null
  } catch (e) {
    // graphql-request zwraca .response.errors przy błędach GraphQL
    error.value = e?.response?.errors?.[0]?.message ?? e.message
    console.error(e)
  } finally {
    loading.value = false
  }
}

    // Zwraca czysty tekst z markdown i obcina do limitu znaków
    const excerpt = (text, limit = 150) => {
      const html = marked(text || '')
      const plain = html.replace(/<[^>]*>/g, '')
      return plain.length > limit ? plain.slice(0, limit) : plain
    }

    // Formatowanie daty w stylu PL
    const formatDate = (iso) => {
      return new Date(iso).toLocaleDateString('pl-PL', {
        year: 'numeric', month: 'long', day: 'numeric'
      })
    }

    onMounted(fetchPosts)

    return { posts, loading, error, excerpt, formatDate }
  }
}
</script>

<style scoped>
/* przykładowe style – dostosuj według designu */
section { max-width: 1200px; margin: 0 auto; }
</style>
