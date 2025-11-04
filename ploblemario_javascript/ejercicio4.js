// Pide un número positivo y muestra su raíz cuadrada con 2 decimales.
// Si el número es negativo, muestra un mensaje de error usando if.

let input,
  number,
  isPositive = true;

do {
  input = prompt("Ingresa un numero positivo");
  number = Number(input);

  if (number < 0) {
    console.log("ERROR: No puedes ingresar numeros negativos");
    continue;
  }

  isPositive = false;
} while (isPositive);

const raiz = Math.sqrt(number);

console.log(`Su raiz cuadrada es de ${raiz.toFixed(2)}`);
