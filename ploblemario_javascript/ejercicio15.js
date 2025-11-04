// Pide una cantidad inicial y usa un for para simular 12 meses.
// Cada mes aumenta 5% el monto acumulado.
// Muestra el saldo de cada mes y el total final.

const input = prompt("Por favor, ingresa la cantidad inicial:");
let initialAmount = Number(input);

for (let month = 1; month <= 12; month++) {
  initialAmount += initialAmount * 0.05;
  console.log(`En el mes ${month}, el saldo es: ${initialAmount.toFixed(2)}`);
}

console.log(`Monto final después de 12 meses: ${initialAmount.toFixed(2)}`);
