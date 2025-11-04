// Usa un while para calcular potencias de 2 (2^1, 2^2, 2^3 ...).
// Detente cuando la potencia sea mayor que 1000.

let result = 0;
let index = 1;

while (result <= 1000) {
  result = Math.pow(2, index);
  console.log(`2^${index} = ${result}`);
  index++;
}
