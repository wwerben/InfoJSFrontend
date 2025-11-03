<template>
    <div v-if="showBanner" class="cookie-backdrop">
      <div class="cookie-modal">
        <div class="cookie-header">
          <svg xmlns="http://www.w3.org/2000/svg" class="cookie-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
          <h3>Pliki cookies i prywatność</h3>
        </div>
        <p class="cookie-description">
          Używamy cookies analitycznych (Google Analytics 4) w celu poprawy jakości naszej strony 
          i lepszego dostosowania treści do Twoich potrzeb. Możesz zaakceptować lub odrzucić.
        </p>
  
        <details class="cookie-details">
          <summary>⚙️ Więcej informacji</summary>
          <div class="options-container">
            <div class="info-box">
              <div class="info-header">
                <svg xmlns="http://www.w3.org/2000/svg" class="info-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span class="info-title">Cookies analityczne (Google Analytics 4)</span>
              </div>
              <p class="info-desc">
                Zbieramy anonimowe dane o sposobie korzystania ze strony, takie jak odwiedzane podstrony, 
                czas spędzony na stronie i źródła ruchu. Pomoże nam to lepiej zrozumieć potrzeby użytkowników 
                i udoskonalać naszą stronę.
              </p>
            </div>
          </div>
        </details>
  
        <div class="buttons">
          <button class="btn-secondary" @click="rejectAll">Odrzuć</button>
          <button class="btn-primary" @click="acceptAll">Akceptuj</button>
        </div>
        <p class="footnote">
          Zgodę możesz zmienić później w ustawieniach cookies w stopce strony. 
          <router-link to="/polityka-prywatnosci" class="privacy-link">
            Polityka Prywatności
          </router-link>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useCookieBanner } from '@/composables/useCookieBanner';
  
  const STORAGE_KEY = 'cookie-consent-v3';
  
  const { showBanner, closeBanner } = useCookieBanner();
  
  // Flag to track if GA script is loaded
  let isGALoaded = false;
  
  // Helper: Load Google Analytics script dynamically
  function loadGoogleAnalytics() {
    if (isGALoaded) return;
    
    // Load gtag.js script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-115QHQNJ5X';
    document.head.appendChild(script);
    
    // Initialize GA4 after script loads
    script.onload = () => {
      window.gtag('js', new Date());
      window.gtag('config', 'G-115QHQNJ5X', { 
        send_page_view: true,
        anonymize_ip: true 
      });
      console.log('Google Analytics loaded after cookie consent');
    };
    
    // Handle script load errors (e.g., blocked by adblocker)
    script.onerror = () => {
      console.log('Google Analytics blocked (probably by ad blocker - this is OK)');
    };
    
    isGALoaded = true;
  }
  
  // Helper: Enable analytics (load script and set consent)
  function enableAnalytics() {
    // Set consent to granted
    if (window.gtag) {
      window.gtag('consent', 'default', {
        analytics_storage: 'granted',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
    
    // Load GA script
    loadGoogleAnalytics();
  }
  
  // Helper: Disable analytics (no script loading)
  function disableAnalytics() {
    // Set consent to denied (if GA was already loaded)
    if (window.gtag) {
      window.gtag('consent', 'default', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied'
      });
    }
    console.log('Analytics cookies rejected');
  }
  
  function acceptAll() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: true }));
    enableAnalytics();
    closeBanner();
  }
  
  function rejectAll() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ analytics: false }));
    disableAnalytics();
    closeBanner();
  }
  
  // Show banner if no saved decision exists, otherwise apply saved consent
  onMounted(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && typeof saved === 'object') {
        // User already made a choice
        if (saved.analytics) {
          enableAnalytics();
        } else {
          disableAnalytics();
        }
        closeBanner();
      } else {
        // No saved decision - show banner
        showBanner.value = true;
      }
    } catch {
      // Error reading localStorage - show banner
      showBanner.value = true;
    }
  });
  </script>
  
  <style scoped>
  /* Backdrop with blur effect similar to mobile menu */
  .cookie-backdrop {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: rgba(51, 66, 87, 0.55);
    backdrop-filter: blur(8px);
    padding: 16px;
    z-index: 9999;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* Main modal container with company colors */
  .cookie-modal {
    max-width: 640px;
    width: 100%;
    background: #3A435E;
    border-radius: 16px;
    padding: 24px 28px;
    box-shadow: 0 12px 48px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    animation: slideUp 0.4s ease;
    font-family: 'Poppins', sans-serif;
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  /* Header with icon */
  .cookie-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .cookie-icon {
    width: 28px;
    height: 28px;
    color: #0077b6;
    flex-shrink: 0;
  }

  .cookie-header h3 {
    font-size: 22px;
    font-weight: 600;
    color: #ffffff;
    margin: 0;
  }

  /* Description text */
  .cookie-description {
    color: #d1d5db;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 16px;
  }

  /* Collapsible details section */
  .cookie-details {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    padding: 12px 16px;
    margin: 16px 0;
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: all 0.3s ease;
  }

  .cookie-details:hover {
    background: rgba(255, 255, 255, 0.08);
  }

  .cookie-details summary {
    cursor: pointer;
    color: #ffffff;
    font-weight: 500;
    font-size: 15px;
    list-style: none;
    user-select: none;
    transition: color 0.3s ease;
  }

  .cookie-details summary::-webkit-details-marker {
    display: none;
  }

  .cookie-details summary:hover {
    color: #0077b6;
  }

  .cookie-details[open] summary {
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  /* Options container */
  .options-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .info-box {
    padding: 16px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    border: 1px solid rgba(0, 119, 182, 0.2);
  }

  .info-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .info-icon {
    width: 20px;
    height: 20px;
    color: #0077b6;
    flex-shrink: 0;
  }

  .info-title {
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
  }

  .info-desc {
    color: #d1d5db;
    font-size: 13px;
    line-height: 1.6;
    margin: 0;
  }

  /* Buttons container */
  .buttons {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    flex-wrap: wrap;
  }

  /* Button styles matching site design */
  button {
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Poppins', sans-serif;
    flex: 1;
    min-width: 140px;
  }

  .btn-secondary {
    background: rgba(255, 255, 255, 0.1);
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .btn-secondary:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .btn-primary {
    background: #0077b6;
    color: #ffffff;
    border: 1px solid #0077b6;
    box-shadow: 0 2px 8px rgba(0, 119, 182, 0.3);
  }

  .btn-primary:hover {
    background: #005a8f;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 119, 182, 0.4);
  }

  button:active {
    transform: translateY(0);
  }

  /* Footnote text */
  .footnote {
    color: #9ca3af;
    font-size: 12px;
    margin-top: 16px;
    line-height: 1.5;
    text-align: center;
  }

  .privacy-link {
    color: #0077b6;
    text-decoration: underline;
    transition: color 0.3s ease;
  }

  .privacy-link:hover {
    color: #005a8f;
  }

  /* Responsive design */
  @media (max-width: 640px) {
    .cookie-modal {
      padding: 20px;
      border-radius: 16px 16px 0 0;
    }

    .cookie-header h3 {
      font-size: 18px;
    }

    .cookie-description {
      font-size: 14px;
    }

    .buttons {
      flex-direction: column;
    }

    button {
      width: 100%;
      min-width: unset;
    }
  }
  </style>
  