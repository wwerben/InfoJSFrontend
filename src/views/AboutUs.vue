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
        <section class="w-full py-5 md:py-10 flex justify-center md:my-10">
        <div class="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-10 items-center">
            
            <!-- Tekst -->
            <div class="text-left space-y-4 lg:px-20">
            <h1 class="text-4xl max-md:text-center font-semibold text-gray-800">O nas</h1>
            <p class="text-gray-700 text-lg leading-relaxed">
              InfoBase Systemy Informatyczne to polska firma programistyczna z ponad 30-letnią tradycją, która od 1994 roku projektuje, rozwija i wdraża autorskie oprogramowanie PULSAR klasy ERP. Nasza pasja do tworzenia rozwiązań IT zaczęła się od kompleksowej obsługi przemysłu włókienniczego, gdzie zdobywaliśmy doświadczenie w automatyzacji procesów produkcyjnych, logistyki i magazynowania.            </p>
           
            </div>

            <!-- Obrazek -->
            <div class="flex justify-center">
            <img src="@/assets/img/firma.jpg" alt="Opis obrazka" class="w-full h-auto max-w-lg">
            </div>

        </div>
        </section>

        <!-- Sekcja 2 (z tłem) -->
        <section class="w-full py-10 md:py-20 bg-gray-100 flex justify-center my-10">
        <div class="w-full max-w-screen-xl grid grid-cols-1  md:grid-cols-2 gap-8 px-4 sm:px-10 items-center">
            
          

            <div class="grid grid-cols-2 grid-rows-2 gap-4">
                <img src="@/assets/img/rfiddwa.png" alt="Opis obrazka" class="w-full h-auto max-w-lg">
                <img src="@/assets/img/rfid.jpg" alt="Opis obrazka" class="w-full h-auto max-w-lg">
                <img src="@/assets/img/pul.jpg" alt="Opis obrazka" class="w-full h-auto max-w-lg">
                <img src="@/assets/img/antenaa.jpg" alt="Opis obrazka" class="w-full h-auto max-w-lg">

            </div>

            <div class="text-left space-y-4 lg:px-20">
            <h1 class="text-3xl md:text-4xl font-semibold text-gray-800">30 lat doświadczenia</h1>
            <p class="text-gray-700 text-lg leading-relaxed">
            Z czasem system PULSAR  ewoluował, aby sprostać jeszcze większym wyzwaniom – dziś wspiera przedsiębiorstwa z sektora meblowego, a także firmy z sektora kosmetycznego czy przemysłowego, którym zależy na precyzyjnym zarządzaniu zasobami i szybkim obiegu informacji.            </p>
          
           
            </div>

        </div>
        </section>

        <section class="w-full md:py-10 flex justify-center py-4 my-10">
        <div class="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-4 px-4 sm:px-10 items-center">
            
            <!-- Tekst -->
            <div class="text-left space-y-4 lg:px-20">
            <h1 class="text-3xl md:text-4xl font-semibold text-gray-800">Indywidualne podejście           
            </h1>
            <p class="text-gray-700 text-lg font-medium leading-relaxed">
              Naszym wyróżnikiem jest pełna konfigurowalność systemu PULSAR – moduły dobierane są i dostosowywane indywidualnie do specyfiki każdego klienta.
                        </p>
            <p class="text-gray-700 text-md  leading-relaxed">

              Nasze wdrożenia to kompleksowy proces realizowany w przejrzystych etapach:
              </p>
              <ul class="font-base text-base xl:text-medium font-medium text-pretty text-gray-700 space-y-5 lg:mt-4 mb-1 tracking-wide list-none">
                <li class="flex items-start gap-3">
                  <div class="flex-shrink-0 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1D4ED8" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                  </div>
                  <span class="flex-1">Szczegółowa analiza procesów przedsiębiorstwa klienta</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="flex-shrink-0 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1D4ED8" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                  </div>
                  <span class="flex-1">Konfiguracja systemu, tworzenie nowych funkcjonalności i migracja danych</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="flex-shrink-0 mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1D4ED8" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                      <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                  </div>
                  <span class="flex-1">Szkolenia użytkowników oraz opieka powdrożeniowa</span>
                </li>
              </ul>


            <p class="text-gray-700 text-md leading-relaxed mt-4 max-md:mb-10">
            Dzięki temu każdy moduł systemu PULSAR od pierwszego dnia działa zgodnie z oczekiwaniami użytkowników, przyspieszając realizację zleceń średnio o 30 % i obniżając koszty operacyjne. -> zamienić na: Dzięki temu każdy moduł systemu PULSAR od pierwszego dnia działa zgodnie z oczekiwaniami użytkowników, przyspieszając realizację zleceń i obniżając koszty operacyjne,            
            </p>
          </div>

            <!-- Obrazek -->
            <div class="flex justify-center">
            <img src="@/assets/img/Pulsarfirst.jpg" alt="Opis obrazka" class="w-full h-auto max-w-lg">
            </div>

        </div>
        </section>

        
        <section class="w-full py-10 flex justify-center my-10 px-2 bg-white ">
        <div class="w-full max-w-screen-xl  sm:px-10 items-center">
            
            <!-- Tekst -->
            <div class="space-y-4 lg:px-20 text-center">
            <h1 class=" text-3xl md:text-4xl font-semibold text-gray-900">Z naszych rozwiązań korzystają znane i cenione marki</h1>      
            <h2  class="text-md font-semibold text-gray-600">Dołącz do grona firm, które dzięki naszym rozwiązaniom zyskały realną przewagę nad konkurencją.</h2>
           
            </div>

               <LogosGrid></LogosGrid>
          
           
        </div>
        </section>

        <section class="w-full  py-10 md:py-20 flex justify-center my-10 bg-gray-100 ">
        <div class="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2  gap-8 px-4 sm:px-10 items-center">
            
            <!-- Tekst -->

            <!-- <div class="grid grid-cols-2 gap-4">
            <img src="@/assets/img/partnerstwo1.jpg" alt="Opis obrazka" class="w-full h-auto max-w-lg">
            <img src="@/assets/img/partnerstwo1.jpg" alt="Opis obrazka" class="w-full h-auto max-w-lg">
            </div> -->

            
            <div class="grid grid-cols-1 gap-4">
            <img src="@/assets/img/SiemensOracle.png" alt="Opis obrazka" class="w-full h-auto max-w-lg">
            </div>

            <div class="text-left space-y-4 lg:px-20 ">
            <h1 class=" text-3xl md:text-4xl font-semibold max-md:text-center text-gray-800">Partnerstwo z najlepszymi</h1>
            <p class="text-gray-700  leading-relaxed text-lg ">
              System został zaprojektowany od podstaw pod relacyjną bazę Oracle Database, co zapewnia mu skalowalność, wydajność i bezpieczeństwo na poziomie światowych standardów.            </p>
            <p class="text-gray-700  leading-relaxed text-lg">
              Jako partner Oracle oraz Siemens łączymy siłę globalnych technologii z szybkością reakcji zespołu ekspertów, gwarantując ciągły rozwój systemu oraz wsparcie 24/7.            </p>
            </div>

    
            

        </div>
        </section>

        

       <Timeline></Timeline>
        
      
    </div>
  </template>

  <script setup>
    import LogosGrid from '@/components/LogosGrid.vue'
    import { ref } from 'vue'
    import Timeline from '@/components/Timeline.vue';



 
    
  
  </script>