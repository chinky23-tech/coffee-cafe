let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;

// Show slide based on the given index
function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;  // Loop back to the first slide
    } else if (index < 0) {
        currentIndex = totalSlides - 1;  // Loop back to the last slide
    } else {
        currentIndex = index;
    }
    
    document.querySelector('.slides').style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

// Go to the previous slide
function prevBtn() {
    showSlide(currentIndex - 1);
}

// Go to the next slide
function nextBtn() {
    showSlide(currentIndex + 1);
}

// Go to specific slide using the dots
function dotOne() {
    showSlide(0);
}

function dotTwo() {
    showSlide(1);
}

function dotThree() {
    showSlide(2);
}

// Update the dot navigation styles
function updateDots() {
    dots.forEach((dot, index) => {
        dot.style.backgroundColor = index === currentIndex ? '#f1f1f1' : '#412728';
    });
}

// Automatically change slides every 3 seconds
function autoSlide() {
    setInterval(() => {
        showSlide(currentIndex + 1);  // Go to the next slide
    }, 3000);  // 3000 milliseconds = 3 seconds
}

// Initialize the slideshow and start the auto-slide
showSlide(currentIndex);
autoSlide();
