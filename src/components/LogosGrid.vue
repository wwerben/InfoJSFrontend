<!-- components/LogoGrid.vue -->
<template>
    <div class="max-w-7xl mx-auto px-4 bg-white">
      <div class="grid grid-cols-2 md:grid-cols-4  gap-y-15 lg:gap-y-20 mt-10  py-8">
        <div
          v-for="logo in allLogos"
          :key="logo.id"
          class="flex items-center justify-center"
        >
          <a
            :href="logo.link"
            target="_blank"
            rel="noopener noreferrer"
            class="block transition-all duration-300 hover:scale-110"
            @click="handleLogoClick(logo)"
          >
            <img
              :src="logo.src"
              :alt="logo.alt"
              class="w-auto h-9 lg:h-12 object-contain lg:grayscale hover:grayscale-0 transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Import wszystkich obrazków (skopiuj z oryginalnego komponentu)
  import benixImg    from '@/assets/img/benix.jpg'
  import dolmarImg   from '@/assets/img/Dolmarmeble.png'
  import mirjanImg   from '@/assets/img/mirjan.png'
  import wersalImg   from '@/assets/img/wersal.jpg'
  import matexImg   from '@/assets/img/matex.png'
  import koloImg     from '@/assets/img/kolo.png'
  import piaskiImg   from '@/assets/img/piaski.jpg'
  import agnellaImg  from '@/assets/img/agnella.png'
  import polakImg    from '@/assets/img/polak.jpg'
  import victoriaImg from '@/assets/img/victoria.png'
  import beliniImg from '@/assets/img/belini.jpg'
  import domelImg from '@/assets/img/domel.jpg'
  import gortexImg from '@/assets/img/gortex.jpg'
  import ariadnaImg from '@/assets/img/ariadna.jpg'
  import haftImg from '@/assets/img/haft.jpg'
  import pollenaImg from '@/assets/img/pollena.jpg'
  import elektrokabelImg from '@/assets/img/elektrokabel.jpg'
  import kablonexImg from '@/assets/img/kablonex.jpg'
  import wistilImg from '@/assets/img/wistil.jpg'
  import pgpImg from '@/assets/img/PGP.jpg'
  import gabiIMG from '@/assets/img/gabiIMG.jpg'
  import negroIMG from '@/assets/img/negroIMG.jpg'
  
  // Wszystkie loga w jednej tablicy
  const allLogos = [
    { id: 1, src: mirjanImg, alt: 'Mirjan 24', link: 'https://mirjan24.pl' },
    { id: 2, src: dolmarImg, alt: 'Dolmar Meble', link: 'https://dolmar.pl/' },
    { id: 3, src: wersalImg, alt: 'Wersal', link: 'https://wersal.pl/' },
    { id: 4, src: benixImg, alt: 'Benix', link: 'https://benix.pl' },
    { id: 5, src: piaskiImg, alt: 'Piaski', link: 'https://piaski.com.pl/' },
    { id: 6, src: matexImg, alt: 'Matex', link: 'https://matex-polstermoebel.com.pl/' },
    { id: 7, src: beliniImg, alt: 'Belini', link: 'https://belini.pl/' },
    { id: 8, src: polakImg, alt: 'Polak Meble', link: 'https://polakmeble.pl/' },
    { id: 9, src: victoriaImg, alt: 'Victoria Meble', link: 'https://victoriameble.pl/' },
    { id: 10, src: gabiIMG, alt: 'Gabi', link: 'https://www.gabi.com.pl/' },
    { id: 11, src: negroIMG, alt: 'Negro', link: 'https://meblenegro.com/' },
    { id: 12, src: koloImg, alt: 'Kolo', link: 'https://www.kolo-materace.pl/' },
    { id: 13, src: domelImg, alt: 'Domel', link: 'https://domelmeble.pl/' },
    { id: 14, src: gortexImg, alt: 'Gortex', link: 'https://gortex.com.pl/' },
    { id: 15, src: ariadnaImg, alt: 'Ariadna', link: 'https://ariadna.com.pl/' },
    { id: 16, src: agnellaImg, alt: 'Agnella', link: 'https://www.agnella.pl/' },
    { id: 17, src: haftImg, alt: 'Haft', link: 'https://haft.com.pl/' },
    { id: 18, src: pollenaImg, alt: 'Pollena', link: 'https://pollena.com.pl/' },
    { id: 19, src: elektrokabelImg, alt: 'Elektrokabel', link: 'https://elektrokabel.pl/' },
    { id: 20, src: pgpImg, alt: 'PGP', link: 'http://www.porcelana-cmielow.pl/grupaporcelanowa.php' },
    { id: 21, src: wistilImg, alt: 'Wistil', link: 'https://wistil.pl/' },
    { id: 22, src: kablonexImg, alt: 'Kablonex', link: 'https://kablonex.pl/' }
  ]
  
  function handleLogoClick(logo) {
    console.log('Kliknięto logo:', logo.alt)
  }
  </script>
  