// Efecto de escritura
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed', {
        strings: ["Bienvenido a mi <span class='highlight'>Portfolio</span>", "Soy Fran, <span class='highlight'>[Web Developer]</span> "],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 3500,
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

// Obtén el botón
var mybutton = document.getElementById("btnTop");

// Cuando el usuario se desplace 200px hacia abajo desde la parte superior del documento, muestra el botón
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 1000) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Cuando el usuario haga clic en el botón, desplaza la página hasta la parte superior del documento
function topFunction() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

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

document.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    
    document.querySelectorAll("section").forEach((section) => {
      if (
        section.offsetTop <= scrollPosition &&
        section.offsetTop + section.offsetHeight > scrollPosition
      ) {
        let navLink = document.querySelector('a[href="#' + section.id + '"]');
        navLink.classList.add("active");
      } else {
        let navLink = document.querySelector('a[href="#' + section.id + '"]');
        navLink.classList.remove("active");
      }
    });
  });

  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("shrink", window.scrollY > 50);
});

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("scroll-shadow", window.scrollY > 0);
});

window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    var section = document.getElementById("sobre-mi");

    var sectionPosition = section.getBoundingClientRect();

    if (sectionPosition.top <= 0 && sectionPosition.bottom >= 0) {
        header.style.backgroundColor = "#f4f4f4";
    } else {
        header.style.backgroundColor = "#35424a";
    }
});


