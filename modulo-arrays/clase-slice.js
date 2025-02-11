// slice() El método slice() devuelve una copia superficial de una porción de un array en un nuevo array.
//No modifica el array original.


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(2)) // Crea una copia del array desde el índice 2 hasta el final
// Imprime: ['camel', 'duck', 'elephant']

console.log(animals.slice(2, 4)) // Crea una copia del array desde el índice 2 hasta el índice 4 (sin incluirlo)
// Imprime: ['camel', 'duck']

console.log(animals.slice(1, 6)) // Crea una copia del array desde el índice 1 hasta el índice 6 (sin incluirlo)
// Imprime: ['bison', 'camel', 'duck', 'elephant']

console.log(animals.slice(-2)) // Crea una copia del array desde el segundo índice desde el final hasta el final
// Imprime: ['duck', 'elephant']

console.log(animals.slice(2, -1)) // Crea una copia del array desde el índice 2 hasta el penúltimo índice
// Imprime: ['camel', 'duck']

console.log(animals.slice()) // Crea una copia completa del array
// Imprime: ['ant', 'bison', 'camel', 'duck', 'elephant']