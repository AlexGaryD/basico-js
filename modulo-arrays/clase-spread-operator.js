// 1. Copying an Array
// El operador de propagación (...) permite copiar un array de manera sencilla.

const originalArray = [1, 2, 3, 4, 5];
const copyOfAnArray = [...originalArray]; // Crea una copia del array original

console.log(originalArray); // Imprime el array original: [1, 2, 3, 4, 5]
console.log(copyOfAnArray); // Imprime la copia del array: [1, 2, 3, 4, 5]

// 2. Combining Arrays
// El operador de propagación (...) permite combinar múltiples arrays en uno solo.

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2]; // Combina array1 y array2 en un solo array

console.log(array1); // Imprime el primer array: [1, 2, 3]
console.log(array2); // Imprime el segundo array: [4, 5, 6]
console.log(combinedArray); // Imprime el array combinado: [1, 2, 3, 4, 5, 6]

// 3. Creating Arrays with Additional Elements
// El operador de propagación (...) permite crear un nuevo array con elementos adicionales.

const baseArray = [1, 2, 3];
const arrayWithAdditionalElements = [...baseArray, 4, 5, 6]; // Crea un nuevo array con elementos adicionales

console.log(baseArray); // Imprime el array base: [1, 2, 3]
console.log(arrayWithAdditionalElements); // Imprime el nuevo array con elementos adicionales: [1, 2, 3, 4, 5, 6]

// 4. Pass elements to functions
// El operador de propagación (...) permite pasar elementos de un array como argumentos individuales a una función.

function sum(a, b, c) {
  return a + b + c; // Suma de los elementos
}
const numbers1 = [1, 2, 3];
const result1 = sum(...numbers1); // Pasa los elementos del array como argumentos individuales a la función sum

console.log(result1); // Imprime el resultado de la suma: 6

function rest(a, b, c) {
  return a - b - c; // Resta de los elementos
}
const numbers2 = [4, 5, 6];
const result2 = rest(...numbers2); // Pasa los elementos del array como argumentos individuales a la función rest
console.log(result2); // Imprime el resultado de la resta: -7

function mult(a, b, c) {
  return a * b * c; // Multiplicación de los elementos
}
const numbers3 = [7, 8, 9];
const result3 = mult(...numbers3); // Pasa los elementos del array como argumentos individuales a la función mult
console.log(result3); // Imprime el resultado de la multiplicación: 504

function div(a, b, c) {
  return a / b / c; // División de los elementos
}
const numbers4 = [10, 11, 12];
const result4 = div(...numbers4); // Pasa los elementos del array como argumentos individuales a la función div
console.log(result4); // Imprime el resultado de la división: 0.08333333333333333
