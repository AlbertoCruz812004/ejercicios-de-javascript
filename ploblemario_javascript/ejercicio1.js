// Genera un número aleatorio del 1 al 10 y pide al usuario adivinarlo.
// Indica si su número es mayor o menor al número secreto, hasta que acierte.
// Usa while y Math.random().

const { random, round } = Math;

const numberMagic = round(random() * 9) + 1;
let number = 0;

let input;

do {
  input = prompt("Adivina el numero secreto: ");
  number = Number(input);

  if (number < numberMagic) {
    console.log("Tu numero es menor");
    continue;
  }

  if (number > numberMagic) {
    console.log("Tu numero es mayor");
    continue;
  }

  break;
} while (true);

console.log(`Felicidades el numero es ${numberMagic}`);
