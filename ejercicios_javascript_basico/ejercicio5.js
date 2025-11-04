//5. Capturar la calificaciones de alumnos y cuando alguien tenga 10,
//mostrar en consola una felicitacion y terminar.

let hasTen = false;
let input = null,
  calification = null;

do {
  input = prompt("Ingresa tu calificacion: ");
  calification = Number(input);

  hasTen = calification === 10;
  if (hasTen) {
    console.log("Felicitaciones por obtener 10");
    continue;
  }

  console.log(`Tu calificacion es de ${calification}`);
} while (!hasTen);
