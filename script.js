// Hamburger Menu Toggle
document.getElementById('hamburger').addEventListener('click', function () {
    const nav = document.querySelector('.navbar');
    nav.classList.toggle('open');
});

// Smooth Scroll
const links = document.querySelectorAll('.navbar a');

// Example of adding a click event to each card to show more details in a modal or popup
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        alert(`You clicked on: ${card.querySelector('h3').textContent}`);
        // You can replace this with a modal window for more detailed information
    });
});


// JavaScript for the automatic slideshow functionality
const serviceCards = document.querySelector('.service-cards');
const totalCards = document.querySelectorAll('.card').length;
let currentIndex = 0;

function slideCards() {
    // Move the cards container left by one card width
    currentIndex++;
    if (currentIndex >= totalCards) {
        currentIndex = 0; // Reset to the first card when we reach the last
    }
    const offset = -(currentIndex * 320); // Each card is 300px wide, plus margin (10px on each side)
    serviceCards.style.transform = `translateX(${offset}px)`;
}

// Slide every 3 seconds
setInterval(slideCards, 3000); // Change the slide every 3 seconds


links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth',
        });
    });
});





