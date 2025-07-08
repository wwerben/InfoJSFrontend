<template>
  <section id="modules" class="bg-gray-100 py-8">
    <div class="container mx-auto max-md:px-2 px-4">
      <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Moduły systemu PULSAR</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="module in modules" 
          :key="module.id"
          :class="[
            'ofertacard bg-white rounded-lg shadow-lg p-6 cursor-pointer',
            expandedModule === module.id ? 'expanded col-span-full md:col-span-2 lg:row-span-2 lg:col-span-2' : '',
            expandedModule !== module.id && previousExpanded === module.id ? 'collapsing-card' : ''
          ]"
          @click="toggleModule(module.id)"
        >
          <div class="card-content" :class="{ 'expanded-content': expandedModule === module.id }">
            <h3 class="text-xl font-semibold text-blue-700 mb-3">{{ module.title }}</h3>
            
            <div v-if="expandedModule !== module.id">
              <p class="text-gray-700">{{ module.shortDescription }}</p>

            
            </div>
            
            <div v-else class="space-y-4 content-fade-in ">
              <p class="text-gray-700">{{ module.shortDescription }}</p>
              
              <div class="scrollable-content">
                <div v-if="module.keyPoints && module.keyPoints.length > 0" class="border-t pt-4 pb-4">
                
                  <ul class="space-y-2">
                    <li 
                      v-for="(point, index) in module.keyPoints" 
                      :key="index"
                      class="flex items-start staggered-item"
                      :style="{ animationDelay: `${0.3 + index * 0.1}s` }"
                    >
                      <div class="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <span class="text-gray-700 text-base leading-relaxed">{{ point }}</span>
                    </li>
                  </ul>
                </div>
                
                <div class="border-t pt-4">
                  <p class="text-gray-700 text-base leading-relaxed">{{ module.fullDescription }}</p>
                </div>
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>




<script setup>
import { ref, watch } from 'vue'

const expandedModule = ref(null)
const previousExpanded = ref(null)

