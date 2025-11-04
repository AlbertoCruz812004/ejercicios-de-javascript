// Usa un do...while para generar números aleatorios entre 1 y 50.
// Detén el ciclo cuando salga un múltiplo de 7 y muestra cuántos intentos se necesitaron.

const { random, round } = Math;
let attempts = 0;
let randomNumber;

do {
  randomNumber = round(random() * 49) + 1; // evita producir el 0
  attempts++;
} while (randomNumber % 7 !== 0);

console.log(
  `Se necesitaron ${attempts} intentos para obtener el múltiplo de 7: ${randomNumber}`,
);
