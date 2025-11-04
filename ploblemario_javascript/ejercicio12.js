// Genera 5 calificaciones aleatorias entre 50 y 100.
// Cuenta cuántas son aprobatorias (>=70) y cuántas reprobadas.
// Usa un for y if.

const { random, round } = Math;
let randomNumber,
  passedCount = 0,
  failedCount = 0;

for (let index = 1; index <= 5; index++) {
  randomNumber = round(random() * 50) + 50; // Número entre 50 y 100
  console.log(`Calificación ${index}: ${randomNumber}`);

  if (randomNumber >= 70) {
    passedCount++;
    continue;
  }

  failedCount++;
}

console.log(`Total de calificaciones aprobatorias: ${passedCount}`);
console.log(`Total de calificaciones reprobadas: ${failedCount}`);
