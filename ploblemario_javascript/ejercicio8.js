// Usa Math.random() y Math.round() para generar dos números del 1 al 6.
// Suma ambos y muestra el resultado.
// Repite el lanzamiento 5 veces con un for.

console.log("Lanzemos los dados");

const { round, random } = Math;
let dado1, dado2;

// Genera un número aleatorio entre 1 y 6
const rollTheDice = () => round(random() * 5) + 1;

for (let index = 1; index <= 5; index++) {
  dado1 = rollTheDice();
  dado2 = rollTheDice();
  console.log(`Tirada ${index}: ${dado1} - ${dado2}`);
}
