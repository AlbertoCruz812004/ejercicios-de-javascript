// Pide números al usuario con prompt dentro de un while.
// Cuando el usuario ingrese 0, termina el ciclo y muestra el promedio.

let input, number;
let acumulator = 0,
  count = 0;

do {
  input = prompt("Ingresa un numero: ");
  number = Number(input);

  acumulator += number;
  count++;
} while (number != 0);

count--;
const promedio = acumulator / count;

console.log(`El promedio de los numeros ingresados es ${promedio}`);
