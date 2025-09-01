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

            <div 
              class="flex justify-center mt-auto"
              v-if="expandedModule !== module.id"
            >
              <p class="w-fit px-5 rounded-lg hover:scale-110 transition-all duration-500 py-2 text-gray-100 bg-blue3 mt-4 text-center">
                Rozwiń
              </p>
            </div>

            <div v-else class="space-y-4 content-fade-in ">
              <p class="text-gray-700">{{ module.shortDescription }}</p>
              
              <div class="scrollable-content">
                <div v-if="module.keyPoints && module.keyPoints.length > 0" class="border-t pt-4 pb-4">
                  <div v-if="module.keyPointsDesc && module.keyPointsDesc.length > 0">
                  <p class="text-gray-700 pb-2  font-medium text-base leading-relaxed">{{ module.keyPointsDesc }}</p>
                </div>
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
                
                <div class="border-t pt-4 pb-4 " v-if="module.fullDescription && module.fullDescription.length > 0">
                  <p class="text-gray-700 text-base leading-relaxed">{{ module.fullDescription }}</p>
                </div>
               
                <div class="scrollable-content">
                <div v-if="module.keyPoints2 && module.keyPoints2.length > 0" class="   pb-4">
                  <div v-if="module.keyPointsDesc2 && module.keyPointsDesc2.length > 0">
                  <p class="text-gray-700 pb-2 pt-2 text-base font-medium leading-relaxed">{{ module.keyPointsDesc2 }}</p>
                </div>
                  <ul class="space-y-2">
                    <li 
                      v-for="(point, index) in module.keyPoints2" 
                      :key="index"
                      class="flex items-start staggered-item"
                      :style="{ animationDelay: `${0.3 + index * 0.1}s` }"
                    >
                      <div class="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                      <span class="text-gray-700 text-base leading-relaxed">{{ point }}</span>
                    </li>
                  </ul>
                </div>
                <div v-if="module.keyPoints3 && module.keyPoints3.length > 0" class="   pb-4">
                  <div v-if="module.keyPointsDesc3">
                  <p class="text-gray-700 pb-2 pt-2 text-base font-medium leading-relaxed">{{ module.keyPointsDesc3 }}</p>
                </div>
                <ul class="space-y-2">
                  <li 
                    v-for="(point, index) in module.keyPoints3" 
                    :key="index"
                    class="flex items-start staggered-item"
                    :style="{ animationDelay: `${0.3 + index * 0.1}s` }"
                  >
                    <div class="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span class="text-gray-700 text-base leading-relaxed">{{ point }}</span>
                  </li>
                </ul>
              </div>


              <div v-if="module.keyPoints4 && module.keyPoints4.length > 0" class="   pb-4">
                <div v-if="module.keyPointsDesc4">
                  <p class="text-gray-700 font-medium pb-2 pt-2 text-base leading-relaxed">{{ module.keyPointsDesc4 }}</p>
                </div>
                <ul class="space-y-2">
                  <li 
                    v-for="(point, index) in module.keyPoints4" 
                    :key="index"
                    class="flex items-start staggered-item"
                    :style="{ animationDelay: `${0.3 + index * 0.1}s` }"
                  >
                    <div class="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span class="text-gray-700 text-base leading-relaxed">{{ point }}</span>
                  </li>
                </ul>
              </div>
              <div v-if="module.additionalDescription && module.additionalDescription.length > 0" class=" pb-4">
                  <p class="text-gray-700 text-base leading-relaxed">{{ module.additionalDescription }}</p>
                </div>

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
    shortDescription: 'Logistyka zaopatrzenia to obszar logistyki odpowiedzialny za planowanie, organizowanie, realizację i kontrolę procesów związanych z pozyskiwaniem materiałów, surowców, półproduktów oraz usług potrzebnych do prowadzenia działalności firmy.',
    fullDescription: 'Dobrze zorganizowana logistyka zaopatrzenia sprawia, że firma nie ma braków materiałowych, unika nadmiernych zapasów i pracuje bardziej efektywnie.',
    keyPoints: [
      'Planowanie zapotrzebowania materiałowego na podstawie danych sprzedaży, produkcji i aktualnych stanów magazynowych.',
      'Zarządzanie katalogiem dostawców i ich cennikami oraz automatyczne generowanie zamówień zakupowych.',
      'Pełne śledzenie statusu zamówień — od momentu złożenia po dostawę do magazynu.',
      'Kontrola zapasów z monitorowaniem stanów minimalnych i powiadomieniami o konieczności uzupełnień.'
    ]
  },
  {
    id: 2,
    title: 'PULSAR LOGISTYKA SPRZEDAŻY (PLS)',
    shortDescription: 'Moduł kompleksowo wspiera proces obsługi zamówień – od ich rejestracji, przez planowanie wysyłek, aż po fakturowanie i integrację z systemami zewnętrznymi. Dzięki niemu sprzedaż staje się szybsza, bardziej zorganizowana i zautomatyzowana.',
    fullDescription: 'W module Logistyka Sprzedaży poza podstawową funkcjonalnością wystawiania faktur i korekt mamy również możliwość:',
    keyPoints: [
      'Ewidencja zamówień',
      'Rejestracja zamówień sprzedażowych oraz tworzenie tras wysyłkowych',
      'Integracja z firmami kurierskimi poprzez furgonetka.pl',
      'Generowanie dokumentów sprzedażowych oraz transportowych (faktura, specyfikacja, dowód dostawy, CMR, intrastat)',
      'Rezerwacje produktów',
      'Monitorowanie poszczególnych faz realizacji zamówienia'
    ],
    keyPoints2: [
      'Pełne zautomatyzowanie procesu generowania faktur na podstawie dokumentów magazynowych, bez udziału użytkownika.',
      'Możliwość wygenerowania deklaracji INTRASTAT.',
      'Wygenerowanie ustandaryzowanego pliku JPK FAKTURY.',
      'Integracja z KSEF.',
      'Możliwość rozsyłania faktur w postaci PDF drogą e-mailową do kontrahentów.',
      'Generowanie oraz integracja plików wymiany EDI dla faktur zgodnie ze specyfikacjami EDIFACT oraz XML.'
    ]
  },
  {
    id: 3,
    title: 'PULSAR KSeF',
    shortDescription: 'Pulsar KSeF to moduł odpowiedzialny za obsługę Krajowego Systemu e-Faktur (KSeF), czyli rządowej platformy służącej do wystawiania, przesyłania i odbierania faktur w ustandaryzowanej, elektronicznej formie.',
    fullDescription: 'W praktyce oznacza to pełną automatyzację obiegu faktur, eliminację dokumentów papierowych i bezpieczeństwo danych zgodne z aktualnymi przepisami',
    keyPoints: [
      'Bezpośrednia wysyłka faktur sprzedażowych do Krajowego Systemu e-Faktur (KSeF).',
      'Automatyczne pobieranie faktur zakupowych z KSeF jako kosztowych dokumentów.',
      'Czytelna wizualizacja faktur sprzedażowych oraz zakupowych w interfejsie systemu.',
      'Możliwość integracji z innymi systemami księgowymi'
    ]
  },
  {
    id: 4,  
    title: 'PULSAR INFORMATOR24',
    shortDescription: 'Przegląd kluczowych wskaźników firmy — bez konieczności logowania się do głównego systemu ERP. Wszystko dostępne z poziomu przeglądarki internetowej WWW.',
    fullDescription: 'Informator24 to mobilny pulpit menedżera, który łączy proste raportowanie z elastycznością analiz, pomagając podejmować trafne decyzje na bieżąco.',
    keyPoints: [
      'Raporty w czasie rzeczywistym — szybki podgląd fakturowania, logistyki magazynowej oraz produkcji.',
      'Tworzenie własnych zestawień — definiuj zakres danych, a system wygeneruje raporty idealnie dopasowane do Twoich potrzeb.',
      'Dostęp 24/7 — sprawdzaj wydajność i wyniki z każdego miejsca, na dowolnym urządzeniu.',
      'Prezentacja danych w sposób tabelaryczny i graficzny.',
      'Analiza ilościowa i wartościowa w ujęciu asortymentowym/kontrahentów.',
      'Zestawienia porównawcze z dowolnych okresów (np. wartość i ilość sprzedaży).'
    ]
  },
  {
    id: 5,
    title: 'PULSAR E-COMMERCE B2B',
    shortDescription: 'Moduł e-zamówień dostępny w przeglądarce, który łączy klientów bezpośrednio z systemem PULSAR.',
    fullDescription: 'Dzięki PULSAR e-Commerce Twoi klienci mogą zamawiać wygodnie online, a Ty oszczędzasz czas i eliminujesz błędy w ręcznym przetwarzaniu zamówień.',
    keyPoints: [
      'Składanie zamówień online w czasie rzeczywistym, dostępne 24/7.',
      'Automatyczna integracja z magazynem i logistyką – stany magazynowy, rezerwacje oraz ceny zawsze aktualne.',
      'Śledzenie statusu zamówienia od momentu złożenia zamówienia aż po wysyłkę.',
      'Historia i zarządzanie zamówieniami – szybki wgląd w poprzednie transakcje i możliwość ponownego zamawiania.',
      'Elastyczny interfejs dostosowany do Twojej marki i potrzeb klientów.',
      'Prezentacja oferty firmy – opisy, grafika, zdjęcia', 
      'Promocja produktów, wyprzedaże, oferty specjalne',
      'Rejestracja zamówień przez klientów za pomocą przeglądarki internetowej',
      'Automatyczne generowanie zamówień w systemie logistyki sprzedaży'
    ]
  },
  {
    id: 6,
    title: 'PULSAR MAGAZYN ZAOPATRZENIE',
    shortDescription: 'Moduł Pulsar Magazyn Zaopatrzenie zapewnia pełną kontrolę nad obiegiem towarów i materiałów w magazynie. Umożliwia bieżące monitorowanie stanów, rejestrowanie przerzutów magazynowych oraz sprawne zarządzanie gospodarką materiałową.',
    fullDescription: 'Większa przejrzystość gospodarki magazynowej, ograniczenie braków materiałowych i pełna kontrola nad zaopatrzeniem.',
    keyPoints: [
      'Kontrola stanów magazynowych i minimalnych zapasów',
      'Obsługa przyjęć, wydań oraz przerzutów między magazynami',
      'Szybki dostęp do historii operacji i aktualnych zasobów',
      'Wsparcie procesów inwentaryzacji',
      'Tworzenie magazynów wirtualnych'
    ]
  },
  {
    id: 7,
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
    id: 8,
    title: 'PULSAR PRODUKCJA - TAPICERNIA',
    shortDescription: 'Moduł dedykowany dla zakładów produkujących meble tapicerowane, który umożliwia pełną kontrolę nad planowaniem, realizacją i rozliczaniem procesów produkcyjnych. Dzięki niemu możliwe jest precyzyjne przypisanie zadań do konkretnych osób lub zespołów, optymalne wykorzystanie zasobów oraz automatyczna rejestracja operacji.',
    fullDescription: 'Pełna przejrzystość procesów na wszystkich działach, szybsza realizacja zamówień, lepsze wykorzystanie zasobów i łatwe rozliczanie pracy własnej oraz podwykonawców.',
    keyPointsDesc: 'Moduł zapewnia planowanie dla wszystkich wydziałów: stolarnia, piankowanie, szwalnia/ krojownia, tapicernia',
    keyPoints: [
      'Zaawansowane planowanie – przypisanie asortymentu do osób, zespołów, hal, sektorów czy gniazd roboczych, z uwzględnieniem zadeklarowanych roboczogodzin.',
      'Obsługa tras i terminów – planowanie produkcji wg daty wyjazdu lub realizacji.',
      'Etykiety i identyfikacja – druk etykiet z zabezpieczeniem przed ponownym wydrukiem, integracja z czytnikami kodów kreskowych do zatwierdzania operacji, przenoszenia zadań i szybkiego wyszukiwania zespołów.',
      'Kontrola procesów – weryfikacja kolejności operacji, statusów kart pracy oraz poprawności rejestracji wykonania.',
      'Zarządzanie magazynem – podgląd wydanych półproduktów, kontrola przed podwójnym przyjęciem asortymentu, pełna historia działań.',
      'Rozliczenia i statystyki – wydruki statystyczne i akordowe, cenniki operacji oraz aktywne cenniki dla podwykonawców.',
      'Elastyczność – możliwość przenoszenia zaplanowanych pozycji między zespołami z zachowaniem historii, a także dynamiczne generowanie zleceń do produkcji wewnętrznej i zewnętrznej.'
    ]
  },
  {
    id: 9,
    title: 'PULSAR PLANOWANIE ZAOPATRZENIA',
    shortDescription: 'Optymalizacja procesów planowania zakupów i zarządzania zapasami.',
    fullDescription: 'Moduł do optymalizacji procesów planowania zakupów oraz efektywnego zarządzania zapasami w całym łańcuchu dostaw.',
    keyPoints: [
      'Optymalizacja procesów planowania zakupów',
      'Zarządzanie zapasami'
    ]
  },
  {
    id: 10,  
    title: 'PULSAR SŁOWNIKI I TECHNOLOGIA (PTP)',
    shortDescription: 'Moduł Słowniki i Technologia to fundament systemu PULSAR, który pozwala na szczegółowe definiowanie, opisywanie i zarządzanie produktami, półproduktami oraz ich wariantami technologicznymi. Dzięki elastycznej strukturze umożliwia tworzenie wielowymiarowych katalogów produktów, wykończeń, atrybutów i parametrów, które odzwierciedlają rzeczywiste procesy produkcyjne w firmie. Dodatkowo w module słowniki znajduję się również słownik kontrahentów. Jest to centralna baza danych o wszystkich kontrahentach z którymi współpracuje firma.',
    keyPointsDesc: 'Słownik Produktów',
    keyPoints: [
      'Grupy asortymentowe – dowolna ilość grup dla produktów i półproduktów.',
      'Katalog podstawowy – pełny opis produktu, rozszerzony o parametry podstawowe i dodatkowe.',
      'Warunki techniczne – receptury, warianty i reżimy produkcyjne dopasowane do specyfiki wyrobu.',
      'Wizualizacja – możliwość dołączania zdjęć, rysunków i dokumentacji technicznej.',
      'Wymiary opisujące asortyment – wielowymiarowy opis i klasyfikacja produktów.',
      'Cenniki i upusty – obsługa wielu poziomów cen, walut, kontraktów oraz tabel rabatowych z historią zmian.'
    ],
    keyPointsDesc2: 'Słownik Wykończeń',
    keyPoints2: [
      'Możliwość zapisania dowolnej ilości katalogów wykończeń i przypisywania im parametrów podstawowych oraz rozszerzonych.',
      'Definiowanie receptur produkcyjnych dla wykończeń z uwzględnieniem parametrów maszyn i operacji.',
      'Wizualizacja dostępnych wykończeń (wzory, zdjęcia, dodatkowe parametry).',
      'Możliwość inteligentnego kopiowania gotowych receptur.',
      'Definiowanie parametrów opisujących artykuły',
      'Grupowanie parametrów według przeznaczenia (np. produkcja, logistyka, sprzedaż).',
      'Definiowanie funkcji przeliczeniowych i warunków użycia atrybutów, co pozwala na inteligentne powiązania między danymi.'
    ],
    keyPointsDesc3: 'Słownik Atrybutów i Parametrów',
    keyPoints3: [
      'Definiowanie parametrów opisujących artykuły',
      'Grupowanie parametrów według przeznaczenia (np. produkcja, logistyka, sprzedaż).',
      'Definiowanie funkcji przeliczeniowych i warunków użycia atrybutów, co pozwala na inteligentne powiązania między danymi.'
    ],
    keyPointsDesc4: 'Słownik kontrahenta',
    keyPoints4: [
      'Dane podstawowe – typ kontrahenta, nazwa, adres, NIP, REGON, warunki płatności, poziom cenowy.',
      'Pełna charakterystyka – przypisanie kontrahenta do obszarów geograficznych, rynków zbytu i kanałów dystrybucji.',
      'Adresy i kontakty – obsługa wielu adresów dostaw, możliwość zapisu osób kontaktowych, numerów telefonów, e-maili i strony WWW.',
      'Warunki handlowe – przydzielanie kontrahentom cenników i tabel upustów.',
      'Dodatkowe obiekty – możliwość dołączania dokumentów, rysunków i zdjęć.',
      'Klasyfikacja wielowymiarowa – elastyczne grupowanie kontrahentów według wybranych kryteriów, np. geograficznych, sprzedażowych czy dystrybucyjnych.'
    ],
    additionalDescription: 'Moduł Słowniki i Technologia (PTP) zapewnia pełną elastyczność w zarządzaniu produktami i procesami – od definiowania wariantów i wykończeń, po cenniki i atrybuty, aż po zarządzanie kontrahentami. Dzięki temu firma zyskuje precyzyjne narzędzie do planowania, wyceny i obsługi nawet najbardziej skomplikowanej produkcji.'
    
  },

  {
    id: 13,
    title: 'PULSAR PRODUKCJA - STOLARNIA',
    shortDescription: 'Dedykowane narzędzia do zarządzania procesami w stolarni.',
    fullDescription: 'Moduł do zarządzania i optymalizacji procesów stolarskich w zakładzie produkcyjnym.',
    keyPoints: [
      'Zarządzanie procesami w stolarni',
      'Dedykowane narzędzia'
    ]
  },
  {
    id: 14,
    title: 'PULSAR MAGAZYN KODÓW KRESKOWYCH',
    shortDescription: 'Moduł umożliwiający realizację wszystkich procesów magazynowych za pomocą czytników kodów kreskowych, co znacząco przyspiesza pracę i eliminuje błędy.',
    fullDescription: 'Moduł umożliwia inwentaryzację i śledzenie stanów magazynowych za pomocą kodów kreskowych.',
    keyPoints: [
      'Przyjęcia i wydania towarów na podstawie dokumentów pz/wz.',
      'Zmiana lokalizacji asortymentu zapewniające optymalne wykorzystanie przestrzeni.',
      'Kontrola poprawności operacji magazynowych',
      'Inwentaryzacja, z możliwością szybkiego skanowania i porównania stanów rzeczywistych',
      'Zastosowanie algorytmów optymalizujących kompletacje'
    ]
  },
  {
    id: 15,
    title: 'PULSAR PRODUKCJA ROZLICZENIE',
    shortDescription: 'Moduł Pulsar Produkcja Rozliczenie wspiera przedsiębiorstwa w precyzyjnym planowaniu i analizie kosztów produkcji. Umożliwia zarówno wstępne szacowanie nakładów, jak i szczegółowe rozliczenie procesów produkcyjnych w oparciu o rzeczywiste dane (BOM).',
    fullDescription: 'Pełna kontrola nad kosztami produkcji, możliwość porównania założeń z wynikami rzeczywistymi oraz narzędzie do podejmowania świadomych decyzji biznesowych.',
    keyPoints: [
      'Prowadzenie kalkulacji wstępnych opartych na kartach WTT',
      'Wartościowanie magazynów na podstawie kalkulacji wstępnych',
      'Przygotowanie kalkulacji wynikowych w oparciu o rzeczywiste dane produkcyjne i księgowe',
      'Wsparcie w rozliczaniu akordów pracowniczych'
    ]
  },
  {
    id: 16,
    title: 'PULSAR WIZUALIZACJA PRODUKTU',
    shortDescription: 'Zaawansowane narzędzia do wizualnej prezentacji produktów.',
    fullDescription: 'Moduł oferuje narzędzia do tworzenia wizualizacji 2D/3D produktów, umożliwiające prezentację oferty w atrakcyjny sposób.',
    keyPoints: [
      'Wizualna prezentacja produktów',
      'Zaawansowane narzędzia graficzne'
    ]
  },
  {
    id: 17,
    title: 'PULSAR EDYTOR ETYKIET',
    shortDescription: 'Moduł Pulsar Edytor Etykiet to narzędzie, które umożliwia samodzielne projektowanie i drukowanie etykiet. Dzięki niemu łatwo dostosujesz wygląd etykiet do wymagań swojej firmy lub kontrahentów – od prostych kodów kreskowych, przez etykiety magazynowe, wysyłkowe oraz klientowskie, aż po oznaczenia produkcyjne czy logistyczne.',
    fullDescription: 'Szybkie, czytelne i zgodne ze standardami oznaczenia, które usprawniają pracę magazynu i produkcji.',
    keyPoints: [
      'Tworzenie własnych szablonów etykiet,',
      'Wykorzystanie danych bezpośrednio z systemu (np. numery partii, lokalizacje, zamówienia),',
      'Obsługę kodów kreskowych i QR,',
      'Pełną integrację z procesami magazynowymi i produkcyjnymi',
      'Programowanie tagów RFID'
    ]
  },
  {
    id: 18,
    title: 'PULSAR EDI',
    shortDescription: 'Moduł służący do bezpośredniej, elektronicznej wymiany danych między systemem PULSAR a systemami kontrahentów.',
    fullDescription: 'Mamy opracowaną wymiane danych z: LUTZ, Conforama, ABRA, Agata Meble, KHG/ hoffner LUDOM, Komfort, BUT, Porta, Gutman, Habufa, Merkury, ASKO, HOME24, PORTA, Boss',
    keyPoints: [
      'Wysyłka zamówień w formacie EDI pomiędzy systemami, eliminując ręczne wprowadzanie i błędy.',
      'Odbiór potwierdzeń zamówień',
      'Wysyłka faktur sprzedażowych bezpośrednio do systemów klientów.'
    ]
  },
  {
    id: 19,
    title: 'PULSAR XML-ExChanger',
    shortDescription: 'Moduł umożliwiający realizację wszystkich procesów magazynowych za pomocą czytników kodów kreskowych, co znacząco przyspiesza pracę i eliminuje błędy. Moduł Pulsar XML Exchanger odpowiada za elektroniczną wymianę danych pomiędzy systemem PULSAR a systemami zewnętrznymi w oparciu o pliki XML. To rozwiązanie umożliwia szybkie i bezbłędne przesyłanie dokumentów i informacji biznesowych w ustalonych standardach wymiany danych.',
    fullDescription: 'Oszczędność czasu, eliminacja błędów ręcznego wprowadzania danych i płynna współpraca z kontrahentami oraz systemami zewnętrznymi. Posiadamy wymiane danych (integracje) z systemami: optima, wapro, agrobex, e-nowa, XL, vDesk',
    keyPoints: [
      'Generowanie i import plików XML zgodnie z wymaganiami partnerów biznesowych,',
      'Obsługa dokumentów takich jak zamówienia, faktury, potwierdzenia czy dokumenty magazynowe,',
      'Automatyzacja wymiany danych między systemami,',
      'Pełna integracja z procesami sprzedaży, zakupów i logistyki.'
    ],
    additionalDescription: 'Posiadamy wymiane danych (integracje) z systemami: optima, wapro, agrobex, e-nowa, XL, vDesk',

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
