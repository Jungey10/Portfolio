// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Typed.js Initialization
const typed = new Typed('#element', {
    strings: ["Web Developer", "Designer", "Photographer"], // Modify as needed
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
