<template>
    <div class="bg-gradient-to-br min-h-screen from-white to-gray-200 mt-12 pb-16">
      <div class="flex justify-center text-gray-800">
        <div class="max-w-7xl bg-gray-100 p-5 flex justify-center ">
          <div v-if="loading" class="p-4 h-screen">
            <img src="@/assets/img/loader.gif" alt="Ładowanie">
          </div>
          <div v-else-if="error">
            <p>{{ errorpage }}</p>
          </div>
          <div v-else>
            <h2 class="text-xl  md:text-4xl font-semibold md:mt-12 mb-1 md:mb-2">{{ post.Title }}</h2>
            <p class="text-gray-500 text-sm md:text-lg mb-1">
              Opublikowano: {{ new Date(post.publishedAt).toLocaleDateString() }}
            </p>
            <!-- Główny obraz z placeholderem -->
            <div v-if="!imageLoadedMain" class="bg-gray-200 animate-pulse w-full h-full"></div>
            <div v-if="post.MainImage && showImages">
              
            
              <img
                v-show="imageLoadedMain"
                :src="'https://infobase.com.pl/strapi/' + post.MainImage.url"
                alt="Główne zdjęcie posta"
                @load="handleMainImageLoad"
                class="w-full my-5 aspect-[16/9] object-cover"
              />
            </div>
            <!-- Treść posta renderowana jako markdown -->
            <div class="mb-4 mt-10 px-4 prose-sm md:prose-lg" v-html="markdownHtml"></div>
            <!-- Galeria obrazów z placeholderem -->
            <hr class="w-full border-t h-3 border-gray-800 mb-4 mt-10">
            <div v-if="post.Images && post.Images.length && showImages" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                v-for="(image, index) in post.Images"
                :key="index"
                class="overflow-hidden"
              >
                <div v-if="!galleryImagesLoaded[index]" class="bg-gray-200 animate-pulse w-full h-64"></div>
                <img
                  v-show="galleryImagesLoaded[index]"
                  :src="'https://infobase.com.pl/strapi/' + image.url"
                  alt="Obraz z posta"
                  class="object-cover w-full h-64 md:h-48 cursor-pointer"
                  @click="openModal(image)"
                  @load="handleGalleryImageLoad(index)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Modal dla powiększonego obrazu -->
      <div
        v-if="selectedImage"
        class="fixed inset-0 flex  backdrop-blur-sm items-center justify-center z-50"
        @click.self="closeModal"
      >
        <div class="relative flex items-center mx-2 md:max-w-2/3 h-auto justify-center">
          <button
            @click="closeModal"
            class="absolute top-0 right-0 m-2 opacity-40 md:m-4 text-white text-3xl font-bold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
            </svg>
          </button>
          <img
            :src="'https://infobase.com.pl/strapi/' + selectedImage.url"
            alt="Powiększony obraz"
            class="h-full w-full "
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, computed, nextTick } from "vue";
  import { request, gql } from "graphql-request";
  import { marked } from "marked";
  import errorpage from '@/components/Error.vue';
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  export default {
    props: ['documentId'],
    components: { errorpage },
    setup(props) {
      const post = ref(null);
      const loading = ref(true);
      const error = ref(null);
      const selectedImage = ref(null);
      // Flaga kontrolująca renderowanie obrazów po wyrenderowaniu tekstu
      const showImages = ref(false);
      // Stany ładowania obrazów
      const imageLoadedMain = ref(false);
      const galleryImagesLoaded = ref({});
      const API_URL = 'https://infobase.com.pl/strapi/graphql';
  
      const GET_POST = gql`
        query Post($documentId: ID!) {
          post(documentId: $documentId) {
            Title
            Des
            publishedAt
            MainImage {
              url
            }
            Images(pagination: { limit: -1 }) {
              url
            }
          }
        }
      `;
  
      const fetchPost = async () => {
        loading.value = true;
        try {
          const data = await request(
            API_URL,
            GET_POST,
            { documentId: props.documentId }
          );
          
          
          
          post.value = data.post;
          // Przygotuj stan ładowania dla galerii (dla każdego obrazu)
          if (data.post.Images && data.post.Images.length) {
            data.post.Images.forEach((img, index) => {
              galleryImagesLoaded.value[index] = false;
            });
          }
          // Po wyrenderowaniu treści ustaw showImages na true
          await nextTick();
          setTimeout(() => {
            showImages.value = true;
          }, 200);
          error.value = null;
        } catch (err) {
          // graphql-request zwraca .response.errors przy błędach GraphQL
          error.value = err?.response?.errors?.[0]?.message ?? err.message;
          console.error(err);
        } finally {
          loading.value = false;
        }
      };
  
      onMounted(() => {
        fetchPost();
        scrollToTop();
      });
  
      // Konwersja treści markdown na HTML przy użyciu marked
      const markdownHtml = computed(() => {
        return post.value ? marked(post.value.Des) : "";
      });
  
      // Funkcja otwierająca modal z wybranym obrazem
      const openModal = (image) => {
        selectedImage.value = image;
      };
  
      // Funkcja zamykająca modal
      const closeModal = () => {
        selectedImage.value = null;
      };
  
      // Zmiana stanu dla głównego obrazu po załadowaniu
      const handleMainImageLoad = () => {
        imageLoadedMain.value = true;
      };
  
      // Zmiana stanu dla obrazu galerii po załadowaniu
      const handleGalleryImageLoad = (index) => {
        galleryImagesLoaded.value[index] = true;
      };
  
      return {
        post,
        loading,
        error,
        markdownHtml,
        selectedImage,
        showImages,
        imageLoadedMain,
        galleryImagesLoaded,
        openModal,
        closeModal,
        handleMainImageLoad,
        handleGalleryImageLoad,
      };
    },
  };
</script>

  