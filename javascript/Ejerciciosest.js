//IF

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

//FOR

/*Ejercicio 1: for clásico
Utiliza un for para mostrar por consola los números del 1 al 5.*/

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

/*Ejercicio 2: while
Usa un while para mostrar por consola los números del 5 al 1 (en orden descendente).*/

let numerow = 5;
while (numerow >= 1) {
  console.log(numerow);
  numerow--;
}

/*Ejercicio 3: do...while
Usa un do...while para mostrar por consola los números del 1 al 3.*/

let numerosdw = 1;
do {
  console.log(numerosdw);
  numerosdw++;
} while (numerosdw <= 3);

/*Ejercicio 4: Recorrer un array con for...of
Crea un array animales con "perro", "gato" y "loro". Usa for...of para mostrar cada animal por consola.*/

const animales = ["perro", "gato", "loro"];
for (const animal of animales) {
  console.log(animal);
}

//ARRAYS

/* Ejercicio 1: Acceder y modificar elementos
Crea un array llamado frutas con los valores "manzana", "banana" y "pera". Cambia el valor "banana" por "naranja" y muestra el array por consola.*/

let frutas = ["manzana", "banana", "pera"];
frutas[1] = "naranja";
console.log(frutas);

/* Ejercicio 2: Métodos push y pop
Crea un array numeros con los valores 1, 2 y 3. Agrega el número 4 al final y luego elimina el último elemento. Muestra el array final por consola.*/

let numerosa = [1, 2, 3];
numerosa.push(4);
numerosa.pop();
console.log(numerosa);

/* Ejercicio 3: Concatenar arrays
Crea dos arrays: animales1 con "perro" y "gato", y animales2 con "loro" y "pez". Une ambos arrays en uno solo llamado animales y muéstralo por consola.*/

let animales1 = ["perro", "gato"];
let animales2 = ["loro", "pez"];
let animalesu = animales1.concat(animales2);
console.log(animalesu);

/* Ejercicio 4: Dar vuelta un array
Crea un array numeros con los valores 1, 2, 3, 4, 5. Usa un método para invertir el orden de los elementos y muestra el resultado por consola.*/

let numerosinv = [1, 2, 3, 4, 5];
numerosinv.reverse();
console.log(numerosinv);

/* Ejercicio 5: Extraer una parte de un array
Crea un array colores con "rojo", "verde", "azul", "amarillo", "violeta". Usa slice para obtener un nuevo array con los elementos del índice 1 al 3 (sin incluir el 3) y muéstralo por consola*/

let colores = ["rojo", "verde", "azul", "amarillo", "violeta"];
let seleccol = colores.slice(1, 3);
console.log(seleccol);

/* Ejercicio 6: Recorrer un array y crear uno nuevo
Crea un array edades con los valores 10, 15, 20, 25. Usa map para crear un nuevo array llamado mayores que contenga true si la edad es mayor o igual a 18, y false si no. Muestra el resultado por consola.*/

let edades = [10, 15, 20, 25];
let mayorese = edades.map((edad) => edad >= 18);
console.log(mayorese);

/* Ejercicio 7: mostrar el doble de cada elemento de un array (forEach)
Crea un array numeros con los valores 2, 4, 6, 8. Usa forEach para mostrar el doble de cada número por consola. */

let numerosdob = [2, 4, 6, 8];
numerosdob.forEach((dobles) => {
  console.log(dobles * 2);
});

// OBJETOS
/*Ejercicio 1: Acceder a propiedades de un objeto
Crea un objeto llamado auto con las propiedades marca, modelo y año. Muestra por consola el modelo del auto.*/

const auto = {
  marca: "Fiat",
  modelo: "600",
  año: 1988,
};
console.log(auto.modelo);

/*Ejercicio 2: Modificar propiedades de un objeto
Crea un objeto persona con las propiedades nombre y edad. Cambia el valor de la edad y agrega una nueva propiedad profesion.*/

let persona = {
  nombre: "Juan",
  edad: 19,
};

persona.edad = 26;
persona.profesion = "Abogado";
console.log(persona);

/*Ejercicio 3: Destructuring de objetos
Dado el siguiente objeto libro, usa destructuring para extraer las propiedades titulo y autor en variables independientes.*/

let libro = {
  titulo: "Don Quijote de la Mancha",
  autor: "Miguel de Cervantes Saavedra",
  año: 1605,
};

let { titulo, autor } = libro;
console.log(titulo);
console.log(autor);

/* Ejercicio 4: Array de objetos
Crea un array llamado alumnos que contenga tres objetos, cada uno con las propiedades nombre y nota. Muestra por consola el nombre del alumno con la nota más alta.*/
let alumnos = [
  { nomrbre: "Lucas", nota: 8 },
  { nombre: "Florencia", nota: 7 },
  { nombre: "Pedro", nota: 9 },
];
let mejornot = alumnos[0];
for (let alumno of alumnos) {
  if (alumno.nota > mejornot.nota) {
    mejornot = alumno;
  }
}
console.log(mejornot.nombre);
