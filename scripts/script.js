// Toggle the navlinks visibility when the hamburger icon is clicked
const hamburger = document.getElementById('hamburger');
const navlinks = document.querySelector('.navlinks');

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('show'); // Toggle "show" class to display links
    
});

//  new page open
function openNewPage(){
    window.open("cafe.html");
}

// slideshow
let currentSlide = 0;
const slides = document.querySelector(".slides");
const totalSlides = slides.children.length;

function showSlide(index) {
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Optional: Add buttons for manual control
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);
