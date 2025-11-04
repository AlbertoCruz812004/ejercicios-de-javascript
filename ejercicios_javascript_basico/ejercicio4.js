//4. Mostrar en consola el promedio de 5 calificaciones (con ciclos)

const VALUE_BY_DEFAULT = "7,8,6,5,9";
const input = prompt(
  "Ingresa 5 calificaciones separadas por coma: ",
  VALUE_BY_DEFAULT,
);

const calificaciones = input.split(",");

let promedio = 0;

for (const calificacion of calificaciones) {
  promedio += Number(calificacion);
}

console.log(`El promedio de las calificaciones es: ${promedio / 5}`);
