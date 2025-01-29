/*
Bucle while en JavaScript

El bucle while permite ejecutar un bloque de código repetidamente mientras una condición especificada sea verdadera.

Sintaxis:
while (condición) {
    // Código a ejecutar en cada iteración
}
*/

// Ejemplo de bucle while que cuenta del 0 al 9
let contador = 0;

// Mientras la condición (contador < 10) sea verdadera, el bucle se ejecutará
while (contador < 300) {
    console.log(contador); // Imprime el valor actual de contador
    contador++; // Incrementa el valor de contador en 1
}

// Explicación detallada:
// 1. Inicialización: let contador = 0;
//    - Se declara una variable `contador` y se inicializa en 0.
// 2. Condición: contador < 10;
//    - El bucle continúa ejecutándose mientras `contador` sea menor que 10.
// 3. Código a ejecutar: console.log(contador);
//    - En cada iteración, se imprime el valor actual de `contador` en la consola.
// 4. Incremento: contador++;
//    - Después de cada iteración, `contador` se incrementa en 1.
