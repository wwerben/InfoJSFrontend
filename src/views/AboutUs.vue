<template>
    <div class="min-h-screen w-full bg-gray-50">
        <section id="film">
          <div class="relative max-h-screen    h-[85vh]">
           
            <video loading="lazy" autoplay muted playsinline loop class="w-full h-full object-cover object-center overflow-hidden z-0">
              <!-- Umieść film w folderze assets -->
              <source src="@/assets/img/film.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <div class="absolute inset-0 bg-blue2/75 z-10  object-cover "></div>
            <!-- <div class="absolute inset-0 flex justify-center items-center z-12  object-cover ">
                <span class="text-8xl font-semibold text-center text-gray-100 ">O nas</span>
            </div> -->
           
          </div>
          
        </section>
      
       <!-- Sekcja 1 -->
        <section class="w-full py-10 flex justify-center my-10">
        <div class="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-10 items-center">
            
            <!-- Tekst -->
            <div class="text-left space-y-4 lg:px-20">
            <h1 class="text-4xl font-semibold text-gray-800">O nas</h1>
            <p class="text-gray-700 text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada metus tortor, sit amet sollicitudin neque porttitor eu. Vivamus convallis condimentum libero, a consequat ligula egestas ac.
            </p>
            <p class="text-gray-700 text-base leading-relaxed">
                Nullam sit amet dolor ornare, facilisis nisi nec, dignissim nisl. Sed id velit sed lorem porttitor rutrum. Sed venenatis felis nunc. Etiam egestas tortor eleifend, egestas diam vel, maximus mi.
            </p>
            </div>

            <!-- Obrazek -->
            <div class="flex justify-center">
            <img src="https://placehold.co/500x300" alt="Opis obrazka" class="w-full h-auto max-w-lg">
            </div>

        </div>
        </section>

        <!-- Sekcja 2 (z tłem) -->
        <section class="w-full py-20 bg-gray-100 flex justify-center my-10">
        <div class="w-full max-w-screen-xl grid grid-cols-1  md:grid-cols-2 gap-8 px-4 sm:px-10 items-center">
            
            <!-- Tekst -->
           

            <div class="grid grid-cols-2 grid-rows-2 gap-4">
                <img src="https://placehold.co/500x300" alt="Opis obrazka" class="w-full h-auto max-w-lg">
                <img src="https://placehold.co/500x300" alt="Opis obrazka" class="w-full h-auto max-w-lg">
                <img src="https://placehold.co/500x300" alt="Opis obrazka" class="w-full h-auto max-w-lg">
                <img src="https://placehold.co/500x300" alt="Opis obrazka" class="w-full h-auto max-w-lg">

            </div>

            <div class="text-left space-y-4 lg:px-20">
            <h1 class="text-4xl font-semibold text-gray-800">30 lat doświadczenia</h1>
            <p class="text-gray-700 text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada metus tortor, sit amet sollicitudin neque porttitor eu. Vivamus convallis condimentum libero, a consequat ligula egestas ac.
            </p>
            <p class="text-gray-700 text-base leading-relaxed">
                Nullam sit amet dolor ornare, facilisis nisi nec, dignissim nisl. Sed id velit sed lorem porttitor rutrum. Sed venenatis felis nunc. Etiam egestas tortor eleifend, egestas diam vel, maximus mi.
            </p>
            </div>

        </div>
        </section>

        <section class="w-full py-10 flex justify-center my-10">
        <div class="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-10 items-center">
            
            <!-- Tekst -->
            <div class="text-left space-y-4 lg:px-20">
            <h1 class="text-4xl font-semibold text-gray-800">Partnerstwo z najlepszymi</h1>
            <p class="text-gray-700 text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada metus tortor, sit amet sollicitudin neque porttitor eu. Vivamus convallis condimentum libero, a consequat ligula egestas ac.
            </p>
            <p class="text-gray-700 text-base leading-relaxed">
                Nullam sit amet dolor ornare, facilisis nisi nec, dignissim nisl. Sed id velit sed lorem porttitor rutrum. Sed venenatis felis nunc. Etiam egestas tortor eleifend, egestas diam vel, maximus mi.
            </p>
            </div>

            <!-- Obrazek -->
            <div class="grid grid-cols-2 gap-4">
            <img src="https://placehold.co/300x500" alt="Opis obrazka" class="w-full h-auto max-w-lg">
            <img src="https://placehold.co/300x500" alt="Opis obrazka" class="w-full h-auto max-w-lg">
            </div>

        </div>
        </section>

        <div class="hidden sm:block mx-4 lg:mx-auto md:mx-10 max-w-6xl mb-48 pb-10 mt-20">
        <h2 class="text-4xl font-semibold text-gray-800 mb-10 text-center ">Nasza historia</h2>
        <div class="relative">
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full top-5 w-0.5 bg-gray-300"></div>
          
          <div v-for="(item, index) in timelineData" :key="index" class="relative -mb-16">
            <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 mt-5   bg-white border-3 border-blue3 rounded-full z-20 shadow-md"></div>
            
            <div class="flex items-start">
              <div class="w-1/2 pr-12">
                <div v-if="index % 2 === 0" class="text-right">
                  <div class="text-3xl lg:text-5xl font-semibold text-gray-800 mb-4">{{ item.year }}</div>
                  <h3 class="text-md lg:text-xl font-medium text-gray-700 mb-4 leading-tight">{{ item.title }}</h3>
                  <div class="flex justify-end gap-3 flex-wrap">
                    <img 
                      v-for="(img, imgIndex) in item.images" 
                      :key="imgIndex"
                      :src="img" 
                      :alt="'Zdjęcie ' + (imgIndex + 1)"
                      class=" object-cover w-[85%] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>
              </div>
              
              <div class="w-1/2 pl-12">
                <div v-if="index % 2 === 1">
                  <div class="text-3xl lg:text-5xl font-semibold text-gray-800 mb-4">{{ item.year }}</div>
                  <h3 class="text-md lg:text-xl font-medium text-gray-700 mb-4 leading-tight">{{ item.title }}</h3>
                  <div class="flex gap-3 flex-wrap">
                    <img 
                      v-for="(img, imgIndex) in item.images" 
                      :key="imgIndex"
                      :src="img" 
                      :alt="'Zdjęcie ' + (imgIndex + 1)"
                      class=" object-cover w-[85%]  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="sm:hidden max-w-sm  mr-4  sm:mx-auto">
        <div class="relative ">
          <div class="absolute left-7.5 top-4 bottom-0 w-0.5 bg-gray-300"></div>
          
          <div v-for="(item, index) in timelineData" :key="index" class="relative mb-8">
            <div class="absolute left-6 w-4 h-4 bg-white border-3 border-blue3 rounded-full mt-3 z-20 shadow-md"></div>
            
            <div class="ml-20">
              <div class="text-3xl font-semibold text-gray-800 mb-3">{{ item.year }}</div>
              <h3 class="text-lg font-medium text-gray-700 mb-4 leading-tight">{{ item.title }}</h3>
              <div class="space-y-3">
                <img 
                  v-for="(img, imgIndex) in item.images" 
                  :key="imgIndex"
                  :src="img" 
                  :alt="'Zdjęcie ' + (imgIndex + 1)"
                  class="w-full h-40 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  
  export default {
    name: 'AboutUs',
    setup() {
      const timelineData = ref([
        {
          year: '2000',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          images: [
            'https://placehold.co/450x300'
          ]
        },
        {
          year: '2000',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          images: [
            'https://placehold.co/450x300'
          ]
        },
        {
          year: '2000',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          images: [
            'https://placehold.co/450x300'
          ]
        },
        {
          year: '2000',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          images: [
            'https://placehold.co/450x300'
          ]
        },
        {
          year: '2000',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          images: [
            'https://placehold.co/450x300'
          ]
        },
        {
          year: '2000',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          images: [
            'https://placehold.co/450x300'
          ]
        },
        {
          year: '2000',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          images: [
            'https://placehold.co/450x300'
          ]
        },
        {
          year: '2000',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          images: [
            'https://placehold.co/450x300'
          ]
        }
      ])
  
      return {
        timelineData
      }
    }
  }
  </script>