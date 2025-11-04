// Pide un número n y calcula n^n usando Math.pow().
// Si el resultado supera 1000, muestra “número muy grande”.

const input = prompt("Por favor, ingresa un número:");
const number = Number(input);

const result = Math.pow(number, number);
console.log(`${number}^${number} = ${result}`);

if (result > 1000) console.log("número muy grande");
