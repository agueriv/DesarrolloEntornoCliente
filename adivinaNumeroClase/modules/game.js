let GAME = {};

GAME.game = class Game {
  constructor() {
    this.randomNumber = Math.floor(Math.random() * 11);
  }

  checkNumber(userNumber) {
    if (userNumber < this.randomNumber) {
      return "Tu número es menor.";
    } else if (userNumber > this.randomNumber) {
      return "Tu número es mayor.";
    } else {
      return "Felicidades, has ganado.";
    }
  }
};

export { GAME };
