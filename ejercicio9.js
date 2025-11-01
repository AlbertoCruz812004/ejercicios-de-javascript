//9 mostrar los numero pares que hay del dentro de un rango
//de numero dados y también cuantos pares e impares se encontraron

/**
 * Valores por defecto para el rango de números a analizar
 */
const VALUES_BY_DEFAULT = { START: "1", END: "100" };

const inputStartRange = prompt(
  "Ingresa el numero desde donde deseas empezar: ",
  VALUES_BY_DEFAULT.START,
);

const inputEndRange = prompt(
  "Ingresa el numero desde donde deseas terminar: ",
  VALUES_BY_DEFAULT.END,
);

let par = 0;
let impar = 0;

const start = Number(inputStartRange);
const end = Number(inputEndRange);

/**
 * Itera sobre el rango [start, end] contando pares e impares
 * Utiliza el operador módulo para determinar la paridad de cada número
 */
for (let index = start; index <= end; index++) {
  if (index % 2 === 0) {
    par += 1;
    continue;
  }

  impar += 1;
}

console.log(`Se encontraron ${par} numeros pares y ${impar} numeros impares`);
