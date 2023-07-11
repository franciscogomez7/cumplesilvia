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


let barras = document.querySelectorAll('.progreso');
let ticking = false;

function actualizarBarras() {
    barras.forEach(function(barra) {
        let position = barra.getBoundingClientRect();
        if(position.top >= 0 && position.bottom <= window.innerHeight) {
            let finalWidth = barra.getAttribute('data-final-width');
            barra.style.width = finalWidth;
        }
    });
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            actualizarBarras();
            ticking = false;
        });
        ticking = true;
    }
});
