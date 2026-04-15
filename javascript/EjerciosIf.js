/* Ejercicio 1: if simple
Declara una variable edad y muestra por consola "Es mayor de edad" si es mayor o igual a 18. */
let edad = 19;
if (edad >= 18) {
  console.log("Es mayor de edad");
}

/* Ejercicio 2: if...else
Declara una variable nota y muestra "Aprobado" si es mayor o igual a 6, y "Desaprobado" en caso contrario. */

let nota = 4;
if (nota >= 6) {
  console.log("Aprobado");
} else {
  console.log("Desaprobado");
}

/* Ejercicio 3: if anidado
Declara una variable usuario y password. Si el usuario es "admin" y el password es "1234", muestra "Acceso concedido", si no, muestra "Acceso denegado".*/
let usuario = "Admin";
let password = 1234;
if ((usuario === "Admin") & (password === 1234)) {
  console.log("Acceso concedido");
} else {
  console.log("Acceso denegado");
}

/* Ejercicio 4: Operador ternario
Declara una variable numero y usa el operador ternario para mostrar "Par" si es par o "Impar" si es impar.*/
let numero = 4;
let resultado = numero % 2 === 0 ? "Par" : "Impar";
console.log(resultado);

/* Ejercicio 5: switch case
Declara una variable dia (número del 1 al 3) y usa switch para mostrar "Lunes", "Martes" o "Miércoles" según corresponda. Si no es ninguno de esos valores, muestra "Otro día".*/
let dia = "2";
switch (dia) {
  case "1":
    console.log("Es lunes");
    break;
  case "2":
    console.log("Es Martes");
    break;
  case "3":
    console.log("Es miercoles");
    break;
  default:
    console.log("Es otro dia");
}
/* Ejercicio 6: Uso de booleanos para asignar un valor
Declara una variable edad y otra variable esMayor que sea true si la edad es mayor o igual a 18, o false en caso contrario. Muestra el valor de esMayor por consola.*/
let edad1 = 19;
let Esmayor = edad >= 18;
console.log(Esmayor);
