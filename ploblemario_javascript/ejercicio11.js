// Pide un número positivo.
// Usa un while para dividirlo entre 10 hasta que sea menor que 1, contando los pasos.

const input = prompt("Por favor, ingresa un número positivo:");
let number = Number(input);
let counter = 0;

while (number >= 1) {
  number /= 10;
  console.log(number);
  counter++;
}

console.log(
  `Se realizaron ${counter} divisiones entre 10 hasta que el número fue menor que 1.`,
);
