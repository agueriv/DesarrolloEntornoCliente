// Las funciones de un módulo que tienen la orden "export" son las que podemos usar fuera del módulo
export function sumar(x, y) {
  return x + y;
}

export function restar(x, y) {
  return x - y;
}

export { sumar, restar };
