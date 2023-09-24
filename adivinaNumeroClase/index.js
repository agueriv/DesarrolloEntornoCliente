userNumber = document.getElementById("userNumber");
displayNum = document.getElementById("displayNumSecreto");
retroAlimentacion = document.getElementById("retroAlimentacion");
checkTry = document.getElementById("checkTry");
again = document.getElementById("again");

juego = new Game();

function comprobarNum() {
  retroAlimentacion.innerHTML = juego.checkNumber(userNumber.value);
  if (retroAlimentacion.innerHTML === "Felicidades, has ganado.") {
    displayNum.innerHTML = juego.randomNumber;
    again.style.visibility = "visible";
  }
}

function nuevaPartida() {
  userNumber.value = "";
  retroAlimentacion.innerHTML = "";
}
