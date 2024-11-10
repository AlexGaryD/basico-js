// Ejecución condicional: if

/*
Estructura de control if:
if (condición) {
    // Código a ejecutar si la condición se cumple
} else if (otraCondición) {
    // Código a ejecutar si la otra condición se cumple
} else {
    // Código a ejecutar si ninguna de las condiciones anteriores se cumple
}
*/

// Ejemplos:

let nombre = "Gary";

// Ejemplo básico de if-else if-else
if (nombre === "Alex") {
    console.log("Hola Alex");
} else if (nombre === "Gary") {
    console.log("Hola Gary"); // Este mensaje se mostrará
} else {
    console.log("Hola desconocido");
}

// Ejemplo con números
let edad = 25;

if (edad < 18) {
    console.log("Eres menor de edad");
} else if (edad >= 18 && edad < 65) {
    console.log("Eres adulto"); // Este mensaje se mostrará
} else {
    console.log("Eres mayor de edad");
}

// Ejemplo con booleanos
let esEstudiante = true;

if (esEstudiante) {
    console.log("Eres estudiante"); // Este mensaje se mostrará
} else {
    console.log("No eres estudiante");
}