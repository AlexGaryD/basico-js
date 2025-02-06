// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// map()
// El método map() crea un nuevo array con los resultados de llamar a una función proporcionada
//  en cada elemento del array original.

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num); // Crea un nuevo array con los cuadrados de los números

console.log(numbers); // Imprime el array original: [1, 2, 3, 4, 5]
console.log(squaredNumbers); // Imprime el nuevo array: [1, 4, 9, 16, 25]

// forEach()
// El método forEach() ejecuta una función proporcionada una vez por cada elemento del array.

const colors = ['red', 'pink', 'blue'];
const iteratedColors = colors.forEach(color => console.log(color)); // Imprime cada color en la consola

console.log(colors); // Imprime el array original: ['red', 'pink', 'blue']
console.log(iteratedColors); // Imprime undefined ya que forEach() no retorna un nuevo array

// Exercise: Fahrenheit to Celsius conversion
// Ejercicio: Conversión de Fahrenheit a Celsius con map()

const temperaturesInFahrenheit = [32, 68, 95, 104, 212];

const temperaturesInCelsius = temperaturesInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit - 32)); // Convierte
//  cada temperatura de Fahrenheit a Celsius

console.log('Temperatures In Fahrenheit: ', temperaturesInFahrenheit); // Imprime las temperaturas en Fahrenheit
console.log('Temperatures In Celsius: ', temperaturesInCelsius); // Imprime las temperaturas convertidas a Celsius

// Exercise: Sum of Elements in an Array
// Ejercicio: Suma de elementos en un array

const newNumbers = [1, 2, 3, 4, 5];

let sum = 0;

newNumbers.forEach(number => {
  sum += number; // Suma cada número del array a la variable sum
});

console.log('Array of Numbers: ', newNumbers); // Imprime el array original: [1, 2, 3, 4, 5]
console.log('Sum of Numbers: ', sum); // Imprime la suma de los números: 15
