<template>
    <div class="bg-gray-100">
      <div class="flex justify-center items-center">
        <div class="w-full h-[50vh] flex justify-center items-center">
          <img src="@/assets/img/poly.svg" class="object-cover absolute w-full h-[50vh]" />
          <div class="bg-blue2/30 absolute z-10 w-full h-[50vh]"></div>
          <h2 class="text-5xl sm:text-6xl md:text-8xl  font-semibold justify-center text-gray-50 relative z-10">Aktualności</h2>
        </div>
      </div>
      <!-- Sekcja z postami -->
      <section>
        <div class="max-w-7xl my-6 md:my-8 justify-center mx-auto">
          <!-- Używamy gridu na liście, aby każdy li był elementem gridu -->
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li v-for="post in posts" :key="post.documentId" class="flex justify-center">
                <router-link :to="`/post/${post.documentId}`">
              <div class="max-w-4xl mb-3 md:mb-10 text-gray-700 mx-3 md:mx-5 overflow-hidden">
                <div class="w-full aspect-[16/9] overflow-hidden ">
                  <img
                    class="object-cover w-full h-full"
                    v-if="post.MainImage && post.MainImage.url"
                    :src="'http://localhost:1337' + post.MainImage.url"
                    alt="Post Image"
                  />
                </div>
                <div class="pt-3 px-1  md:min-h-54">
                  <h2 class="text-xl md:text-3xl hover:text-blue-900  transform transition hover:scale-101 mb-1 font-semibold">{{ post.Title }}</h2>
                  <span class="text-md text-gray-500">
                    {{ new Date(post.publishedAt).toLocaleDateString() }}
                  </span>
                  <p class=" text-sm md:text-lg font-normal text-gray-600">
                    {{ plainTextZajawka(post.Des) }}...
                  </p>
                  
                </div>
                <div class="bottom-2">
                    <router-link :to="`/post/${post.documentId}`">
                    <button class="mt-4 px-4 py-2 bg-blue1  text-white rounded hover:bg-blue3">
                        Czytaj dalej
                    </button>
                    </router-link>
                </div>
              </div>
              
            </router-link>
            </li>
            
          </ul>
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
        try {
          const data = await request(
            "http://localhost:1337/graphql",
            GET_POSTS,
            { sort: ["publishedAt:desc"] }
          );
          posts.value = data.posts;
        } catch (err) {
          error.value = err.message;
        } finally {
          loading.value = false;
        }
      };

      const plainTextZajawka = (text, limit=150) => {
      
      let html = marked(text);
      
      return html.replace(/<[^>]*>/g, "").slice(0,limit);
      };

      onMounted(fetchPosts);
  
      return { posts, loading, error, plainTextZajawka };
    },
    
   
    
    
  };
  </script>
  

  <!-- plainTextZajawka(input) {
      
    let html = marked(input);
    
    return html.replace(/<[^>]*>/g, "").slice(0,100);
  }, -->