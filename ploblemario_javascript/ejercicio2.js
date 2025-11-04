// Pide un número N y usa un for para sumar solo los números pares entre 1 y N.
// Imprime el total y cuántos pares hubo.

const input = prompt("Ingresa un numero al azar mayor a 1");
const number = Number(input);
let acumulator = 0,
  count = 0;

for (let index = 1; index <= number; index++) {
  if (index % 2 == 0) {
    acumulator += index;
    count++;
  }
}

console.log(`La suma total fue de ${acumulator}`);
console.log(`Hubo ${count} numeros pares`);
