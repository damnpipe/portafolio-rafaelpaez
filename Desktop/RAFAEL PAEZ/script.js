let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const carrusel = document.querySelector('.carrusel');

function mostrarSlide(n) {
    currentSlide = (n + slides.length) % slides.length;
    // Mueve el carrusel al índice correcto
    carrusel.style.transform = `translateX(${-currentSlide * 100}%)`;
}

function moverSlide(n) {
    mostrarSlide(currentSlide + n);
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarSlide(currentSlide);
});
