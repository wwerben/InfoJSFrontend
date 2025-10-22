<template>
  <section class="relative w-full overflow-hidden accordion-root">
    <!-- Tło (bez bg-fixed; stabilne na mobile) -->
    <div class="absolute inset-0 pointer-events-none">
      <img src="/src/assets/img/magazyn-waski.jpg" alt="" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gray-900/70"></div>
    </div>

    <!-- Treść -->
    <div class="relative z-10 mx-auto max-w-5xl px-4 py-10 sm:py-16">
      <div
        v-for="(item, idx) in items"
        :key="item.id"
        class="border-b border-white/20"
      >
        <!-- Nagłówek -->
        <button
          type="button"
          class="w-full text-left flex items-center justify-between gap-4 py-4 text-white"
          :aria-expanded="openIndex === idx"
          :aria-controls="`panel-${item.id}`"
          @click="toggle(idx)"
        >
          <span class="text-xl font-bold">{{ item.title }}</span>
          <svg
            class="w-5 h-5 shrink-0 transition-transform duration-300"
            :class="{ 'rotate-180': openIndex === idx }"
            viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
          >
            <path d="M12 15.5a1 1 0 0 1-.7-.3l-6-6a1 1 0 1 1 1.4-1.4L12 13.1l5.3-5.3a1 1 0 1 1 1.4 1.4l-6 6a1 1 0 0 1-.7.3z"/>
          </svg>
        </button>

        <!-- Panel (animacja 0fr -> 1fr) -->
        <div
          :id="`panel-${item.id}`"
          class="grid transition-all duration-500 ease-in-out"
          :class="openIndex === idx ? 'rows-1fr' : 'rows-0fr'"
        >
          <!-- Uwaga: overflow-hidden na dziecku siatki -->
          <div class="overflow-hidden">
            <div
              class="pb-5 text-white/95 transition-opacity duration-300"
              :class="openIndex === idx ? 'opacity-100' : 'opacity-0'"
            >
              <p class="text-sm leading-relaxed mb-4">
                {{ item.body }}
              </p>
              <a :href="item.href" class="inline-flex items-center gap-1 hover:underline">
                <span>Dowiedz się więcej</span>
                <span class="font-bold">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
        <!-- /Panel -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const items = [
  {
    id: 'logistyka',
    title: 'Logistyka',
    href: '#logistyka',
    body:
      'System Pulsar usprawnia zarządzanie procesami logistycznymi, zapewniając optymalizację dostaw, redukcję kosztów oraz terminową realizację zamówień. Pozwala na pełną kontrolę nad zaopatrzeniem i sprzedażą – od rejestracji zamówień od klientów, przez tworzenie tras oraz automatyczne generowanie dokumentów sprzedażowych i wysyłkowych. Dzięki śledzeniu zamówień na każdym etapie w czasie rzeczywistym, logistyka staje się bardziej efektywna i dostosowana do potrzeb.'
  },
  {
    id: 'magazyn',
    title: 'Magazyn',
    href: '#magazyn',
    body:
      'Efektywne zarządzanie magazynem to klucz do sprawnej organizacji firmy. Pulsar umożliwia bieżącą kontrolę stanów magazynowych, śledzenie paczek magazynowych oraz optymalizację rozmieszczenia towarów. Wykorzystanie technologii RFID oraz automatyzacja procesów przyjęć, wydań i inwentaryzacji pozwala na minimalizację strat i zwiększenie wydajności operacyjnej.'
  },
  {
    id: 'produkcja',
    title: 'Produkcja',
    href: '#produkcja',
    body:
      'Planowanie i realizacja produkcji to fundament sprawnego funkcjonowania przedsiębiorstwa. System Pulsar wspiera zarządzanie procesami produkcyjnymi, umożliwiając tworzenie planów produkcyjnych, monitorowanie etapów realizacji oraz optymalizację zużycia surowców. System PULSAR pozwala na zwiększenie efektywności i redukcję błędów.'
  },
  {
    id: 'integracja',
    title: 'Integracja',
    href: '#integracja',
    body:
    'Automatyczna wymiana danych pomiędzy systemami to podstawa efektywnego zarządzania przedsiębiorstwem. Pulsar zapewnia pełną integrację z innymi systemami eliminując błędy wynikające z ręcznego wprowadzania danych. Automatyczna synchronizacja informacji gwarantuje aktualność i spójność procesów, co pozwala na lepszą kontrolę i optymalizację działania firmy.                         Pulsar RFID RFID to rewolucyjne rozwiązanie w logistyce, które w połączeniu z systemem PULSAR usprawnia zarządzanie magazynem i produkcją. Umożliwia automatyczne skanowanie bez kontaktu, eliminując błędy i przyspieszając operacje. Rozwiązanie to redukuje koszty, optymalizuje procesy i zwiększa precyzję zarządzania zapasami. System PULSAR RFID podnosi efektywność i automatyzację kluczowych procesów logistycznych.'
  }
]

const openIndex = ref(null)
openIndex.value = 0
const toggle = (i) => {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<style scoped>
/* Anti-jump: wyłączamy scroll anchoring w obrębie sekcji */
.accordion-root { overflow-anchor: none; }

/* Fallback dla Tailwinda — stabilna animacja bez arbitralnych klas */
.rows-0fr { grid-template-rows: 0fr; }
.rows-1fr { grid-template-rows: 1fr; }

/* Szacunek dla prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .transition-all { transition: none !important; }
}
</style>
