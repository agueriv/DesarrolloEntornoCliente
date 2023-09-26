// Para poder usar las funciones del modulo debemos de importarlas en el lugar donde vayamos a usarlas
import { sumar } from "./modulo1.js";

let titulo = document.getElementById("h1");
titulo.innerHTML = sumar(2, 3);

// Vamos a practicar con los namespaces
let namespacePrueba = {};
// Podemos almacenar dentro de un namespace muchos nombres que almacenar otras variables
namespacePrueba.persona1 = { nombre: "Pepe", edad: 18 };

console.log(
  "Hola me llamo " +
    namespacePrueba.persona1.nombre +
    " y tengo " +
    namespacePrueba.persona1.edad +
    " años."
);
