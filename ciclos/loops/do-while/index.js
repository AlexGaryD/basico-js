/*
Bucle do-while en JavaScript

El bucle do-while permite ejecutar un bloque de código al menos una vez, 
y luego repetir la ejecución mientras una condición especificada sea verdadera.

Sintaxis:
do {
    // Código a ejecutar
} while (condición);
*/

// Ejemplo de bucle do-while que cuenta del 0 al 9
let contador = 0;

do {
    console.log(contador); // Imprime el valor actual de contador
    contador++; // Incrementa el valor de contador en 1
} while (contador < 10);

// Ejemplo interactivo con prompt
let numero;

do {
    numero = parseInt(prompt("Introduce un número mayor que 10:"));
    if (isNaN(numero)) {
        console.log("Por favor, introduce un número válido.");
    } else if (numero <= 10) {
        console.log("El número debe ser mayor que 10.");
    }
} while (isNaN(numero) || numero <= 10);

console.log(`Has introducido el número: ${numero}`);

// Explicación detallada:
// 1. Inicialización: let contador = 0;
//    - Se declara una variable `contador` y se inicializa en 0.
// 2. Código a ejecutar: console.log(contador);
//    - En cada iteración, se imprime el valor actual de `contador` en la consola.
// 3. Incremento: contador++;
//    - Después de cada iteración, `contador` se incrementa en 1.
// 4. Condición: contador < 10;
//    - El bucle continúa ejecutándose mientras `contador` sea menor que 10.

// En el ejemplo interactivo:
// 1. Se solicita al usuario que introduzca un número mayor que 10.
// 2. Si el número no es válido o es menor o igual a 10, se muestra un mensaje y se repite la solicitud.
// 3. El bucle se detiene cuando el usuario introduce un número válido mayor que 10.