// Śledzenie poprzednio rozwiniętego modułu dla animacji zamykania
watch(expandedModule, (newVal, oldVal) => {
  if (oldVal !== null && newVal !== oldVal) {
    previousExpanded.value = oldVal
    // Resetuj po czasie trwania animacji
    setTimeout(() => {
      previousExpanded.value = null
    }, 400)
  }
})
const modules = [
  {
    id: 1,
    title: 'PULSAR LOGISTYKA ZAOPATRZENIA',
    shortDescription: 'Zarządzanie relacjami z dostawcami i procesami zaopatrzeniowymi.',
    fullDescription: 'Moduł koncentruje się na zarządzaniu relacjami z dostawcami. Umożliwia klasyfikację dostawców i poddostawców, definiowanie warunków płatności oraz terminów dostaw. Kreator szablonów zamówień pozwala na automatyczne generowanie i wysyłanie dokumentów, a system rejestracji przyjęć towarów i kontroli jakości umożliwia bieżące monitorowanie i optymalizację procesów zaopatrzeniowych.',
    keyPoints: [
      'Automatyczne generowanie i wysyłanie zamówień',
      'Kontrola jakości i rejestracja przyjęć towarów',
      'Klasyfikacja dostawców i zarządzanie terminami'
    ]
  },
  {
    id: 2,
    title: 'PULSAR LOGISTYKA SPRZEDAŻY (PLS)',
    shortDescription: 'Kompleksowa obsługa zamówień klientów i procesów sprzedażowych.',
    fullDescription: 'Moduł odpowiada za pełną obsługę zamówień klientów – od ich rejestracji, poprzez zatwierdzanie i bilansowanie, aż po generowanie dyspozycji magazynowych, produkcyjnych oraz zakupowych. Integracja funkcji fakturowania umożliwia automatyczną numerację dokumentów, wystawianie różnych rodzajów faktur oraz obsługę rabatów, co przyspiesza proces sprzedaży i minimalizuje błędy.',
    keyPoints: [
      'Pełna obsługa zamówień od rejestracji do realizacji',
      'Automatyczne fakturowanie i obsługa rabatów',
      'Generowanie dyspozycji magazynowych i produkcyjnych'
    ]
  },
  {
    id: 3,
    title: 'PULSAR INFORMATOR24',
    shortDescription: 'Narzędzie raportowe z dostępem do aktualnych danych operacyjnych.',
    fullDescription: 'To narzędzie raportowe zapewnia szybki dostęp do aktualnych danych operacyjnych, takich jak sprzedaż, produkcja czy stany magazynowe. Dane prezentowane są w formie zarówno tabelarycznej, jak i graficznej, co ułatwia analizę i podejmowanie decyzji. Możliwość konfigurowania zestawień oraz raportów umożliwia dostosowanie informacji do potrzeb poszczególnych działów i kierownictwa firmy.',
    keyPoints: [
      'Dostęp do danych w czasie rzeczywistym',
      'Prezentacja tabelaryczna i graficzna',
      'Konfigurowalne raporty dla różnych działów'
    ]
  },
  {
    id: 4,
    title: 'PULSAR E-COMMERCE B2B',
    shortDescription: 'Integracja systemu sprzedaży z platformą internetową.',
    fullDescription: 'Moduł integruje system sprzedaży z platformą internetową, umożliwiając prezentację oferty firmy, zamieszczanie opisów, zdjęć oraz grafik produktów. Klienci mogą rejestrować zamówienia online, które są automatycznie przekazywane do systemu sprzedażowego. Dodatkowo, moduł umożliwia monitorowanie statusu zamówień oraz komunikację statusową (np. za pomocą e-mail lub SMS), co poprawia wygodę i transparentność procesu zakupowego.',
    keyPoints: [
      'Automatyczne przekazywanie zamówień online',
      'Monitorowanie statusu i komunikacja z klientami',
      'Prezentacja produktów z opisami i zdjęciami'
    ]
  },
  {
    id: 5,
    title: 'PULSAR MAGAZYN ZAOPATRZENIE',
    shortDescription: 'Zarządzanie gospodarką magazynową i ewidencją ruchów towarowych.',
    fullDescription: 'Ten moduł wspiera zarządzanie gospodarką magazynową przez tworzenie elastycznych struktur lokalizacyjnych, definiowanie podmagazynów oraz precyzyjną ewidencję ruchów towarowych. Obsługa dokumentów magazynowych, system inwentaryzacji oraz wartościowanie stanów magazynowych pozwalają na kontrolę przepływu towarów i efektywne zarządzanie zasobami.',
    keyPoints: [
      'Elastyczne struktury lokalizacyjne',
      'Precyzyjna ewidencja ruchów towarowych',
      'System inwentaryzacji i wartościowanie'
    ]
  },
  {
    id: 6,
    title: 'PULSAR PLANOWANIE PRODUKCJI',
    shortDescription: 'Kompleksowe zarządzanie procesem produkcyjnym.',
    fullDescription: 'Moduł umożliwia kompleksowe zarządzanie procesem produkcyjnym – od planowania i wystawiania zleceń produkcyjnych, przez rejestrację operacji na maszynach, aż po monitorowanie przebiegu partii produkcyjnych. Wsparcie technologii takich jak kody kreskowe i etykiety z czytnikami pozwala na automatyzację i precyzyjne śledzenie produkcji, co przyczynia się do optymalizacji procesów oraz poprawy efektywności.',
    keyPoints: [
      'Planowanie i wystawianie zleceń produkcyjnych',
      'Wsparcie kodów kreskowych i automatyzacja',
      'Monitorowanie partii produkcyjnych'
    ]
  },
  {
    id: 7,
    title: 'PULSAR PRODUKCJA - TAPICERNIA',
    shortDescription: 'Specjalistyczne rozwiązania dla procesów produkcyjnych w tapicerni.',
    fullDescription: 'Dedykowany moduł wspierający specyficzne procesy produkcyjne w tapicerni. Umożliwia zarządzanie materiałami tapicerskimi, planowanie operacji tapicerskich, kontrolę jakości oraz śledzenie postępów produkcji. System dostosowany do specyfiki branży tapicerskiej z uwzględnieniem charakterystycznych procesów i materiałów.',
    keyPoints: [
      'Zarządzanie materiałami tapicerskimi',
      'Planowanie operacji tapicerskich',
      'Kontrola jakości produkcji'
    ]
  },
  {
    id: 8,
    title: 'PULSAR PLANOWANIE ZAOPATRZENIA',
    shortDescription: 'Optymalizacja procesów planowania zakupów i zarządzania zapasami.',
    fullDescription: 'Moduł do optymalizacji procesów planowania zakupów oraz efektywnego zarządzania zapasami w całym łańcuchu dostaw.',
    keyPoints: [
      'Optymalizacja procesów planowania zakupów',
      'Zarządzanie zapasami'
    ]
  },
  {
    id: 9,
    title: 'PULSAR TECHNOLOGIA',
    shortDescription: 'Kompleksowe zarządzanie procesami technologicznymi i dokumentacją techniczną.',
    fullDescription: 'Moduł umożliwia zarządzanie procesami technologicznymi oraz dokumentacją techniczną zgodnie ze standardami firmy.',
    keyPoints: [
      'Zarządzanie procesami technologicznymi',
      'Dokumentacja techniczna'
    ]
  },
  {
    id: 10,
    title: 'PULSAR PRODUKCJA - SZWALNIA/KROJOWNIA',
    shortDescription: 'Dedykowane narzędzia do zarządzania procesami w szwalni i krojowni.',
    fullDescription: 'Moduł wspierający zarządzanie i optymalizację procesów produkcyjnych w szwalni oraz krojowni.',
    keyPoints: [
      'Zarządzanie procesami w szwalni',
      'Zarządzanie procesami w krojowni'
    ]
  },
  {
    id: 11,
    title: 'PULSAR PRODUKCJA - PIANKOWANIE',
    shortDescription: 'Specjalistyczne rozwiązania dla procesów piankowania w produkcji.',
    fullDescription: 'Moduł wspiera kontrolę i automatyzację procesów piankowania w linii produkcyjnej.',
    keyPoints: [
      'Procesy piankowania w produkcji',
      'Specjalistyczne rozwiązania'
    ]
  },
  {
    id: 12,
    title: 'PULSAR PRODUKCJA - STOLARNIA',
    shortDescription: 'Dedykowane narzędzia do zarządzania procesami w stolarni.',
    fullDescription: 'Moduł do zarządzania i optymalizacji procesów stolarskich w zakładzie produkcyjnym.',
    keyPoints: [
      'Zarządzanie procesami w stolarni',
      'Dedykowane narzędzia'
    ]
  },
  {
    id: 13,
    title: 'PULSAR MAGAZYN KODÓW KRESKOWYCH',
    shortDescription: 'Efektywne zarządzanie magazynem z wykorzystaniem kodów kreskowych.',
    fullDescription: 'Moduł umożliwia inwentaryzację i śledzenie stanów magazynowych za pomocą kodów kreskowych.',
    keyPoints: [
      'Zarządzanie magazynem za pomocą kodów kreskowych',
      'Efektywna inwentaryzacja'
    ]
  },
  {
    id: 14,
    title: 'PULSAR PRODUKCJA ROZLICZENIE',
    shortDescription: 'Kalkulacje, akordy i kompleksowe rozliczanie produkcji.',
    fullDescription: 'Moduł wspiera kalkulacje kosztów produkcji, system akordowy oraz pełne rozliczenie wydajności.',
    keyPoints: [
      'Kalkulacje produkcyjne',
      'Rozliczanie produkcji'
    ]
  },
  {
    id: 15,
    title: 'PULSAR WIZUALIZACJA PRODUKTU',
    shortDescription: 'Zaawansowane narzędzia do wizualnej prezentacji produktów.',
    fullDescription: 'Moduł oferuje narzędzia do tworzenia wizualizacji 2D/3D produktów, umożliwiające prezentację oferty w atrakcyjny sposób.',
    keyPoints: [
      'Wizualna prezentacja produktów',
      'Zaawansowane narzędzia graficzne'
    ]
  },
  {
    id: 16,
    title: 'PULSAR EDYTOR ETYKIET',
    shortDescription: 'Narzędzie do projektowania i drukowania etykiet produktowych.',
    fullDescription: 'Moduł umożliwia tworzenie szablonów etykiet produktowych oraz bezpośredni druk z poziomu systemu.',
    keyPoints: [
      'Projektowanie etykiet produktowych',
      'Drukowanie etykiet'
    ]
  },
  {
    id: 17,
    title: 'PULSAR EDI',
    shortDescription: 'Elektroniczna wymiana dokumentów z partnerami biznesowymi.',
    fullDescription: 'Moduł wspiera bezpieczną i zautomatyzowaną wymianę dokumentów (zamówienia, faktury, awiza) w formatach EDI.',
    keyPoints: [
      'Elektroniczna wymiana dokumentów',
      'Integracja z partnerami biznesowymi'
    ]
  },
  {
    id: 18,
    title: 'PULSAR XML-ExChanger',
    shortDescription: 'Integracja i wymiana danych w formacie XML z systemami zewnętrznymi.',
    fullDescription: 'Moduł umożliwia wymianę danych XML z systemami ERP, WMS i innymi narzędziami zewnętrznymi.',
    keyPoints: [
      'Integracja danych XML',
      'Wymiana z systemami zewnętrznymi'
    ]
  }
];



