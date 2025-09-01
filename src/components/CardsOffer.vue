<template>
    <section class="relative w-full flex h-auto min-h-[400px] bg-[url('/src/assets/img/Oferta-magazyn.jpg')] bg-cover bg-center bg-no-repeat">
      <!-- Overlay przyciemniający -->
      <div class="absolute inset-0 bg-blue2/30"></div>
  
      <!-- Kontener na treść - jedna kolumna na mobile -->
      <div class="relative z-10 flex flex-col w-full">
        
        <!-- Sekcja 1: Logistyka -->
        <div 
          class="flex flex-col justify-end p-4 text-white transition-all duration-500 min-h-[200px] cursor-pointer border-b border-white/20"
          @click="toggleActive(1)"
        >
          <div class="transition-transform duration-1000" :class="{ 'transform translate-y-[-10px]': isActive1 }">
            <h2 class="text-xl font-bold transition-all duration-1000 mb-3 flex items-center justify-between">
              Logistyka
              <span class="text-lg transition-transform duration-300" :class="{ 'rotate-180': isActive1 }">↓</span>
            </h2>
            
            <!-- Dynamicznie kontrolowana widoczność -->
            <div 
              class="transition-all duration-700 overflow-hidden"
              :class="{
                'max-h-64 opacity-100': isActive1,
                'max-h-0 opacity-0': !isActive1
              }"
            >
              <p class="text-sm leading-relaxed mb-4">
                System Pulsar usprawnia zarządzanie procesami logistycznymi, zapewniając optymalizację dostaw, redukcję kosztów oraz terminową realizację zamówień. Pozwala na pełną kontrolę nad zaopatrzeniem i sprzedażą – od rejestracji zamówień od klientów, przez tworzenie tras oraz automatyczne generowanie dokumentów sprzedażowych i wysyłkowych.
                Dzięki śledzeniu zamówień na każdym etapie w czasie rzeczywistym, logistyka staje się bardziej efektywna i dostosowana do potrzeb.
              </p>
              <a href="#" class="inline-flex items-center gap-1 hover:underline">
                <span>Dowiedz się więcej</span>
                <span class="font-bold">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
  
        <!-- Sekcja 2: Magazyn -->
        <div 
          class="flex flex-col justify-end p-4 text-white transition-all duration-500 min-h-[200px] cursor-pointer border-b border-white/20"
          @click="toggleActive(2)"
        >
          <div class="transition-transform duration-1000" :class="{ 'transform translate-y-[-10px]': isActive2 }">
            <h2 class="text-xl font-bold transition-all duration-1000 mb-3 flex items-center justify-between">
              Magazyn
              <span class="text-lg transition-transform duration-300" :class="{ 'rotate-180': isActive2 }">↓</span>
            </h2>
            
            <div 
              class="transition-all duration-700 overflow-hidden"
              :class="{
                'max-h-64 opacity-100': isActive2,
                'max-h-0 opacity-0': !isActive2
              }"
            >
              <p class="text-sm leading-relaxed mb-4">
                Efektywne zarządzanie magazynem to klucz do sprawnej organizacji firmy. Pulsar umożliwia bieżącą kontrolę stanów magazynowych, śledzenie paczek magazynowych oraz optymalizację rozmieszczenia towarów. Wykorzystanie technologii RFID oraz automatyzacja procesów przyjęć, wydań i inwentaryzacji pozwala na minimalizację strat i zwiększenie wydajności operacyjnej.
              </p>
              <a href="#" class="inline-flex items-center gap-1 hover:underline">
                <span>Dowiedz się więcej</span>
                <span class="font-bold">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
  
        <!-- Sekcja 3: Produkcja -->
        <div 
          class="flex flex-col justify-end p-4 text-white transition-all duration-500 min-h-[200px] cursor-pointer border-b border-white/20"
          @click="toggleActive(3)"
        >
          <div class="transition-transform duration-1000" :class="{ 'transform translate-y-[-10px]': isActive3 }">
            <h2 class="text-xl font-bold transition-all duration-1000 mb-3 flex items-center justify-between">
              Produkcja
              <span class="text-lg transition-transform duration-300" :class="{ 'rotate-180': isActive3 }">↓</span>
            </h2>
            
            <div 
              class="transition-all duration-700 overflow-hidden"
              :class="{
                'max-h-64 opacity-100': isActive3,
                'max-h-0 opacity-0': !isActive3
              }"
            >
              <p class="text-sm leading-relaxed mb-4">
                Planowanie i realizacja produkcji to fundament sprawnego funkcjonowania przedsiębiorstwa. System Pulsar wspiera zarządzanie procesami produkcyjnymi, umożliwiając tworzenie planów produkcyjnych, monitorowanie etapów realizacji oraz optymalizację zużycia surowców. System PULSAR pozwala na zwiększenie efektywności i redukcję błędów.
              </p>
              <a href="#" class="inline-flex items-center gap-1 hover:underline">
                <span>Dowiedz się więcej</span>
                <span class="font-bold">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
  
        <!-- Sekcja 4: Integracja -->
        <div 
          class="flex flex-col justify-end p-4 text-white transition-all duration-500 min-h-[200px] cursor-pointer"
          @click="toggleActive(4)"
        >
          <div class="transition-transform duration-1000" :class="{ 'transform translate-y-[-10px]': isActive4 }">
            <h2 class="text-xl font-bold transition-all duration-1000 mb-3 flex items-center justify-between">
              Integracja
              <span class="text-lg transition-transform duration-300" :class="{ 'rotate-180': isActive4 }">↓</span>
            </h2>
            
            <div 
              class="transition-all duration-700 overflow-hidden"
              :class="{
                'max-h-64 opacity-100': isActive4,
                'max-h-0 opacity-0': !isActive4
              }"
            >
              <p class="text-sm leading-relaxed mb-4">
                Spójna wymiana danych pomiędzy systemami to podstawa efektywnego zarządzania przedsiębiorstwem. Pulsar zapewnia pełną integrację z innymi systemami eliminując błędy wynikające z ręcznego wprowadzania danych. Automatyczna synchronizacja informacji gwarantuje aktualność i spójność procesów, co pozwala na lepszą kontrolę i optymalizację działania firmy.
              </p>
              <a href="#" class="inline-flex items-center gap-1 hover:underline">
                <span>Dowiedz się więcej</span>
                <span class="font-bold">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'MobileOfferSection',
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
        switch(number) {
          case 1: {
            this.isActive1 = !this.isActive1;
            this.isActive2 = false;
            this.isActive3 = false;
            this.isActive4 = false;
            break;
          }
          case 2: {
            this.isActive2 = !this.isActive2;
            this.isActive1 = false;
            this.isActive3 = false;
            this.isActive4 = false;
            break;
          }
          case 3: {
            this.isActive3 = !this.isActive3;
            this.isActive1 = false;
            this.isActive2 = false;
            this.isActive4 = false;
            break;
          }
          case 4: {
            this.isActive4 = !this.isActive4;
            this.isActive1 = false;
            this.isActive2 = false;
            this.isActive3 = false;
            break;
          }
        }
      }
    }
  };
  </script>