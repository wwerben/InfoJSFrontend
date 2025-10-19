<template>
    <div class="w-full ">
      <!-- siatka: 2 kolumny na sm/md, 3 kolumny od lg -->
      <div class="grid grid-cols-1 lg:grid-cols-3 ">
        <div
          v-for="(tile, i) in tiles"
          :key="i"
          class="relative group h-64 overflow-hidden  shadow-lg"
        >
          <!-- tło obrazkowe -->
          <img
            :src="tile.image"
            :alt="tile.title"
            class="object-cover w-full h-full"
          />
  
          <!-- półprzezroczysta nakładka -->
          <div class="absolute inset-0 bg-blue3/50 group-hover:bg-blue3/75 transition duration-400 "></div>
  
          <!-- treść kafelka -->
          <div
            class="absolute inset-0 flex flex-col top-1/3 justify-center items-center text-white p-4"
          > 
            
            <h3 class="text-3xl font-medium">{{ tile.title }}</h3>
            <button
              class="mt-4 px-5 py-2 bg-gray-800/60 hover:bg-blue3 hover:ring-2 ring-gray-100 text-gray-50 rounded opacity-0   group-hover:opacity-100 transition-all duration-500"
            >
              {{ tile.button }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>


  import o9Image from '@/assets/img/o9.webp';
  import o3Image from '@/assets/img/o3.webp';
  import o12Image from '@/assets/img/anl.jpg';
  import o2Image from '@/assets/img/o2.webp';
  import o6Image from '@/assets/img/o6.webp';
  import o7Image from '@/assets/img/o7.webp';

  const tiles = [
    { image: o3Image, title: 'Produkcja', button: 'Czytaj więcej' },
    { image: o9Image, title: 'Logistyka Sprzedaży', button: 'Czytaj więcej' },
    { image: o2Image, title: 'Magazyn RFID', button: 'Czytaj więcej' },
    { image: o12Image, title: 'Informator24', button: 'Czytaj więcej' },
    { image: o7Image, title: 'Logistyka Zaopatrzenia', button: 'Czytaj więcej' },
    { image: o6Image, title: 'EDI', button: 'Czytaj więcej' },
    
  ]
  </script>
  