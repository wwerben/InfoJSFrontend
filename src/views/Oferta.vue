<template>
 <section id="film"> 

   
<div class="relative max-h-screen md:m-0">
  
  <div class="absolute inset-0 bg-blue2 opacity-75 z-10"></div>

  
  <video autoplay muted playsinline loop class="w-full xl:h-screen md:h-110 sm:h-110 h-111 object-cover object-center overflow-hidden z-0">
    <source src="@/assets/img/film.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
  </video>

  <div  class="absolute inset-0 z-10 ">


    <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center motion-translate-x-in-[0%] motion-translate-y-in-[-50%] motion-delay-[500ms] motion-delay-[0ms]/translate">
      <img id="logo2" src="@/assets/img/SystemPulsar.svg" alt="Logo 2" class="m-32 w-auto md:max-h-56 caru max-h-30  animate-fade animate-duration-[1600ms]">
    </div>

  </div>
</div>

</section>




<section class="flex flex-col md:flex-row items-center max-md:py-15 justify-center px-3 py-8 lg:py-12 xl:px-10 gap-8 max-w-7xl mx-auto">
    <!-- Tekst - lewa połowa -->
    <div class="w-full md:w-1/2 space-y-4 lg:space-y-6 text-center md:text-left px-2">
        <!-- Reserve height to prevent layout shift during typewriter -->
        <div class="relative">
          <h1 class="text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900 invisible pointer-events-none select-none" aria-hidden="true">System PULSAR</h1>
          <h1 v-typewriter="{ speed: 55, threshold: 1 }" class="absolute top-0 left-0 right-0 text-4xl sm:text-4xl lg:text-5xl font-bold text-gray-900">System PULSAR</h1>
        </div>
        <h2 class="text-md md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
            PULSAR to kompleksowy system informatyczny wspierający wszystkie obszary działalności firmy. 
            Dzięki modułowej budowie pozwala na efektywne zarządzanie logistyką, 
            produkcją i magazynem, zapewniając pełną automatyzację procesów i integrację danych.
        </h2>
       
    </div>
    
    <!-- Obraz - prawa połowa -->
    <div class="w-full md:w-1/2 flex justify-center">
        <img src="@/assets/img/Pulsarfirst.jpg" alt="System PULSAR Interface" 
             class="w-full max-w-[600px] h-auto object-cover "/>
    </div>
</section>

<section class="lg:hidden">
  <CardsOffer></CardsOffer>

</section>




<section
  class="relative w-full hidden  lg:flex  h-[600px] bg-[url('/src/assets/img/Oferta-magazyn.jpg')] bg-cover bg-center bg-no-repeat"
>
  <!-- Overlay przyciemniający (opcjonalny) -->
  <div class="absolute inset-0 bg-blue2/30 "></div>

  <!-- Kontener na treść (grid) -->
  <div class="relative z-10 grid grid-cols-4 md:grid-cols-4 h-full">
    <!-- Kolumna 1: Logistyka -->
    <div class="flex flex-col hover:backdrop-blur-xs group justify-end  p-6 text-white transition-all duration-500">
  <div class=" xl:group-hover:translate-y-[-40%] duration-1000">
    <h2 class="text-2xl font-bold  transition-all duration-1000">Logistyka</h2>
  
  <div class="max-h-0 overflow-hidden opacity-0 transition-all duration-1000 group-hover:max-h-96 group-hover:opacity-100">
    <p class="text-sm leading-relaxed">
      System Pulsar usprawnia zarządzanie procesami logistycznymi, zapewniając optymalizację dostaw, redukcję kosztów oraz terminową realizację zamówień. Pozwala na pełną kontrolę nad zaopatrzeniem i sprzedażą – od rejestracji zamówień od klientów, przez tworzenie tras oraz automatyczne generowanie dokumentów sprzedażowych i wysyłkowych. System Pulsar pozwala również na planowanie zaopatrzenia, zarządzanie łańcuchami dostaw oraz monitorowanie stanów minimalnych. Dzięki śledzeniu zamówień na każdym etapie w czasie rzeczywistym, logistyka staje się bardziej efektywna i dostosowana do potrzeb.
    </p>
   
  </div>
  <a href="#logistyka" class="mt-2    inline-flex items-center gap-1 hover:underline">
      <span>Dowiedz się więcej</span>
      <span class="font-bold">&rarr;</span>
    </a>
  </div>

