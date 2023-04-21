const preguntas = [
    {
      pregunta: "¿Cuál es la capital de España?",
      respuesta: "Madrid"
    },
    {
      pregunta: "¿En qué año se fundó Apple?",
      respuesta: "1976"
    },
    {
      pregunta: "¿Quién escribió 'Cien años de soledad'?",
      respuesta: "Gabriel García Márquez"
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
      document.getElementById("resultado").innerText = "¡Felicidades, has completado todas las preguntas!";
      document.getElementById("resultado").style.display = "block";
    } else {
      document.getElementById("pregunta").getElementsByTagName("p")[0].innerText = preguntas[preguntaActual].pregunta;
      document.getElementById("respuesta").value = "";
      document.getElementById("resultado").style.display = "none";
    }
  }