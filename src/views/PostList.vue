<template>
  <div class="">
    <div class="flex justify-center items-center">
      <div class="w-full h-[50vh] flex justify-center items-center">
        <img src="@/assets/img/poly.svg" class="object-cover absolute w-full h-[50vh]" />
        <div class="bg-blue2/30 absolute z-10 w-full h-[50vh]"></div>
        <h2 class="text-3xl sm:text-4xl md:text-6xl font-semibold justify-center text-gray-50 relative z-10">
          Aktualności
        </h2>
      </div>
    </div>

    <section>
      <div class="max-w-7xl py-10 md:my-8 justify-center mx-auto">
        <!-- stan ładowania -->
        <div v-if="loading" class="flex justify-center items-center h-screen">
          <img
            src="@/assets/img/loading.gif"
            alt="Ładowanie..."
            class="w-16 h-16"
          />
        </div>

        <!-- błąd -->
        <div v-else-if="error" class="text-red-500 text-center">
          Wystąpił błąd: {{ error }}
        </div>

        <!-- właściwa lista postów -->
        <div v-else>
          <ul class="grid grid-cols-1   md:grid-cols-2 gap-8 items-stretch">
            <li
              v-for="post in posts"
              :key="post.documentId"
              class="h-full"
            >
              <router-link :to="`/post/${post.documentId}`" class="block h-full">
                <div class="max-w-4xl hover:scale-102 transition-all duration-300 bg-gray-100 rounded-lg w-full h-full flex flex-col mb-3 md:mb-10 text-gray-800 mx-3 md:mx-5 overflow-hidden group">
                  <div class="w-full aspect-[16/9] overflow-hidden relative">
                    <img
                      v-if="post.MainImage?.url"
                      class="object-cover w-full h-full"
                      :src="'https://infobase.com.pl/strapi/' + post.MainImage.url"
                      alt="Post Image"
                    />
                    <div class="hidden lg:block absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-black/60 text-gray-50 p-4">
                      <p class="text-sm md:text-lg font-normal">
                        {{ plainTextZajawka(post.Des) }}...
                      </p>
                    </div>
                  </div>
                  <div class=" p-5">
                    <h2 class="text-xl lg:text-2xl hover:text-blue-900 transform transition hover:scale-101 mb-1 font-semibold">
                      {{ post.Title }}
                    </h2>
                    <span class="text-md text-gray-500">
                      {{ new Date(post.publishedAt).toLocaleDateString() }}
                    </span>
                    <p class="text-sm md:text-lg font-normal text-gray-600 md:hidden">
                      {{ plainTextZajawka(post.Des) }}...
                    </p>
                  </div>
                
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { request, gql } from "graphql-request";
import { marked } from "marked";

export default {
  setup() {
    const posts = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const API_URL = 'https://infobase.com.pl/strapi/graphql';

    const GET_POSTS = gql`
      query Post($sort: [String]) {
        posts(sort: $sort) {
          Title
          documentId
          publishedAt
          MainImage {
            url
          }
          Des
        }
      }
    `;

    const fetchPosts = async () => {
      loading.value = true;
      try {
        const data = await request(
          API_URL,
          GET_POSTS,
          { sort: ["publishedAt:desc"] }
        );
        posts.value = data.posts;
        error.value = null;
      } catch (err) {
        // graphql-request zwraca .response.errors przy błędach GraphQL
        error.value = err?.response?.errors?.[0]?.message ?? err.message;
        console.error(err);
      } finally {
        loading.value = false;
      }
    };

    const plainTextZajawka = (text, limit = 200) => {
      const html = marked(text);
      return html.replace(/<[^>]*>/g, "").slice(0, limit);
    };

    onMounted(fetchPosts);

    return { posts, loading, error, plainTextZajawka };
  },
};
</script>

<style scoped>
/* Opcjonalnie: dostosuj styl gifa */
</style>