const toggleModule = (moduleId) => {
  if (expandedModule.value === moduleId) {
    expandedModule.value = null
  } else {
    expandedModule.value = moduleId
  }
}

const closeModule = () => {
  expandedModule.value = null
}
</script>


<style scoped>
/* Kontrola rozmiaru zawartości */
.card-content {
  transition: all 0.5s ease;
}

.expanded-content {
  max-height: none; /* Usuń ograniczenie wysokości */
  overflow: visible; /* Pozwól na naturalny przepływ */
}

.scrollable-content {
  max-height: none; /* Usuń ograniczenie wysokości */
  overflow: visible; /* Usuń wewnętrzny scroll */
  padding-right: 8px;
}

/* Ograniczenie wysokości rozwiniętej karty */
.ofertacard {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, box-shadow;
  max-height: none; /* Usuń ograniczenie */
  overflow: visible; /* Pozwól na naturalny przepływ */
}

.ofertacard.expanded {
  max-height: none; /* Usuń ograniczenie */
  overflow: visible; /* Usuń scroll z karty */
}

.ofertacard:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Płynne animacje stopniowego powiększania */
@keyframes expandWindow {
  0% { 
    transform: scale(1);
    max-height: 200px;
  }
  100% { 
    transform: scale(1.01);
    max-height: none; /* Usuń ograniczenie w animacji */
  }
}

