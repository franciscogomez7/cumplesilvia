const preguntas = [
    {
      pregunta: "Tengo sucursal en la esquina, para ahorrar soy la mejor, si necesitas un préstamo, conmigo tienes el mejor trato y honor.",
      respuesta: "Bankia"
    },
    {
      pregunta: "Me construyeron los romanos, con la fuerza de sus manos, mi estructura es majestuosa, y hasta hoy, sigue orgullosa.",
      respuesta: "Acueducto de Segovia"
    },
    {
      pregunta: "Soy un espacio verde, en la ciudad de Segovia, un lugar tranquilo y sereno, donde se respira aire puro.",
      respuesta: "Parque de la Hontanilla"
    },
    {
      pregunta: "Mis edificios de colores, son un espectáculo visual, en mi centro sen encuentra un zócalo, que es donde la gente suele socializar.",
      respuesta: "Plaza Mayor"
    }
  ];
  
  let preguntaActual = 0;
  
  function verificar() {
    const respuestaUsuario = document.getElementById("respuesta").value;
    const resultado = document.getElementById("resultado");
    if (respuestaUsuario.toLowerCase() === preguntas[preguntaActual].respuesta.toLowerCase()) {
      resultado.innerText = "¡Respuesta correcta!";
      resultado.style.color = "green";
      resultado.style.display = "block";
      setTimeout(siguientePregunta, 2000);
    } else {
      resultado.innerText = "Respuesta incorrecta, intenta de nuevo.";
      resultado.style.color = "red";
      resultado.style.display = "block";
    }
  }
  
  function siguientePregunta() {
    preguntaActual++;
    if (preguntaActual >= preguntas.length) {
      document.getElementById("pregunta").style.display = "none";
      document.getElementById("resultado").innerText = "¡Felicidades, has completado nuestro reto! Ahora dirígete a La Previa donde te esperan nuestros embajadores de marca.";
      document.getElementById("resultado").style.display = "block";
    } else {
      document.getElementById("pregunta").getElementsByTagName("p")[0].innerText = preguntas[preguntaActual].pregunta;
      document.getElementById("respuesta").value = "";
      document.getElementById("resultado").style.display = "none";
    }
  }