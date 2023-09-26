import { GAME } from "./modules/game.js";

let userNumber = document.getElementById("userNumber");
let displayNum = document.getElementById("displayNumSecreto");
let retroAlimentacion = document.getElementById("retroAlimentacion");
let checkTry = document.getElementById("checkTry");
let again = document.getElementById("again");

let juego = new GAME.game();

checkTry.onclick = function () {
  retroAlimentacion.innerHTML = juego.checkNumber(userNumber.value);
  if (retroAlimentacion.innerHTML === "Felicidades, has ganado.") {
    displayNum.innerHTML = juego.randomNumber;
    again.style.visibility = "visible";
  }
};

again.onclick = function () {
  userNumber.value = "";
  displayNum.innerHTML = "?";
  retroAlimentacion.innerHTML = "";
  juego = new GAME.game();
  again.style.visibility = "hidden";
};
