// Toggle the navlinks visibility when the hamburger icon is clicked
const hamburger = document.getElementById('hamburger');
const navlinks = document.querySelector('.navlinks');

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('show'); // Toggle "show" class to display links
    
});