</div>
    <!-- Kolumna 2: Magazyn -->
    <div class="flex flex-col hover:backdrop-blur-xs group justify-end  p-6 text-white transition-all duration-500">
  <div class=" xl:group-hover:translate-y-[-40%] duration-1000">
    <h2 class="text-2xl font-bold  transition-all duration-1000">Magazyn</h2>
  
  <div class="max-h-0 overflow-hidden opacity-0 transition-all duration-700 group-hover:max-h-96 group-hover:opacity-100">
    <p class="text-sm leading-relaxed">
      Efektywne zarządzanie magazynem to klucz do sprawnej organizacji firmy. Pulsar umożliwia bieżącą kontrolę stanów magazynowych, śledzenie paczek magazynowych oraz optymalizację rozmieszczenia towarów. Wykorzystanie technologii RFID oraz automatyzacja procesów przyjęć, wydań i inwentaryzacji pozwala na minimalizację błędów i pomyłek oraz na zwiększenie wydajności operacyjnej. </p>
  </div>
  <a href="#magazyn" class="mt-2    inline-flex items-center gap-1 hover:underline">
      <span>Dowiedz się więcej</span>
      <span class="font-bold">&rarr;</span>
    </a>
  </div>
 
</div>

    <!-- Kolumna 3: Produkcja -->
    <div class="flex flex-col hover:backdrop-blur-xs group justify-end  p-6 text-white transition-all duration-500">
  <div class=" xl:group-hover:translate-y-[-40%] duration-1000">
    <h2 class="text-2xl font-bold  transition-all duration-1000">Produkcja</h2>
  
  <div class="max-h-0 overflow-hidden opacity-0 transition-all duration-700 group-hover:max-h-96 group-hover:opacity-100">
    <p class="text-sm leading-relaxed">
      Planowanie i realizacja produkcji to fundament sprawnego funkcjonowania przedsiębiorstwa. System Pulsar wspiera zarządzanie procesami produkcyjnymi, umożliwiając tworzenie planów produkcyjnych, monitorowanie etapów realizacji oraz optymalizację zużycia surowców. System PULSAR pozwala na zwiększenie efektywności i redukcję błędów.     </p>
   
  </div>
  <a href="#produkcja" class="mt-2    inline-flex items-center gap-1 hover:underline">
      <span>Dowiedz się więcej</span>
      <span class="font-bold">&rarr;</span>
    </a>
  </div>
 
</div>



    <!-- Kolumna 4: Integracja -->
    <div class="flex flex-col hover:backdrop-blur-xs group justify-end  p-6 text-white transition-all duration-500">
  <div class=" xl:group-hover:translate-y-[-10%] duration-1000">
    <h2 class="text-2xl font-bold  transition-all duration-1000">Integracja</h2>
  
  <div class="max-h-0 overflow-hidden opacity-0 transition-all duration-700 group-hover:max-h-96 group-hover:opacity-100">
    <p class="text-sm leading-relaxed">
      Automatyczna wymiana danych pomiędzy systemami to podstawa efektywnego zarządzania przedsiębiorstwem. Pulsar zapewnia pełną integrację z innymi systemami eliminując błędy wynikające z ręcznego wprowadzania danych. Automatyczna synchronizacja informacji gwarantuje aktualność i spójność procesów, co pozwala na lepszą kontrolę i optymalizację działania firmy.
<br></br><br></br>Pulsar RFID
<br></br>RFID to rewolucyjne rozwiązanie w logistyce, które w połączeniu z systemem PULSAR usprawnia zarządzanie magazynem i produkcją. Umożliwia automatyczne skanowanie bez kontaktu, eliminując błędy i przyspieszając operacje. Rozwiązanie to redukuje koszty, optymalizuje procesy i zwiększa precyzję zarządzania zapasami. System PULSAR RFID podnosi efektywność i automatyzację kluczowych procesów logistycznych.    
</p>
  </div>
  <a href="#integracja" class="mt-2    inline-flex items-center gap-1 hover:underline">
      <span>Dowiedz się więcej</span>
      <span class="font-bold">&rarr;</span>
    </a>
  </div>
  
</div>
  </div>
