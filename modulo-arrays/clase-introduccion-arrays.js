// Introducción a Arrays

// Un array es una estructura de datos que permite almacenar múltiples valores en una sola variable.
// Los arrays pueden contener elementos de cualquier tipo de datos, incluyendo números, strings, objetos
//  y otros arrays.

// 1. Crear un array usando new Array() o Array()

const fruits = Array('apple', 'banana', 'orange'); // Crea un array con tres elementos con strings
console.log(fruits);

const justOneNumber = Array(12); // Crea un array con un solo elemento: el número 12 no se tiene un resultado esperado
console.log(justOneNumber);

const number = Array(1, 2, 3, 4, 5); // Crea un array con cinco elementos
console.log(number);

// 2. Array literal sintaxis Crear un array usando la sintaxis literal de array

const oneNumber = [4]; // Crea un array con un solo elemento: el número 4
console.log(oneNumber);

const emptyArray = []; // Crea un array vacío
console.log(emptyArray);

const sports = ['soccer', 'tennis', 'rugby']; // Crea un array con tres elementos
console.log(sports);

const recipeIngredients = [
  'Flour', // String
  true, // Boolean
  2, // Number
  { ingredient: 'Milk', quantity: '1 cup' }, // Object
  false // Boolean
]; // Crea un array con elementos de diferentes tipos de datos
console.log(recipeIngredients);

// Accessing array elemenys Acceder a los elementos de un array

const firstFruit = fruits[0]; // Accede al primer elemento del array 'fruits'
console.log(firstFruit);
const secondsports = sports[1]; // Accede al segundo elemento del array 'sports'
console.log(secondsports); // Imprime el segundo elemento del array 'sports'


// Propiedad length

const numberOfFruits = fruits.length; // Obtiene la longitud del array 'fruits'
console.log(numberOfFruits);
const numberOfSports = sports.length; // Obtiene la longitud del array 'sports'
console.log(numberOfSports);  // Imprime la longitud del array 'sports'

// Mutabilidad

fruits.push('watermelon'); // Agrega un nuevo elemento al final del array 'fruits'
console.log(fruits);
fruits.unshift('grape'); // Agrega un nuevo elemento al principio del array 'fruits'
console.log(fruits);
fruits[1] = 'kiwi'; // Modifica el segundo elemento del array 'fruits'
console.log(fruits);
fruits.pop(); // Elimina el último elemento del array 'fruits'
console.log(fruits); // Imprime el array 'fruits' sin el último elemento
fruits.shift(); // Elimina el primer elemento del array 'fruits'
console.log(fruits); // Imprime el array 'fruits' sin el primer elemento
sports.splice(1, 1); // Elimina el segundo elemento del array 'sports'
console.log(sports); // Imprime el array 'sports' sin el segundo elemento
sports.splice(1, 0, 'basketball'); // Agrega un nuevo elemento en la posición 1 del array 'sports'
console.log(sports); // Imprime el array 'sports' con el nuevo elemento
sports.splice(1, 1, 'volleyball'); // Reemplaza el elemento en la posición 1 del array 'sports'
console.log(sports); // Imprime el array 'sports' con el elemento reemplazado
sports.splice(0, 2); // Elimina los dos primeros elementos del array 'sports'
console.log(sports); // Imprime el array 'sports' sin los dos primeros elementos
sports.splice(0); // Elimina todos los elementos del array 'sports'
console.log(sports); // Imprime el array 'sports' vacío
sports.push('soccer', 'tennis', 'rugby'); // Agrega tres nuevos elementos al array 'sports'
console.log(sports); // Imprime el array 'sports' con los nuevos elementos
sports.length = 2; // Modifica la longitud del array 'sports' a 2
console.log(sports); // Imprime el array 'sports' con solo dos elementos
sports.length = 0; // Modifica la longitud del array 'sports' a 0
console.log(sports); // Imprime el array 'sports' vacío
sports.length = 3; // Modifica la longitud del array 'sports' a 3
console.log(sports); // Imprime el array 'sports' con tres elementos
sports.length = 5; // Modifica la longitud del array 'sports' a 5
console.log(sports); // Imprime el array 'sports' con cinco elementos
sports.length = 0; // Modifica la longitud del array 'sports' a 0
console.log(sports); // Imprime el array 'sports' vacío
sports.length = 3; // Modifica la longitud del array 'sports' a 3
console.log(sports); // Imprime el array 'sports' con tres elementos
sports.length = 2; // Modifica la longitud del array 'sports' a 2
console.log(sports); // Imprime el array 'sports' con solo dos elementos
sports.pop(); // Elimina el último elemento del array 'sports'
console.log(sports);  // Imprime el array 'sports' sin el último elemento

// Inmutabilidad

const newFruits = fruits.concat(['grape', 'kiwi']); // Crea un nuevo array concatenando 'fruits' con otros elementos
console.log(fruits); // El array original 'fruits' no se modifica
console.log(newFruits); // Se imprime el nuevo array 'newFruits'

// Verificar si una variable es un array con Array.isArray()

const isArray = Array.isArray(fruits); // Verifica si 'fruits' es un array
console.log(isArray);

// Ejercicio práctico: sumar todos los elementos de un array

const numbersArray = [1, 2, 3, 4, 5]; // Crea un array con cinco elementos
let sum = 0; // Inicializa una variable para almacenar la suma

for (let i = 0; i < numbersArray.length; i++) {
  sum += numbersArray[i]; // Suma cada elemento del array a la variable 'sum'
}

console.log(sum); // Imprime la suma de todos los elementos del array
