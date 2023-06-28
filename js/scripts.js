// Efecto de escritura
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed', {
        strings: ["Bienvenido a mi Portfolio", "Soy [Tu Nombre], un desarrollador web."],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        loop: true
    });
});

// Efecto de partículas en el fondo
particlesJS.load('inicio', 'js/particles.json', function() {
    console.log('particles.js loaded - callback');
});
