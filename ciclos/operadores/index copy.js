/*
Operadores de comparación
*/

// Igualdad débil (==): Compara dos valores para ver si son iguales después de realizar una conversión de tipo si es necesario.
console.log(5 == '5'); // true

// Igualdad estricta (===): Compara dos valores para ver si son iguales sin realizar ninguna conversión de tipo.
console.log(5 === '5'); // false

// Desigualdad débil (!=): Compara dos valores para ver si son diferentes después de realizar una conversión de tipo si es necesario.
console.log(5 != '5'); // false

// Desigualdad estricta (!==): Compara dos valores para ver si son diferentes sin realizar ninguna conversión de tipo.
console.log(5 !== '5'); // true

// Mayor que (>): Compara dos valores para ver si el primero es mayor que el segundo.
console.log(5 > 3); // true

// Menor que (<): Compara dos valores para ver si el primero es menor que el segundo.
console.log(5 < 3); // false

// Mayor o igual que (>=): Compara dos valores para ver si el primero es mayor o igual que el segundo.
console.log(5 >= 5); // true

// Menor o igual que (<=): Compara dos valores para ver si el primero es menor o igual que el segundo.
console.log(5 <= 3); // false

//Ejemplos

const a = 10;
const b = 20;
const c = "10"

a == b;