// Efecto de escritura
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed', {
        strings: ["Bienvenido a mi <span class='highlight'>Portfolio</span>", "Soy Fran, <span class='highlight'>[Web Developer]</span> "],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 3000,
        loop: true,
        onStart: function(self) {
            document.querySelector('.typed-text').classList.add('animated');
        },
        onComplete: function(self) {
            document.querySelector('.typed-text').classList.remove('animated');
        }
    });
});



// Efecto de partículas en el fondo
particlesJS.load('inicio', 'js/particles.json', function() {
    console.log('particles.js loaded - callback');
});

// Efecto de partículas en el fondo 2
particlesJS.load('about', 'js/particles2.json', function() {
    console.log('particles2.js loaded - callback');
});

// Efecto de partículas en el fondo 2
particlesJS.load('habilidades', 'js/particles2.json', function() {
    console.log('particles2.js loaded - callback');
});

// Encuentra todas las barras de progreso en la página
var barras = document.querySelectorAll('.progreso');

// Añade el evento de desplazamiento al window
window.addEventListener('scroll', function() {
    // Para cada barra de progreso...
    barras.forEach(function(barra) {
        // Calcula la posición de la barra de progreso respecto al viewport
        var position = barra.getBoundingClientRect();

        // Si la barra de progreso está en la vista...
        if(position.top >= 0 && position.bottom <= window.innerHeight) {
            // Añade el ancho final a la barra de progreso
            var finalWidth = barra.getAttribute('data-final-width');
            barra.style.width = finalWidth;
        }
    });
});


// Obtén todas las barras de progreso
var barras = document.querySelectorAll('.progreso');

// Añade la clase "animated" y una clase de retraso específica a cada barra de progreso
barras.forEach(function(barra, index) {
    barra.classList.add('animated', 'delay-' + (index + 1) + 's');
});
