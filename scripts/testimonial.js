
// styling on card
const testimonialCards = document.querySelectorAll('.testimonial-card');

testimonialCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        const img = card.querySelector('img');
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseout', () => {
        const img = card.querySelector('img');
        img.style.transform = 'scale(1)';
    });
});
