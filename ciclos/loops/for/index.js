// Bucle for en JavaScript

/*
Estructura del bucle for:
for (inicialización; variable; condición; incremento) {
    // Código a ejecutar en cada iteración
}
*/

// Ejemplo de bucle for que recorre una lista de tareas
let lista = ["comer", "dormir", "programar", "repetir"];

// Inicialización: let i = 0; (inicia el contador en 0)
// Condición: i < lista.length; (mientras i sea menor que la longitud de la lista)
// Incremento: i++ (incrementa el contador en 1 en cada iteración)
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]); // Imprime cada elemento de la lista
}


// Explicación detallada:
// 1. Inicialización: let i = 0;
//    - Se declara una variable `i` y se inicializa en 0.
// 2. Condición: i < lista.length;
//    - El bucle continúa ejecutándose mientras `i` sea menor que la longitud de la lista.
// 3. Incremento: i++;
//    - Después de cada iteración, `i` se incrementa en 1.
// 4. Código a ejecutar: console.log(lista[i]);
//    - En cada iteración, se imprime el elemento actual de la lista.