@keyframes collapseWindow {
  0% { 
    transform: scale(1.01);
    max-height: none;
  }
  100% { 
    transform: scale(1);
    max-height: 200px;
  }
}

.expanding-card {
  animation: expandWindow 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

.collapsing-card {
  animation: collapseWindow 0.4s cubic-bezier(0.55, 0.06, 0.68, 0.19) forwards;
}

/* Płynne przejście zawartości */
@keyframes contentFadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.content-fade-in {
  animation: contentFadeIn 0.5s ease-out 0.2s forwards;
  opacity: 0;
}

/* Animacja dla punktów kluczowych */
@keyframes slideInStaggered {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.staggered-item {
  animation: slideInStaggered 0.4s ease-out forwards;
  opacity: 0;
}

/* Płynny grid z lepszymi przejściami */
.grid {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsywne zachowanie - KLUCZOWE ZMIANY */
@media (max-width: 768px) {
  .ofertacard.expanded {
    max-height: none; /* Usuń ograniczenie wysokości */
    overflow: visible; /* Usuń scroll */
  }
  
  .scrollable-content {
    max-height: none; /* Usuń ograniczenie wysokości */
    overflow: visible; /* Usuń wewnętrzny scroll */
  }
  
  .expanded-content {
    max-height: none; /* Usuń ograniczenie */
    overflow: visible; /* Pozwól na naturalny przepływ */
  }
  
  /* Opcjonalnie: zmniejsz padding dla lepszego wykorzystania przestrzeni */
  .ofertacard {
    padding: 1rem;
  }
}

/* Zapobieganie overflow na całej stronie */
.container {
  overflow-x: hidden;
}

/* Responsywność animacji */
@media (prefers-reduced-motion: reduce) {
  .expanding-card,
  .collapsing-card,
  .content-fade-in,
  .staggered-item {
    animation: none;
    transition: none;
  }
}
</style>
