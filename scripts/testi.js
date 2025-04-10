document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.testimonial-container');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    const dotsContainer = document.querySelector('.pagination-dots');
    
    let currentIndex = 0;
    const cardWidth = cards[0].offsetWidth + 24; // width + gap
    const totalCards = cards.length;
    
    // Create pagination dots
    cards.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.addEventListener('click', () => goToSlide(index));
      dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.pagination-dots span');
    
    // Auto-slide every 5 seconds
    let slideInterval = setInterval(nextSlide, 2000);
    
    function updateSlide() {
      container.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
      
      // Update active dot
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
      
      // Reset timer when manually navigating
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 2000);
    }
    
    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalCards;
      updateSlide();
    }
    
    function prevSlide() {
      currentIndex = (currentIndex - 1 + totalCards) % totalCards;
      updateSlide();
    }
    
    function goToSlide(index) {
      currentIndex = index;
      updateSlide();
    }
    
    // Button events
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Pause on hover
    container.addEventListener('mouseenter', () => clearInterval(slideInterval));
    container.addEventListener('mouseleave', () => {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 2000);
    });
  });