</section>
<section class="flex justify-center items-center py-20  max-md:py-10  px-5 md:px-10 xl:px-10 lg:py-12 bg-blue3">
  <div class="max-w-7xl w-full flex flex-col md:flex-row my-12 gap-6 xl:gap-10 items-center justify-between">
    <!-- Text content block -->
    <div class="w-full md:w-1/2 flex justify-center flex-col space-y-2 lg:space-y-4 text-center md:text-left">
      <!-- Reserve height to prevent layout shift during typewriter -->
      <div class="relative">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl pb-3 font-bold text-gray-100 invisible pointer-events-none select-none" aria-hidden="true">Pulsar RFID</h1>
        <h1 v-typewriter="{ speed: 55, threshold: 1 }" class="absolute top-0 left-0 right-0 text-3xl sm:text-4xl lg:text-5xl pb-3 font-bold text-gray-100">Pulsar RFID</h1>
      </div>
      <h2 class="text-md md:text-lg lg:text-xl text-gray-100 leading-relaxed lg:pr-6">
        RFID to rewolucyjne rozwiązanie w logistyce, które w połączeniu z systemem PULSAR usprawnia zarządzanie magazynem i produkcją. Umożliwia automatyczne skanowanie bez kontaktu, eliminując błędy i przyspieszając operacje. Rozwiązanie to redukuje koszty, optymalizuje procesy i zwiększa precyzję zarządzania zapasami. System PULSAR RFID podnosi efektywność i automatyzację kluczowych procesów logistycznych.
      </h2>
     
       <div class="md:flex justify-center  lg:justify-start my-5   md:m-0">
        <router-link 
        to="/rfid" 
        class="px-4 py-3 mt-6 bg-gray-200 text-blue2 font-bold text-center rounded-lg hover:bg-blue1 hover:text-white w-full md:max-w-3/5 transition-all duration-300" 
        role="button"
        >
        Więcj o technologii PULSAR RFID
        </router-link>
       </div>
    </div>
    
    <!-- Video block -->
    <div class="w-full md:w-1/2 flex justify-center">
      <div class="w-full grid grid-cols-1 justify-center">
        <h2 class="text-xs text-center sm:text-md lg:text-xl mb-2 text-gray-100 font-semibold">
          Działanie systemu PULSAR RFID w firmie Dolmar Meble
        </h2>
        <iframe class="w-full aspect-video" :src="youtubeUrl" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</section>

<section id="monitor" class="flex justify-center flex-col items-center py- relative bg-[url('/src/assets/img/warehouse.jpg')] bg-cover bg-fixed bg-center py-20">
  <div class="container  xl:px-34 p-2">
    <div class="relative max-w-6xl mx-auto flex flex-col items-center">
      <div class="md:border-[15px] md:border-b-[30px] border-4 border-gray-900 rounded-md w-full overflow-hidden">
        <div class="relative w-full pt-[57.25%]">
          <div class="absolute inset-0">
            <ImageCarousel 
              :images="slides" 
              ref="carousel"
              class="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div class="mt-4 h-[200px] absolute bottom-0 bg-gray-900 w-32"></div>
    </div>
  </div>
</section>



  <!-- Modules Section -->
  <section id="modules" class="bg-gray-100 py-8">
      <div class="container mx-auto px-4">
           <OfferGrid></OfferGrid>
         
       </div>
   </section>

  <!-- Benefits Section -->
  <section class="container mx-auto px-4 py-8 pb-12">
       <h2 class="text-3xl font-bold text-center text-gray-800 mt-12 mb-12">Korzyści z wdrożenia systemu PULSAR</h2>
       
      <div class="grid grid-cols-1 md:grid-cols-2 mb-12 gap-12 px-16">
           <div class="flex items-start">
               <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
               </div>
               <div>
                   <h3 class="text-xl font-semibold text-gray-800 mb-1">Optymalizacja procesów</h3>
                   <p class="text-gray-700 ">Automatyzacja i usprawnienie procesów biznesowych, redukcja kosztów operacyjnych.</p>
               </div>
           </div>
           
           <div class="flex items-start">
               <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                   </svg>
               </div>
               <div>
                   <h3 class="text-xl font-semibold text-gray-800 mb-2">Wzrost wydajności</h3>
                   <p class="text-gray-700">Zwiększenie efektywności pracowników i optymalne wykorzystanie zasobów produkcyjnych.</p>
               </div>
           </div>
           
           <div class="flex items-start">
               <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
               </div>
               <div>
                   <h3 class="text-xl font-semibold text-gray-800 mb-2">Jakość i niezawodność</h3>
                   <p class="text-gray-700">Redukcja błędów, poprawa jakości produktów i procesów, większa niezawodność działania.</p>
               </div>
           </div>
           
           <div class="flex items-start">
               <div class="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 mr-4">
               
                   <svg xmlns="http://www.w3.org/2000/svg"  class="h-6 w-6" fill="currentColor" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6.025 7.5a5 5 0 1 1 0 1H4A1.5 1.5 0 0 1 2.5 10h-1A1.5 1.5 0 0 1 0 8.5v-1A1.5 1.5 0 0 1 1.5 6h1A1.5 1.5 0 0 1 4 7.5zM11 5a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 11 5M1.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
