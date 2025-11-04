//10. capturar la edad y solo mostrar los que son mayor de edad y terminar hasta
//que encuentres una edad de 50 y hayas mostrado al menos 10 .

let count = 0,
  age;
let hasFifty = false;

/**
 * Bucle principal que solicita edades hasta cumplir dos condiciones:
 * 1. Haber procesado al menos 10 personas mayores de edad
 * 2. Que al menos una persona tenga 50 años
 *
 * Solo cuenta y muestra las edades >= 18 años
 */
while (true) {
  age = Number(prompt("Ingresa tu edad: "));

  if (age >= 18) {
    console.log(age);
    count++;

    if (age === 50) hasFifty = true;
  }

  // Sale del bucle cuando tiene 10 mayores de edad Y encontró un 50
  if (hasFifty && count >= 10) {
    break;
  }
}
