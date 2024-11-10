/*
Bucle for-of en JavaScript

El bucle for-of permite recorrer objetos iterables (como arrays o strings) de manera sencilla.

Sintaxis:
for (variable of iterable) {
    // Código a ejecutar en cada iteración
}
*/

// Ejemplo de bucle for-of que recorre un array de frutas
let canasta = ["manzana", "pera", "naranja", "uva"];

// Recorre cada elemento del array 'canasta'
for (let fruta of canasta) {
    console.log(fruta); // Imprime cada fruta en la consola
}

// Explicación detallada:
// 1. 'let fruta of canasta':
//    - Declara una variable `fruta` que tomará el valor de cada elemento del array `canasta` en cada iteración.
// 2. 'console.log(fruta)':
//    - En cada iteración, se imprime el valor actual de `fruta` en la consola.
