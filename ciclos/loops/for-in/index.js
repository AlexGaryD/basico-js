/*
Bucle for-in en JavaScript

El bucle for-in permite recorrer las propiedades enumerables de un objeto.

Sintaxis:
for (variable in objeto) {
    // Código a ejecutar en cada iteración
}
*/

// Ejemplo de bucle for-in que recorre un objeto de lista de compras
const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1,
};

// Recorre cada propiedad del objeto 'listaDeCompras'
for (let fruta in listaDeCompras) {
    console.log(`Fruta: ${fruta}, Cantidad: ${listaDeCompras[fruta]}`);
}

for (fruta in listaDeCompras) {
  console.log(fruta);
}

for (fruta in listaDeCompras) {
  console.log(`${fruta}:) Cantidad ${listaDeCompras[fruta]}`);
}
/*
El resultado de este código sería:
Fruta: manzana, Cantidad: 5
Fruta: pera, Cantidad: 3
*/
// Explicación detallada:
// 1. 'let fruta in listaDeCompras':
//    - Declara una variable `fruta` que tomará el nombre de cada propiedad del objeto `listaDeCompras` en cada iteración.
// 2. 'console.log(`Fruta: ${fruta}, Cantidad: ${listaDeCompras[fruta]}`)':
//    - En cada iteración, se imprime el nombre de la propiedad (`fruta`) y su valor correspondiente (`listaDeCompras[fruta]`) en la consola.
