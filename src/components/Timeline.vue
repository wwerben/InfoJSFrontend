<template>
  <div class="hidden sm:block mx-4 lg:mx-auto md:mx-10 max-w-6xl  pb-24 mt-20">
        <h2 class="text-4xl font-semibold text-gray-800 mb-10 text-center ">Nasza historia</h2>
        <div class="relative">
          <div class="absolute left-1/2 transform -translate-x-1/2 h-full top-5 w-0.5 bg-gray-300"></div>
          
          <div v-for="(item, index) in timelineData" :key="index" class="relative mb-16"> 
            <!-- -mb-16 -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 mt-5   bg-white border-3 border-blue3 rounded-full z-20 shadow-md"></div>
            
            <div class="flex items-start">
              <div class="w-1/2 pr-12">
                <div v-if="index % 2 === 0" class="text-right">
                  <div class="text-3xl lg:text-5xl font-semibold text-gray-800 mb-4">{{ item.year }}</div>
                  <h3 class="text-md lg:text-2xl font-medium text-gray-700 mb-4 leading-tight">{{ item.title }}</h3>
                  <div class="flex justify-end gap-3 flex-wrap">
                    <!-- <img 
                      v-for="(img, imgIndex) in item.images" 
                      :key="imgIndex"
                      :src="img" 
                      :alt="'Zdjęcie ' + (imgIndex + 1)"
                      class=" object-cover w-[85%] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    /> -->
                  </div>
                </div>
              </div>
              
              <div class="w-1/2 pl-12">
                <div v-if="index % 2 === 1">
                  <div class="text-3xl lg:text-5xl font-semibold text-gray-800 mb-4">{{ item.year }}</div>
                  <h3 class="text-md lg:text-xl font-medium text-gray-700 mb-4 leading-tight">{{ item.title }}</h3>
                  <div class="flex gap-3 flex-wrap">
                    <!-- <img 
                      v-for="(img, imgIndex) in item.images" 
                      :key="imgIndex"
                      :src="img" 
                      :alt="'Zdjęcie ' + (imgIndex + 1)"
                      class=" object-cover w-[85%]  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    /> -->
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
              <h3 class="text-md lg:text-2xl font-medium text-gray-700 mb-4 leading-tight">{{ item.title }}</h3>
              <div class="space-y-3">
                <!-- <img 
                  v-for="(img, imgIndex) in item.images" 
                  :key="imgIndex"
                  :src="img" 
                  :alt="'Zdjęcie ' + (imgIndex + 1)"
                  class="w-full h-40 object-cover rounded-lg shadow-lg"
                /> -->
              </div>
            </div>
          </div>
        </div>
      </div>
</template>
<script setup>
    const timelineData = [
        {
          year: '1994',
          title: 'Rozpoczęcie działaności',
          images: [
            'https://placehold.co/450x300'
          ]
        },
        {
          year: '1995',
          title: 'Partnerstwo z Oracle',
          images: [
            'https://placehold.co/450x300'
          ]
        },
        {
          year: '1996',
          title: 'Pulsar w branzy włókienniczej',
          images: [
            'https://placehold.co/450x300'
          ]
        },
        {
          year: '2008',
          title: 'Pulsar dla branży meblarskiej ',
          images: [
            'https://placehold.co/450x300'
          ]
        },
        {
          year: '2015',
          title: 'Pierwsze uruchomienie magazynu RFID',
          images: [
            'https://placehold.co/450x300'
          ]
        },
        {
          year: '2018',
          title: 'Parterstwo z Siemens',
          images: [
            'https://placehold.co/450x300'
          ]
        },
        {
          year: '2019',
          title: 'Przeniesienie się do nowej siedziby',
          images: [
            'https://placehold.co/450x300'
          ]
        },
      ]
      
</script>
