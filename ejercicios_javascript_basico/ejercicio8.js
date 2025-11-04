//8. Escribe un script que pida un número y diga si es o no divisible por 2

const input = prompt("Ingresa un numero: ");

const value = Number(input);

if (value % 2 === 0) {
  console.log(`El numero ${value} es divisible entre 2`);
} else {
  console.log(`El numero ${value} no es divisible entre 2`);
}
