// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// filter()
// El método filter() crea un nuevo array con todos los elementos que pasan la prueba implementada
// por la función proporcionada.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0); // Filtra los números pares del array

console.log(numbers); // Imprime el array original: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(evenNumbers); // Imprime el nuevo array con números pares: [2, 4, 6, 8, 10]

// reduce() - caso 1
// El método reduce() ejecuta una función reductora sobre cada elemento del array, devolviendo como
//  resultado un único valor.

const numbersReduce = [1, 2, 3, 4, 5];
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Suma todos
//  los elementos del array

console.log(numbersReduce); // Imprime el array original: [1, 2, 3, 4, 5]
console.log(sum); // Imprime la suma de los elementos: 15

// reduce() - caso 2
// El método reduce() también se puede usar para contar la frecuencia de elementos en un array.

const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye'];

const wordFrequency = words.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++; // Incrementa el contador si la palabra ya existe en el acumulador
  } else {
    accumulator[currentValue] = 1; // Inicializa el contador si la palabra no existe en el acumulador
  }
  return accumulator;
}, {}); // El acumulador se inicializa como un objeto vacío

console.log(wordFrequency); // Imprime la frecuencia de cada palabra: { apple: 1, banana: 2, hello: 1, bye: 3 }

// Exercise: Passing Grade Average
// Ejercicio: Promedio de calificaciones aprobatorias

const grades = [85, 92, 60, 78, 95, 66, 88, 50, 94];

const passingGrades = grades.filter(grade => grade >= 70); // Filtra las calificaciones aprobatorias (>= 70)

const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length; // Calcula el promedio de las calificaciones aprobatorias

console.log('Original Grades: ', grades); // Imprime las calificaciones originales
console.log('Passing Grades: ', passingGrades); // Imprime las calificaciones aprobatorias
console.log('Average Passing Grade: ', averagePassingGrade); // Imprime el promedio de las calificaciones aprobatorias