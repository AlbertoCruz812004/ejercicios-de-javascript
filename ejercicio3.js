//3. Dada la edad capturada decir si es niño, adulto o anciano

const input = prompt("Ingresa tu edad: ");

function clasificarPorEdad(age) {
  if (age < 0) return "Entrada invalida";

  if (age <= 12) return "Eres un niño";

  if (age <= 25) return "Eres un joven";

  if (age <= 60) return "Eres un adulto";

  return "Eres un anciano";
}

console.log(clasificarPorEdad(input));
