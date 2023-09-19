class Partida {
  // Atributos
  numeroSecreto;
  candidatoMenorCercano;
  candidatoMayorCercano;
  // Atributos para controlar primer intento
  firstMenor;
  firstMayor;

  // Método constructor
  constructor() {
    this.numeroSecreto = this.generaNumero();
    this.candidatoMayorCercano = this.numeroSecreto;
    this.candidatoMenorCercano = this.numeroSecreto;
    this.firstMayor = true;
    this.firstMenor = true;
  }

  // Métodos
  generaNumero() {
    return Math.floor(Math.random() * 50);
  }

  // Va a devolver: 1 si es mayor, 0 si es el numero y -1 si es menor
  compruebaNumero(candidato) {
    let result;
    if (candidato == this.numeroSecreto) {
      result = 0;
    } else if (candidato < this.numeroSecreto) {
      result = -1;
      if (this.firstMenor) {
        this.candidatoMenorCercano = candidato;
        this.firstMenor = false;
      } else if (candidato > this.candidatoMenorCercano) {
        this.candidatoMenorCercano = candidato;
      }
    } else {
      result = 1;
      if (this.firstMayor) {
        this.candidatoMayorCercano = candidato;
        this.firstMayor = false;
      } else if (candidato < this.candidatoMayorCercano) {
        this.candidatoMayorCercano = candidato;
      }
    }

    return result;
  }
}
