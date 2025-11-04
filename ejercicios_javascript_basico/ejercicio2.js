//2. Pedir 3 números y mostrar en consola quien es el mayor y quien el menor.

let array = [];
let input = null;
let flag = false;

/**
 * Función comparadora para ordenar números de forma ascendente
 * @param {number} a - Primer número a comparar
 * @param {number} b - Segundo número a comparar
 * @returns {number} -1 si a < b, 0 si a === b, 1 si a > b
 */
const compare = (a, b) => {
  if (a < b) return -1;
  if (a == b) return 0;
  return 1;
};

do {
  if (flag) console.log("Por favor sigue las indicaciones");

  input = prompt("Ingresa tres numeros separados por coma: ");
  array = input.split(",");

  flag = array.length !== 3;
} while (flag);

/**
 * Convierte los strings a números y los ordena de menor a mayor
 */
const numbers = array.map((number) => Number(number)).sort(compare);
console.log(numbers);

console.log("El numero mayor es: ", numbers[2]);
console.log("El numero menor es: ", numbers[0]);
