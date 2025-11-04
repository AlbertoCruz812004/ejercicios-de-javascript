// Pide el sueldo de un empleado.
// - Si es menor a 5000, aumenta 10%.
// - Si es de 5000 a 10000, aumenta 7%.
// - Si es mayor, aumenta 5%.
// Muestra el nuevo sueldo.

const input = prompt("Ingresa tu sueldo: ");
let salary = Number(input);

function increaseSalary(salary) {
  if (salary < 5000) return salary + salary * 0.1;

  if (salary <= 10000) return salary + salary * 0.07;

  return salary + salary * 0.05;
}

console.log(`Tu nuevo salario es de ${salary} a ${increaseSalary(salary)}`);
