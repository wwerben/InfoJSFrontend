<template>
      <main class="w-full min-h-screen overflow-x-hidden bg-white font-poppins">
        <!-- Sekcja filmowa -->
        <section id="film">
          <div class="relative max-h-screen md:m-0 xl:h-screen h-[70vh]">
           
            <video loading="lazy" autoplay muted playsinline loop class="w-full h-full object-cover object-center overflow-hidden z-0">
              <!-- Umieść film w folderze assets -->
              <source src="@/assets/img/film.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            <div class="absolute inset-0 bg-blue2/75 z-10 xl:h-screen object-cover "></div>
            <div class="arrowdown">
              <img id="Zdjecie" src="@/assets/img/down.png" alt="arrow down" class="flex h-10 w-auto" />
            </div>
            <div id="carousel" class="absolute inset-0 z-10">
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <img id="logo2" src="@/assets/img/LogoSys_B.svg" alt="Logo 2" class="w-1/3   caru  animate-fade animate-duration-[1600ms]" />
              </div>
              <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <img id="logo1" src="@/assets/img/PulsarB.svg" alt="Logo 1" class="w-1/3  caru  hidden animate-fade animate-duration-[1600ms]" />
              </div>
            </div>
          </div>
        </section>
  
        <!-- Sekcja Klientów -->
        <section id="OurCustomers" class="flex flex-col h-12 md:h-32 justify-center pt-7 md:pt-10 md:pb-5 w-full bg-white">
          <div class=" w-full md:mb-5 xl:max-w-7xl md:px-10 sm:px-20 px-5 md:mx-auto">
            <div class="relative ">
              <!-- Slide Set 1 -->
              <div id="slideSet1" class="flex justify-between animate-fade items-center transition-opacity duration-1000 w-full ">
                <a href="https://benix.pl" target="_blank" class="hover:opacity-80 transition-opacity duration-300">
                  <img src="@/assets/img/benix.jpg" alt="Client 1" class="h-6  md:h-14" />
                </a>
                
                <a href="https://dolmar.pl/" target="_blank" class="hover:opacity-80 transition-opacity duration-300">
                  <img src="@/assets/img/Dolmarmeble.png" alt="Client 3" class="h-8 md:h-16" />
                </a>
                <a href="https://mirjan24.pl" target="_blank" class="hover:opacity-80 transition-opacity duration-300">
                  <img src="@/assets/img/mirjan.png" alt="Client 2" class="h-8  md:h-16" />
                </a>
              </div>
              <!-- Slide Set 2 -->
              <div id="slideSet2" class="flex justify-between animate-fade items-center transition-opacity duration-1000 w-full  hidden">
                <a href="https://wersal.pl/" target="_blank" class="hover:opacity-80 transition-opacity duration-300">
                  <img src="@/assets/img/wersal.jpg" alt="Client 4" class="h-8 md:h-16 md:mb-2" />
                </a>
                <a href="#" target="_blank" class="hover:opacity-80 transition-opacity duration-300">
                  <img src="@/assets/img/kolo.png" alt="Client 6" class="h-11 md:h-18" />
                </a>
                <a href="https://piaski.com.pl/" target="_blank" class="hover:opacity-80 transition-opacity duration-300">
                  <img src="@/assets/img/piaski.jpg" alt="Client 5" class="h-6 md:h-12 md:mt-3" />
                </a>
                
              </div>
              <!-- Slide Set 3 -->
              <div id="slideSet3" class="flex justify-between animate-fade items-center transition-opacity duration-1000 w-full  hidden">
                
                <a href="https://www.agnella.pl/" target="_blank" class="hover:opacity-80 transition-opacity duration-300">
                  <img src="@/assets/img/agnella.png" alt="Client 9" class="h-8 md:h-14" />
                </a>
                <a href="https://polakmeble.pl/" target="_blank" class="hover:opacity-80 transition-opacity duration-300">
                  <img src="@/assets/img/polak.jpg" alt="Client 7" class="h-10 md:h-18" />
                </a>
               
               
                <a href="https://victoriameble.pl/" target="_blank" class="hover:opacity-80 transition-opacity duration-300">
                  <img src="@/assets/img/victoria.png" alt="Client 8" class="h-8 md:h-16" />
                </a>
              </div>
            </div>
          </div>
        </section>
  
  
        <section class="flex font-poppins justify-center w-full bg-white">
          <div class="justify-center mx-3 lg:mx-16 gap-8 md:gap-16 lg:gap-32 xl:gap-48 grid grid-cols-1 md:grid-cols-2 my-8">
            <!-- Obrazek -->
            <div class="flex items-center justify-self-end max-w-xl  overflow-hidden h-auto">
              <img loading="lazy" src="@/assets/img/Photoabout.png" alt="O nas zdjęcie" class="object-cover w-full h-[90%]" />
            </div>
            <!-- Tekst -->
           <div class="flex justify-center">
            <div class="max-w-lg lg:max-w-xl flex flex-col justify-center h-full">
              <h1  v-typewriter="{ speed: 25, threshold: 0.7 }" class="font-bold text-5xl xl:text-6xl text-center md:text-left font-poppins text-gray-800">
                Nowoczesne rozwiązania IT dla przemysłu
              </h1>
              <h2 class="font-medium text-base xl:text-xl text-center md:text-left text-gray-600 mt-1 lg:mt-8 mb-3 tracking-wide">
                Od ponad <span class="font-extrabold text-lg lg:text-2xl text-blue3">30 lat</span> koncentrujemy się na projektowaniu nowoczesnych systemów informatycznych dedykowanych dla firm produkcyjnych. Nasze rozwiązania powstają z myślą o usprawnieniu oraz automatyzacji i optymalizacji procesów we wszystkich obszarach przedsiębiorstwa, poprawie wydajności oraz wspieraniu dynamicznego rozwoju biznesu naszych klientów.
              </h2>
              <div class="mt-6 flex justify-center md:justify-start">
                <a href="#" class="bg-blue3 text-center text-white text-lg font-semibold py-3 px-6 rounded-sm shadow-md hover:bg-blue2 transition">
                  Dowiedz się więcej
                </a>
              </div>
            </div>
           </div>
          </div>
        </section>
  
        <!-- Sekcja Aktualności -->
       
        <section>
        <div class="flex mb-24 font-poppins justify-center md:my-5 mt-6 w-full bg-gray-100">
          <div class="justify-center mx-3 lg:mx-16 gap-8 md:gap-12 lg:gap-20 xl:gap-40 grid grid-cols-1 md:grid-cols-2 my-8 md:flex md:flex-row-reverse">
            
            <!-- Kontener obrazu - PRIORYTET WYSOKOŚCI + WYŚRODKOWANIE -->
            <div class="flex items-center justify-center md:justify-end max-w-2xl overflow-hidden h-auto">
              <img src="@/assets/img/PulsarLogoSystem.jpg" alt="O nas zdjęcie" class="object-cover w-full h-auto">
            </div>

            <!-- Kontener tekstu - DOPASOWUJE SIĘ DO OBRAZU -->
            <div class=" justify-center md:justify-start py-10 md:max-w-sm lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl  flex pl-0 2xl:pl-20 flex-col  h-full">
              <h1 v-typewriter="{ speed: 70, threshold: 0.7 }" class="font-bold text-4xl xl:text-5xl text-center md:text-left  text-gray-800">
                System PULSAR
              </h1>
              <h2 class="font-medium text-base xl:text-lg text-center md:text-left text-gray-600 mt-2 lg:mt-4 mb-3 tracking-wide">
                <span class="font-bold text-lg lg:text-xl text-blue3">Pulsar</span> to nowoczesny, zintegrowany system IT wspierający wszystkie procesy firmy, który systematycznie się rozwija, odpowiadając na potrzeby klientów i zmieniające się warunki rynkowe. Jego rozwój skupia się na automatyzacji procesów oraz elektronicznej wymianie danych, a wdrożenie technologii RFID wprowadza nowe standardy w produkcji i logistyce magazynowej.
              </h2>
              
              <!-- Poprawiona sekcja przycisku -->
              <div class="mt-6 flex justify-center md:justify-start">
                <a href="#" class="bg-blue3 text-center text-white text-lg font-semibold py-3 px-6 rounded-sm shadow-md hover:bg-blue2 transition">
                  Dowiedz się więcej
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
  <div class="flex font-poppins justify-center md:my-5 mt-2 w-full bg-white">
    <div class="justify-center mx-3 lg:mx-16 gap-8 md:gap-16 lg:gap-32 xl:gap-48 grid grid-cols-1 md:grid-cols-2 my-8">
      
      <!-- Kontener obrazu - PRIORYTET WYSOKOŚCI + WYŚRODKOWANIE -->
      <div class="flex items-center justify-self-center  max-w-xl overflow-hidden h-auto">
        <img src="@/assets/img/SiemensOracle.png" alt="O nas zdjęcie" class="object-cover w-full h-auto">
      </div>

      <!-- Kontener tekstu - DOPASOWUJE SIĘ DO OBRAZU -->
      <div class="max-w-lg lg:max-w-xl flex flex-col justify-center h-full">
        <h1 v-typewriter="{ speed: 40, threshold: 0.7 }" class="font-bold text-4xl  xl:text-5xl text-center md:text-left text-gray-800">
        Partnerstwo z Technologicznymi Liderami
        </h1>
        <h2 class="font-medium text-base xl:text-lg text-center md:text-left text-gray-600 mt-3 lg:mt-4 mb-1 tracking-wide">
        Jesteśmy dumni z partnerstwa z Siemens w obszarze technologii <span class="font-semibold text-lg lg:text-2xl text-gray-900">RFID</span>, co potwierdza kierunek rozwoju naszego systemu PULSAR. Jako druga firma w Polsce z tym statusem, rozwijamy nowoczesne rozwiązania oparte na automatyzacji i identyfikacji danych.
          <br></br>
        Status Silver Partner Oracle umacnia naszą pozycję w zakresie zaawansowanych systemów zarządzania danymi. Współpraca z globalnymi liderami motywuje nas do dalszych innowacji i podnoszenia jakości naszych usług. 
        </h2>
        
        <!-- Poprawiona sekcja przycisku -->
        <div class="mt-6 flex justify-center md:justify-start">
          <a href="#" class="bg-blue3 text-center text-white text-lg font-semibold py-3 px-6 rounded-sm shadow-md hover:bg-blue2 transition">
            Dowiedz się więcej
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
<section id="box4" class="w-full ">
        
        <div class=" bg-blue1">
    
          <div class=" transition-all duration-1000 w-full flex flex-row flex-wrap lg:flex-row ">
  
            <div class="lg:w-1/4 w-1/2 relative group ">
              <img src="@/assets/img/o2.webp" alt="random-image" class="object-cover w-full h-full">
              <p class="text-center absolute inset-0 flex items-center text-shadow-xl justify-center font-poppins lg:text-3xl md:text-2xl text-xl z-10 text-white whitespace-pre-line select-none">E-commerce</p>
              <div class="absolute inset-0 bg-blue3 bg-opacity-80 flex items-center justify-center opacity-50"></div>
              <div class="absolute inset-0 bg-blue2 bg-opacity-80 flex items-center z-8 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div class="absolute inset-0 bg-transparent md:flex items-center z-20 justify-center opacity-0 hidden group-hover:opacity-70 transition-opacity duration-300">
                  <button type="button" class="absolute animate-fade-up animate-duration-[1500ms] z-30 animate-delay-[300ms] text-gray-900 self-end lg:mb-3 md:mb-6 mb-2 z-11 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2.5 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 bg-opacity-30 dark:hover:border-gray-600 dark:focus:ring-gray-700"><a href="#">Czytaj więcej</a></button>
              </div>
          </div>
      
            <div class=" lg:w-1/4 w-1/2 relative group">
              <img src="@/assets/img/o1.webp" alt="random-image" class="object-cover w-full h-full">
              <p class="text-center absolute inset-0 flex items-center text-shadow-xl justify-center font-poppins lg:text-3xl md:text-2xl text-xl z-10 text-white whitespace-pre-line select-none">WMS RFID</p>
              <div class="absolute inset-0 bg-blue3 bg-opacity-80 flex items-center justify-center opacity-50"></div>
              <div class="absolute inset-0 bg-blue2 bg-opacity-80 flex items-center z-8 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              </div>
              <div class="absolute inset-0 bg-transparent md:flex hidden items-center z-20 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
               <button type="button" class="absolute animate-fade-up animate-duration-[1500ms] z-30 animate-delay-[300ms] text-gray-900 self-end md:mb-6 mb-2 z-11 bg-white border border-gray-300 focus:outline-none
             hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2.5 mr-2  dark:bg-gray-800
             dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 bg-opacity-30 dark:hover:border-gray-600 dark:focus:ring-gray-700"><a href="#">Czytaj więcej</a></button> 
              </div>
            </div> 
  
            
            <div class=" lg:w-1/4 w-1/2 relative group">
              <img src="@/assets/img/o3.webp" alt="random-image" class="object-cover w-full h-full">
              <p class="text-center absolute inset-0 flex items-center text-shadow-xl justify-center font-poppins lg:text-3xl md:text-2xl text-xl z-10 text-white whitespace-pre-line select-none">Produkcja</p>
              <div class="absolute inset-0 bg-blue3 bg-opacity-80 flex items-center justify-center opacity-50"></div>
              <div class="absolute inset-0 bg-blue2 bg-opacity-80 flex items-center z-8 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              </div>
              <div class="absolute inset-0 bg-transparent md:flex hidden items-center z-20 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
               <button type="button" class="absolute animate-fade-up animate-duration-[1500ms] z-30 animate-delay-[300ms] text-gray-900 self-end md:mb-6 mb-2 z-11 bg-white border border-gray-300 focus:outline-none
            hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2.5 mr-2  dark:bg-gray-800
             dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 bg-opacity-30 dark:hover:border-gray-600 dark:focus:ring-gray-700"><a href="#">Czytaj więcej</a></button> 
              </div>
            </div> 
  
            
            <div class=" lg:w-1/4 w-1/2 relative group">
              <img src="@/assets/img/o4.webp" alt="random-image" class="object-cover w-full h-full">
              <p class="text-center absolute inset-0 flex items-center text-shadow-xl justify-center font-poppins lg:text-3xl md:text-2xl text-xl z-10 text-white whitespace-pre-line select-none">Transport</p>
              <div class="absolute inset-0 bg-blue3 bg-opacity-80 flex items-center justify-center opacity-50"></div>
              <div class="absolute inset-0 bg-blue2 bg-opacity-80 flex items-center z-8 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              </div>
              <div class="absolute inset-0 bg-transparent md:flex hidden items-center z-20 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
               <button type="button" class="absolute animate-fade-up animate-duration-[1500ms] z-30 animate-delay-[300ms] text-gray-900 self-end md:mb-6 mb-2 z-11 bg-white border border-gray-300 focus:outline-none
            hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2.5 mr-2  dark:bg-gray-800
             dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 bg-opacity-30 dark:hover:border-gray-600 dark:focus:ring-gray-700"><a href="#">Czytaj więcej</a></button> 
              </div>
            </div> 
  
            
            <div class=" lg:w-1/4 w-1/2 relative group">
              <img src="@/assets/img/o5.webp" alt="random-image" class="object-cover w-full h-full">
              <p class="text-center absolute inset-0 flex items-center text-shadow-xl justify-center font-poppins lg:text-3xl md:text-2xl text-xl z-10 text-white whitespace-pre-line select-none">EDI</p>
              <div class="absolute inset-0 bg-blue3 bg-opacity-80 flex items-center justify-center opacity-50"></div>
              <div class="absolute inset-0 bg-blue2 bg-opacity-80 flex items-center z-8 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              </div>
              <div class="absolute inset-0 bg-transparent md:flex hidden items-center z-20 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
               <button type="button" class="absolute animate-fade-up animate-duration-[1500ms] z-30 animate-delay-[300ms] text-gray-900 self-end md:mb-6 mb-2 z-11 bg-white border border-gray-300 focus:outline-none
            hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2.5 mr-2  dark:bg-gray-800
             dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 bg-opacity-30 dark:hover:border-gray-600 dark:focus:ring-gray-700"><a href="#">Czytaj więcej</a></button> 
              </div>
            </div> 
            
            
            <div class=" lg:w-1/4 w-1/2 relative group">
              <img src="@/assets/img/o6.webp" alt="random-image" class="object-cover w-full h-full">
              <p class="text-center absolute inset-0 flex items-center text-shadow-xl justify-center font-poppins lg:text-3xl md:text-2xl text-xl z-10 text-white whitespace-pre-line select-none">PTP</p>
              <div class="absolute inset-0 bg-blue3 bg-opacity-80 flex items-center justify-center opacity-50"></div>
              <div class="absolute inset-0 bg-blue2 bg-opacity-80 flex items-center z-8 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              </div>
              <div class="absolute inset-0 bg-transparent md:flex hidden items-center z-20 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
               <button type="button" class="absolute animate-fade-up animate-duration-[1500ms] z-30 animate-delay-[300ms] text-gray-900 self-end md:mb-6 mb-2 z-11 bg-white border border-gray-300 focus:outline-none
            hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2.5 mr-2  dark:bg-gray-800
             dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 bg-opacity-30 dark:hover:border-gray-600 dark:focus:ring-gray-700"><a href="#">Czytaj więcej</a></button> 
              </div>
            </div>
            
            
            <div class=" lg:w-1/4 w-1/2 relative group">
              <img src="@/assets/img/o7.webp" alt="random-image" class="object-cover w-full h-full">
              <p class="text-center absolute inset-0 flex items-center text-shadow-xl justify-center font-poppins lg:text-3xl md:text-2xl text-xl z-10 text-white whitespace-pre-line select-none">Magazyn</p>
              <div class="absolute inset-0 bg-blue3 bg-opacity-80 flex items-center justify-center opacity-50"></div>
              <div class="absolute inset-0 bg-blue2 bg-opacity-80 flex items-center z-8 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              </div>
              <div class="absolute inset-0 bg-transparent md:flex hidden items-center z-20 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
               <button type="button" class="absolute animate-fade-up animate-duration-[1500ms] z-30 animate-delay-[300ms] text-gray-900 self-end md:mb-6 mb-2 z-11 bg-white border border-gray-300 focus:outline-none
            hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2.5 mr-2  dark:bg-gray-800
             dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 bg-opacity-30 dark:hover:border-gray-600 dark:focus:ring-gray-700"><a href="#">Czytaj więcej</a></button> 
              </div>
            </div> 
  
            
            <div class=" lg:w-1/4 w-1/2 relative group">
              <img src="@/assets/img/o8.webp" alt="random-image" class="object-cover w-full h-full">
              <p class="text-center absolute inset-0 flex items-center text-shadow-xl justify-center font-poppins lg:text-3xl md:text-2xl text-xl z-10 text-white whitespace-pre-line select-none">API</p>
              <div class="absolute inset-0 bg-blue3 bg-opacity-80 flex items-center justify-center opacity-50"></div>
              <div class="absolute inset-0 bg-blue2 bg-opacity-80 flex items-center z-8 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              </div>
              <div class="absolute inset-0 bg-transparent md:flex hidden items-center z-20 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
               <button type="button" class="absolute animate-fade-up animate-duration-[1500ms] z-30 animate-delay-[300ms] text-gray-900 self-end md:mb-6 mb-2 z-11 bg-white border border-gray-300 focus:outline-none
            hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2.5 mr-2  dark:bg-gray-800
             dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 bg-opacity-30 dark:hover:border-gray-600 dark:focus:ring-gray-700"><a href="#">Czytaj więcej</a></button> 
              </div>
            </div> 
            
            <div class=" lg:w-1/4 w-1/2 relative group">
              <img src="@/assets/img/o9.webp" alt="random-image" class="object-cover w-full h-full">
              <p class="text-center absolute inset-0 flex items-center text-shadow-xl justify-center font-poppins lg:text-3xl md:text-2xl text-xl z-10 text-white whitespace-pre-line select-none">Logistyka 
                Sprzedaży</p>
              <div class="absolute inset-0 bg-blue3 bg-opacity-80 flex items-center justify-center opacity-50"></div>
              <div class="absolute inset-0 bg-blue2 bg-opacity-80 flex items-center z-8 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              </div>
              <div class="absolute inset-0 bg-transparent md:flex hidden items-center z-20 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
               <button type="button" class="absolute animate-fade-up animate-duration-[1500ms] z-30 animate-delay-[300ms] text-gray-900 self-end md:mb-6 mb-2 z-11 bg-white border border-gray-300 focus:outline-none
            hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2.5 mr-2  dark:bg-gray-800
             dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 bg-opacity-30 dark:hover:border-gray-600 dark:focus:ring-gray-700"><a href="#">Czytaj więcej</a></button> 
              </div>
            </div> 
            
            
            <div class=" lg:w-1/4 w-1/2 relative group">
              <img src="@/assets/img/o10.webp" alt="random-image" class="object-cover w-full h-full">
              <p class="text-center absolute inset-0 flex items-center text-shadow-xl justify-center font-poppins lg:text-3xl md:text-2xl text-xl z-10 text-white whitespace-pre-line select-none">Edytor etykiet</p>
              <div class="absolute inset-0 bg-blue3 bg-opacity-80 flex items-center justify-center opacity-50"></div>
              <div class="absolute inset-0 bg-blue2 bg-opacity-80 flex items-center z-8 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              </div>
              <div class="absolute inset-0 bg-transparent md:flex hidden items-center z-20 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
               <button type="button" class="absolute animate-fade-up animate-duration-[1500ms] z-30 animate-delay-[300ms] text-gray-900 self-end md:mb-6 mb-2 z-11 bg-white border border-gray-300 focus:outline-none
            hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2.5 mr-2  dark:bg-gray-800
             dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 bg-opacity-30 dark:hover:border-gray-600 dark:focus:ring-gray-700"><a href="#">Czytaj więcej</a></button> 
              </div>
            </div>
            
          
            <div class=" lg:w-1/4 w-1/2 relative group">
              <img src="@/assets/img/o11.webp" alt="random-image" class="object-cover w-full h-full">
              <p class="text-center absolute inset-0 flex items-center text-shadow-xl justify-center font-poppins lg:text-3xl md:text-2xl text-xl z-10 text-white whitespace-pre-line select-none">Informator24</p>
              <div class="absolute inset-0 bg-blue3 bg-opacity-80 flex items-center justify-center opacity-50"></div>
              <div class="absolute inset-0 bg-blue2 bg-opacity-80 flex items-center z-8 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              </div>
              <div class="absolute inset-0 bg-transparent md:flex hidden items-center z-20 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
               <button type="button" class="absolute animate-fade-up animate-duration-[1500ms] z-30 animate-delay-[300ms] text-gray-900 self-end md:mb-6 mb-2 z-11 bg-white border border-gray-300 focus:outline-none
            hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2.5 mr-2  dark:bg-gray-800
             dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 bg-opacity-30 dark:hover:border-gray-600 dark:focus:ring-gray-700"><a href="#">Czytaj więcej</a></button> 
              </div>
            </div> 
  
            <div class=" lg:w-1/4 w-1/2 relative group">
              <img src="@/assets/img/o12.webp" alt="random-image" class="object-cover w-full h-full">
              <p class="text-center absolute inset-0 flex items-center text-shadow-xl justify-center font-poppins lg:text-3xl md:text-2xl text-xl z-10 text-white whitespace-pre-line select-none">Logistyka 
                Zaopatrzenia</p>
              <div class="absolute inset-0 bg-blue3 bg-opacity-80 flex items-center justify-center opacity-50"></div>
              <div class="absolute inset-0 bg-blue2 bg-opacity-80 flex items-center z-8 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              </div>
              <div class="absolute inset-0 bg-transparent md:flex hidden items-center z-20 justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-300">
               <button type="button" class="absolute animate-fade-up animate-duration-[1500ms] z-30 animate-delay-[300ms] text-gray-900 self-end md:mb-6 mb-2 z-11 bg-white border border-gray-300 focus:outline-none
            hover:bg-gray-100 focus:ring-gray-200 font-medium rounded-lg text-xs px-5 py-2.5 mr-2  dark:bg-gray-800
             dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 bg-opacity-30 dark:hover:border-gray-600 dark:focus:ring-gray-700"><a href="#">Czytaj więcej</a></button> 
              </div>
            </div> 
           
          </div>
          
          
      </div>
      </section>  
   

       
  
      </main>
  
      <!-- Stopka -->
      
   
  
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  

  
  // Reaktywna zmienna dla postów
 
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
  
    // Slider dla sekcji klientów
    const slideSets = [
      document.getElementById('slideSet1'),
      document.getElementById('slideSet2'),
      document.getElementById('slideSet3')
    ]
    let currentSlide = 0
    const showSlide = (index) => {
      slideSets.forEach((set, i) => {
        if (i === index) {
          set.classList.remove('hidden')
        } else {
          set.classList.add('hidden')
        }
      })
    }
    showSlide(0)
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slideSets.length
      showSlide(currentSlide)
    }, 8000)
  
    // Intersection Observer do animacji elementów
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-jump-in', 'animate-duration-[1000ms]')
        }
      })
    })
    const elements = document.querySelectorAll('.observe-me')
    elements.forEach(el => observer.observe(el))
  
    // Karuzela logo
    const carousel = document.getElementById('carousel')
    if (carousel) {
      const logos = Array.from(carousel.getElementsByClassName('caru'))
      let currentLogoIndex = 1
      setInterval(() => {
        logos[currentLogoIndex].classList.add('hidden')
        currentLogoIndex = (currentLogoIndex + 1) % logos.length
        logos[currentLogoIndex].classList.remove('hidden')
      }, 4000)
    }
  })
  </script>
  
  <style>
  /* Możesz dodać style specyficzne dla tego komponentu lub importować globalne style Tailwind */
  @keyframes fade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fade {
    animation: fade 1.6s ease-in-out;
  }
  </style>
  