</svg>
               </div>
               <div>
                   <h3 class="text-xl font-semibold text-gray-800 mb-2">Skalowalność i elastyczność</h3>
                   <p class="text-gray-700">System dostosowuje się do rosnących potrzeb firmy, umożliwiając łatwą rozbudowę i integrację z nowymi technologiami.</p>
               </div>
           </div>
       </div>
   </section>

   <!-- CTA Section -->
  <section class="bg-blue3 text-white py-12 md:py-24">
      <div class="container mx-auto px-8 text-center">
           <h2 class="md:text-5xl text-4xl font-bold mb-6">Zainteresowany wdrożeniem systemu PULSAR?</h2>
           <p class="text-xl mb-8 md:mb-16 max-w-3xl mx-auto">Skontaktuj się z nami, aby omówić indywidualne rozwiązanie dla Twojej firmy.</p>
           <div class="flex flex-col sm:flex-row justify-center  gap-4">
             <div class="bg-gray-100 px-3 md:px-8 py-3  rounded-lg hover:animate-pulse">
                <a href="/kontakt" class=" text-blue3 text-xl  hover:animate-pulse font-semibold py-3 px-3 rounded-lg transition duration-300">
                   Kontakt
               </a>
             </div>
              
           </div>
       </div>

   </section>







</template>
<script setup>
import { ref } from "vue";

import ImageCarousel from '@/components/ImageCarousel.vue'
import Cenniki from '@/assets/img/pulsarss/Cenniki.jpg'
import KartyPracy from '@/assets/img/pulsarss/KartyPracy.jpg'
import PlanowanieZaopatrzenia from '@/assets/img/pulsarss/PlanowanieZaopatrzenia.jpg'
import ProdukcjaKooperacja from '@/assets/img/pulsarss/ProdukcjaKooperacja.jpg'
import RejestrFaktur from '@/assets/img/pulsarss/RejestrFaktur.jpg'
import Slownik from '@/assets/img/pulsarss/Slownik.jpg'
import StanyMagazynowe from '@/assets/img/pulsarss/StanyMagazynowe.jpg'
import Trasy from '@/assets/img/pulsarss/Trasy.jpg'
import WizualizacjaMagazyn from '@/assets/img/pulsarss/WizualizacjaMagazyn.jpg'
import Wysylka from '@/assets/img/pulsarss/Wysylka.jpg'
import OfferGrid from '@/components/OfferGrid.vue'
import CardsOffer from "@/components/CardsOffer.vue";

const slides = ref([
  { src: Cenniki, caption: 'Cenniki' },
  { src: KartyPracy, caption: 'Karty Pracy' },
  { src: PlanowanieZaopatrzenia, caption: 'Planowanie Zaopatrzenia' },
  { src: ProdukcjaKooperacja, caption: 'Produkcja Kooperacja' },
  { src: RejestrFaktur, caption: 'Rejestr Faktur' },
  { src: Slownik, caption: 'Słowniki' },
  { src: StanyMagazynowe, caption: 'Stany Magazynowe' },
  { src: Trasy, caption: 'Trasy' },
  { src: WizualizacjaMagazyn, caption: 'Wizualizacja Magazynu' },
  { src: Wysylka, caption: 'Wysyłka' }
])

const youtubeUrl = ref("https://www.youtube.com/embed/OutFYTNpC6Y"); // Wklej ID filmu
</script>
<script>



export default {
  data() {
    return {
      isActive1: false,
      isActive2: false,
      isActive3: false,
      isActive4: false
    };
  },
  methods: {
    toggleActive(number) {
        switch(number){
            case 1:
                {
                    this.isActive1 = !this.isActive1
                    this.isActive2 = false
                    this.isActive3 = false
                    this.isActive4 = false
                    break;
                }
            case 2:
                {
                    this.isActive2 = !this.isActive2
                    this.isActive1 = false;
                    this.isActive3 = false
                    this.isActive4 = false
                    break;
                }
            case 3:
                {
                    this.isActive3 = !this.isActive3
                    this.isActive2 = false
                    this.isActive2 = false
                    this.isActive4 = false
                    break;
                }
            case 4:
                {
                    this.isActive4 = !this.isActive4
                    this.isActive1 = false
                    this.isActive2 = false
                    this.isActive3 = false
                    break;
                }
        }
            return(this.isActive1, this.isActive2, this.isActive3, this.isActive4)
    }
  }
};

</script>
<style>

</style>
