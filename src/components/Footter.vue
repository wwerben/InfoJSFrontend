<template>
<footer class="bg-blue2 text-white py-12 scrollbar-hide overflow-x-hidden">
  <div class="container mx-auto px-6">
    <div class="grid md:grid-cols-5 grid-cols-2 gap-8 place-content-center justify-items-center">
      <!-- Logo -->
      <div class="md:col-span-1 col-span-2 text-center lg:text-left justify-center items-center">
        <img src="@/assets/img/Logo_B.png" alt="Pulsar RFID Logo" class="max-h-20 w-auto mb-4">
        <p class="text-gray-400">
          Innowacyjne rozwiązania dla Przemysłu.
        </p>
      </div>

      <!-- Usługi -->
      <div class="md:col-span-1 col-span-2 text-center lg:text-left justify-center items-center">
        <h4 class="text-lg font-semibold text-center lg:text-left mb-4">Firma</h4>
        <ul class="space-y-2 text-gray-400 text-center lg:text-left justify-center items-center">
          <li><a href="#" class="hover:text-white transition duration-300 text-center lg:text-left justify-center items-center  ">Lorem Ipsum</a></li>
          <li><a href="#" class="hover:text-white transition duration-300 text-center lg:text-left justify-center items-center">Lorem Ipsum</a></li>
          <li><a href="#" class="hover:text-white transition duration-300 text-center lg:text-left justify-center items-center">Lorem Ipsum</a></li>
        </ul>
      </div>

      <!-- Firma -->
    

      <!-- Kontakt -->
      <div class="md:col-span-1 col-span-2 text-center lg:text-left justify-center items-center">
        <h4 class="text-lg font-semibold text-center lg:text-left mb-4">Kontakt</h4>
        <ul class="space-y-2 text-gray-400 text-center lg:text-left justify-center items-center">
          <li class="flex items-center justify-center lg:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +48 632 788 888
          </li>
          <li class="flex items-center justify-center lg:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            ibsi@infobase.com.pl
          </li>
          <li class="flex items-center justify-center lg:justify-start">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            ul. Kolska Szosa 30 <br></br> 62-700 Turek
          </li>
        </ul>
      </div>

      <!-- Partner -->
      <div class="md:col-span-2 col-span-2 justify-center items-center grid grid-cols-2 gap-4">
        <div class="p-5 pt-0 md:col-span-1 col-span-1">
        <img v-lazy="imageSrc" src="@/assets/img/TreflGdansk_Log.png" alt="Partner Logo" class="max-h-34 w-auto">
        <p class="text-center text-sm mt-2 text-gray-400">Oficjalny partner</p>
        <p class="text-center text-sm  font-medium text-gray-100">Energa Trefl Gdańsk</p>
      </div>
      <div class="p-5 pt-0 md:col-span-1 col-span-1">
        <img v-lazy="imageSrc" src="@/assets/img/barkom.png" alt="Partner Logo" class="max-h-32 w-auto">
        <p class="text-center text-sm mt-2 text-gray-400">Oficjalny partner</p>
        <p class="text-center text-sm  font-medium text-gray-100">Barkom Każany Lwów</p>
      </div>
      </div>
    </div>

    <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
      <p>&copy; {{ new Date().getFullYear() }} InfoBase</p>
      <p class="text-xs">Wszelkie prawa zastrzeżone.</p>
    </div>
  </div>
</footer>
</template>
<script>
    

</script>