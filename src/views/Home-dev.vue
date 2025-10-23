<template>
  <main class="w-full min-h-screen overflow-x-hidden bg-white font-poppins">
    <!-- Video section -->
    <section id="film">
      <div class="relative h-[85vh] max-h-screen">
        <video loading="lazy" autoplay muted playsinline loop class="w-full h-full object-cover object-center overflow-hidden z-0">
          <!-- Place video file in assets folder -->
          <source src="@/assets/img/film.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div class="absolute inset-0 bg-blue2/75 z-10"></div>
        <div id="carousel" class="absolute inset-0 z-20 flex items-center justify-center">
          <Counter />
        </div>
      </div>

      <!-- Logo slider in a unified container -->
      <div class="bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <LogoSlider />
        </div>
      </div>
    </section>

    <!-- About section -->
    <section class="w-full bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-16">
          <!-- Image -->
          <div class="w-full max-w-xl mx-auto md:mx-0">
            <img loading="lazy" src="@/assets/img/Photoabout.png" alt="O nas zdjęcie" class="object-cover w-full h-auto" />
          </div>
          <!-- Text -->
          <div class="w-full max-w-xl mx-auto md:mx-0">
            <!-- Reserve height to prevent layout shift during typewriter -->
            <div class="relative">
              <h1 class="invisible pointer-events-none select-none max-md:mb-4 font-bold text-5xl xl:text-6xl text-center md:text-left font-poppins text-gray-800" aria-hidden="true">
                Nowoczesne rozwiązania IT dla przemysłu
              </h1>
              <h1 v-typewriter="{ speed: 25, threshold: 0.7 }" class="absolute top-0 left-0 right-0 max-md:mb-4 font-bold text-5xl xl:text-6xl text-center md:text-left font-poppins text-gray-800">
                Nowoczesne rozwiązania IT dla przemysłu
              </h1>
            </div>
            <h2 class="font-medium text-base xl:text-xl text-center md:text-left text-gray-600 mt-1 lg:mt-8 mb-3 tracking-wide">
              Od ponad <span class="font-extrabold text-lg lg:text-2xl text-blue3">30 lat</span> koncentrujemy się na projektowaniu nowoczesnych systemów informatycznych dedykowanych dla firm produkcyjnych. Nasze rozwiązania powstają z myślą o usprawnieniu oraz automatyzacji i optymalizacji procesów we wszystkich obszarach przedsiębiorstwa, poprawie wydajności oraz wspieraniu dynamicznego rozwoju biznesu naszych klientów.
            </h2>
            <div class="mt-6 flex justify-center md:justify-start">
              <a href="/oferta" class="bg-blue3 text-center text-white text-lg font-semibold py-3 px-6 rounded-sm shadow-md hover:bg-blue2 transition">
                Dowiedz się więcej
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PULSAR system -->
    <section class="w-full bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-16">
          <!-- Text -->
          <div class="w-full max-w-xl mx-auto md:mx-0">
            <!-- Reserve height to prevent layout shift during typewriter -->
            <div class="relative">
              <h1 class="invisible pointer-events-none select-none font-bold text-2xl xl:text-4xl text-center md:text-left  text-gray-800" aria-hidden="true">
                System Informatyczny PULSAR
              </h1>
              <h1 v-typewriter="{ speed: 70, threshold: 0.7 }" class="absolute top-0 left-0 right-0 font-bold text-2xl xl:text-4xl text-center md:text-left  text-gray-800">
                System Informatyczny PULSAR
              </h1>
            </div>
            <h2 class="font-medium text-base xl:text-lg text-center  text-balance md:text-left text-gray-600 mt-2 lg:mt-4 mb-3 tracking-wide">
              Poznaj system <span class="font-bold text-lg lg:text-xl text-blue3">PULSAR</span> – zintegrowany system informatyczny, który obejmuje wszystkie kluczowe obszary przedsiębiorstwa: sprzedaż, produkcję, zaopatrzenie i magazyn. Dzięki automatyzacji procesów z wykorzystaniem technologii RFID oraz wymianie danych EDI, system Pulsar przyspiesza pracę i optymalizuję procesy, eliminuje błędy i podnosi efektywność Twojej firmy.
            </h2>
            <div class="mt-6 flex justify-center md:justify-start">
              <a href="/oferta" class="bg-blue3 text-center text-white text-lg font-semibold py-3 px-6 rounded-sm shadow-md hover:bg-blue2 transition">
                Dowiedz się więcej
              </a>
            </div>
          </div>
          <!-- Image -->
          <div class="w-full max-w-2xl mx-auto md:mx-0">
            <img src="@/assets/img/PulsarLogoSystem.jpg" alt="O nas zdjęcie" class="object-cover w-full h-auto">
          </div>
        </div>
      </div>
    </section>

    <!-- Furniture industry section -->
    <section class="w-full bg-gradient-to-bl from-blue3 to-blue-900 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 xl:gap-20">
          <!-- Image -->
          <div class="w-full max-w-xl mx-auto md:mx-0 rounded-sm overflow-hidden">
            <img src="@/assets/img/magazynfoto.jpg" alt="O nas zdjęcie" class="object-cover w-full h-auto">
          </div>
          <!-- Text -->
          <div class="w-full max-w-2xl mx-auto md:mx-0">
            <!-- Reserve height to prevent layout shift during typewriter -->
            <div class="relative">
              <h1 class="invisible pointer-events-none select-none font-bold text-3xl  xl:text-5xl/14 text-center md:text-left text-gray-100" aria-hidden="true">
                System Pulsar w branży meblowej
              </h1>
              <h1 v-typewriter="{ speed: 40, threshold: 0.7 }" class="absolute top-0 left-0 right-0 font-bold text-3xl  xl:text-5xl/14 text-center md:text-left text-gray-100">
                System Pulsar w branży meblowej
              </h1>
            </div>
            <h2 class="font-base text-base xl:text-medium text-pretty text-center md:text-left text-gray-100 mt-3 lg:mt-4 mb-1 tracking-wide">
              Zarządzanie produkcją, logistyką, sprzedażą i kontrolą jakości, wspierając realizację indywidualnych zamówień oraz efektywne wykorzystanie zasobów.
            </h2>

            <ul class="font-base text-base xl:text-medium text-pretty text-gray-100 space-y-5 lg:mt-4 mb-1 tracking-wide list-none">
              <li class="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
                <span>Pełna konfiguracja pod potrzeby zakładu</span>
              </li>
              <li class="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
                <span>Produkcja mebli skrzyniowych i tapicerowanych</span>
              </li>
              <li class="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
                <span>Automatyzacja produkcji i logistyki</span>
              </li>
              <li class="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                </svg>
                <span>Zastosowanie technologii RFID w obszarach  <br> produkcji i magazynowania</span>
              </li>
            </ul>

            <!-- CTA -->
            <div class="mt-6 flex justify-center md:justify-start">
              <a href="/oferta" class="bg-gray-100 text-center text-blue3 w-full text-lg hover:ring-2 ring-gray-100 font-semibold py-4 px-6 rounded-sm shadow-md hover:bg-blue-900 hover:text-gray-100 duration-300 transition">
                Więcej o systemie Pulsar dla branży meblarskiej
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partnership section -->
    <section class="w-full bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-16">
          <!-- Text -->
          <div class="w-full max-w-2xl mx-auto md:mx-0">
            <!-- Reserve height to prevent layout shift during typewriter -->
            <div class="relative">
              <h1 class="invisible pointer-events-none select-none font-bold text-4xl max-md:mb-3 xl:text-5xl text-center md:text-left text-gray-800" aria-hidden="true">
                Partnerstwo z Technologicznymi Liderami
              </h1>
              <h1 v-typewriter="{ speed: 40, threshold: 0.7 }" class="absolute top-0 left-0 right-0 font-bold text-4xl max-md:mb-3 xl:text-5xl text-center md:text-left text-gray-800">
                Partnerstwo z Technologicznymi Liderami
              </h1>
            </div>
            <div class="font-medium text-base text-balance xl:text-medium text-center md:text-left text-gray-600 tracking-wide mt-4 md:mt-3 lg:mt-4 mb-1 ">
              <h1 class="text-xl text-gray-800 font-semibold">Siemens Technology Partner</h1>
              <h2>Jako druga firma w Polsce z tytułem Siemens Technology Partner w zakresie RFID rozwijamy system PULSAR, który dzięki zaawansowanej automatyce i identyfikacji danych precyzyjnie steruje procesami produkcyjnymi i magazynowymi. Współpraca z ekspertami Siemens pozwala nam wprowadzać innowacje, zwiększające wydajność i minimalizujące przestoje.</h2>
              <h1 class="text-xl mt-5 text-gray-800 font-semibold">Oracle Partner</h1>
              <h2>Posiadanie statusu Oracle Partner zapewnia nam dostęp do najnowszych technologii i umacnia pozycję w tworzeniu zaawansowanych systemów informatycznych opartych o relacyjny serwer bazy danych Oracle.</h2>
            </div>
          </div>
          <!-- Image -->
          <div class="w-full max-w-xl mx-auto md:mx-0">
            <img src="@/assets/img/SiemensOracle.png" alt="O nas zdjęcie" class="object-cover w-full h-auto">
          </div>
        </div>
      </div>
    </section>

    <!-- KSeF banner -->
    <section class="w-full">
      <div class="relative">
        <img src="@/assets/img/ksef.jpg" alt="Przygotuj firme na ksef" class="w-full h-[70vh] object-cover" />
        <div class="absolute inset-0 flex flex-col items-center text-gray-100 justify-center  text-center p-3 z-10">
          <p class="font-semibold text-4xl md:text-7xl mb-2 md:mb-4">Przygotuj firmę na KSeF</p>
          <p class="font-medium text-xl md:text-3xl">Zyskaj przewagę nad konkurencją</p>
        </div>
      </div>
    </section>

    <!-- Posts -->
    <section class="w-full bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <PostMain />
      </div>
    </section>

    <!-- Cards -->
    <section class="w-full bg-white">
      <div class="w-full min-h-[30vh]  ">
        <Card />
      </div>
    </section>
  </main>
</template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import LogoSlider from '../components/LogoSlider.vue';
  import Counter from '../components/Counter.vue';
  import Card from '../components/CardsSix.vue';
  import PostMain from '../components/PostMain.vue';




  onMounted(() => {
   
  
    // Obsługa video
    const video = document.querySelector('video')
    if (video) {
      video.loop = true
      video.play()
      document.body.addEventListener('click', () => {
        video.play()
      })
    }
  
    
  })
  

  </script>

  
  <style>
  @keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade {
    animation: fade 1.6s ease-in-out;
  }
  </style>
  