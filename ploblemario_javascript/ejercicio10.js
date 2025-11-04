// Genera un número aleatorio entre 1 y 100.
// Muestra el número y si es par o impar.
// Repite 10 veces usando un for.

const { random, round } = Math;
let randomNumber, message;

for (let index = 1; index <= 10; index++) {
  randomNumber = round(random() * 99) + 1; // Número entre 1 y 100
  message = randomNumber % 2 === 0 ? "par" : "impar";
  console.log(`${randomNumber} es ${message}`);
}
