// Usa un for del 1 al 50.
// Muestra los números impares y si alguno es múltiplo de 3, imprime un mensaje especial.

for (let index = 1; index <= 50; index++) {
  if (index % 2 !== 0) {
    console.log(`Numero impar: ${index}`);
    if (index % 3 === 0) console.log(`Tambien es multiplo de tres`);
  }
}
