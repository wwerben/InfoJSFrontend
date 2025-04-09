export const typewriter = {
  mounted(el, binding) {
    const text = el.textContent;
    el.textContent = '';
    
    const speed = typeof binding.value === 'object' ? binding.value.speed || 100 : 
                 (binding.value || 100);
    
    // Dodatkowy offset - ile procent elementu musi być widoczne (0.1 = 10%)
    const threshold = typeof binding.value === 'object' ? binding.value.threshold || 0.1 : 0.1;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let i = 0;
          const timer = setInterval(() => {
            if (i < text.length) {
              el.textContent += text.charAt(i);
              i++;
            } else {
              clearInterval(timer);
              observer.disconnect(); // przestajemy obserwować po zakończeniu animacji
            }
          }, speed);
          
          observer.disconnect(); // przestajemy obserwować po rozpoczęciu animacji
        }
      });
    }, { threshold });
    
    observer.observe(el);
  }
}
