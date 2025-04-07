// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('nav-active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Scroll Animation for Cards
function checkCards() {
    const cards = document.querySelectorAll('.card, .team-card');
    const triggerBottom = window.innerHeight * 0.8;
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        
        if (cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
        }
    });
}

// Initialize Card Styles
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.card, .team-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Check initial positions
    checkCards();
});

// Check cards on scroll
window.addEventListener('scroll', checkCards);

// Smooth Scrolling for CTA Button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const featuresSection = document.querySelector('.features');
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Add active class to current page in navigation
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else if (currentPage === '' && linkPage === 'index.html') {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Call setActiveNav on page load
window.addEventListener('load', setActiveNav);