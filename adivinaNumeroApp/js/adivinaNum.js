// Declaramos las variables con los elementos que vamos a necesitar
juego = new Partida();
displayNumSecreto = document.getElementById("displayNumSecreto");
retroalimentacion = document.getElementById("retroalimentacion");
numCandidato = document.getElementById("numCandidato");
checkBtn = document.getElementById("checkBtn");
candMenorCercano = document.getElementById("numMenor");
candMayorCercano = document.getElementById("numMayor");
var numTry = 0;

// Contenedores de fases  del programa
displayGame = document.getElementById("main");
again = document.getElementById("volverAJugar");

function checkTry() {
  ++numTry;
  let num = juego.compruebaNumero(parseInt(numCandidato.value));
  if (num == 0) {
    displayNumSecreto.innerHTML = numCandidato.value;
    retroalimentacion.innerHTML = `ENHORABUENA!! Has adivinado el número secreto <br> <span>Números de intentos: ${numTry}</span>`;
    setTimeout(function () {
      volverAJugar();
    }, 4000);
  } else if (num == -1) {
    retroalimentacion.innerHTML = `Tu número es demasiado pequeño`;
    candMenorCercano.innerHTML = juego.candidatoMenorCercano;
  } else {
    retroalimentacion.innerHTML = `Tu número es demasiado grande`;
    candMayorCercano.innerHTML = juego.candidatoMayorCercano;
  }
}

// Mostrar mensaje de volver a jugar
function volverAJugar() {
  displayGame.style.display = "none";
  again.style.display = "flex";
}

// Vuelve al juego en la nueva partida
function newPlay(id) {
  if (id == "si") {
    juegoNuevo();
    displayGame.style.display = "flex";
    again.style.display = "none";
  } else {
    displayGame.style.display = "flex";
    again.style.display = "none";
  }
}

// Esta funcion setea todo a 0 para volver a jugar
function juegoNuevo() {
  juego.numeroSecreto = juego.generaNumero();
  retroalimentacion.innerHTML = "";
  candMenorCercano.innerHTML = "?";
  candMayorCercano.innerHTML = "?";
  displayNumSecreto.innerHTML = "?";
  numCandidato.value = "";
}
