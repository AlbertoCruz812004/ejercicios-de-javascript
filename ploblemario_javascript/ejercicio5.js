// Usa un for del 1 al 30:
// - Si el número es múltiplo de 5 → imprime “Múltiplo de 5”.
// - Si es par → imprime “Par”.
// - Si no cumple nada → imprime el número.

for (let index = 1; index <= 30; index++) {
  if (index % 5 === 0) {
    console.log("multiplo de 5");
    continue;
  }

  if (index % 2 === 0) {
    console.log("Par");
    continue;
  }

  console.log(index);
}
