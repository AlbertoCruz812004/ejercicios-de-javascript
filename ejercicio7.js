//7. Mostrar la tabla de un numero dado por el usuario:
// por ejemplo 5
// 1 x 5 = 5
// 2 x 5 = 10

const input = prompt("Ingresa el numero de la tabla que deseas: ");

const value = Number(input);

for (let index = 1; index <= 10; index++) {
  console.log(`${index} x ${value} = ${index * value}`);
}
