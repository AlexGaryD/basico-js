// Methods that iterate over an array.
// Methods that DO NOT modify the original array (Immutability).

// find()
// El método find() devuelve el primer elemento del array que cumple con la condición
// implementada por la función proporcionada.

const multipleOf5 = [5, 10, 15, 20, 25, 30, 35, 50];
const firstNumberGreaterThan10 = multipleOf5.find(number => number > 35); // Encuentra el primer número mayor que 10

console.log(multipleOf5); // Imprime el array original: [5, 10, 15, 20]
console.log(firstNumberGreaterThan10); // Imprime el primer número mayor que 10: 15

// findIndex()
// El método findIndex() devuelve el índice del primer elemento del array que cumple con la
//  condición implementada por la función proporcionada.

const randomNumber = [6, 14, 27, 56, 40];
const indexNumber = randomNumber.findIndex(number => number > 50); // Encuentra el índice del primer
//  número mayor que 50

console.log(randomNumber); // Imprime el array original: [6, 14, 27, 56, 40]
console.log(indexNumber); // Imprime el índice del primer número mayor que 50: 3

// Exercise: Raffle Winner Verification Program
// Ejercicio: Programa de verificación de ganadores de una rifa

const winningParticipants = [
  { id: 1, name: 'Jennifer', ticketNumber: 001 },
  { id: 8, name: 'Michael', ticketNumber: 008 },
  { id: 15, name: 'Emily', ticketNumber: 015 },
  { id: 47, name: 'Charlie', ticketNumber: 047 }
];

// Función para encontrar un ganador por nombre usando find()
function findWinnerByName(name) {
  const winner = winningParticipants.find(participant => participant.name === name); // Encuentra el participante
  //  con el nombre dado
  return winner || 'No winner found with that name.'; // Retorna el ganador o un mensaje si no se encuentra
}

// Función para encontrar el índice de un ganador por número de ticket usando findIndex()
function findIndexWinnerByTicket(ticketNumber) {
  const index = winningParticipants.findIndex(participant => participant.ticketNumber === ticketNumber); // Encuentra
  //  el índice del participante con el número de ticket dado
  return index !== -1 ? index : 'No winner found with that ticket number.'; // Retorna el índice o un mensaje si
  //  no se encuentra
}

// Función para mostrar la información del ganador
function displayWinnerInformation(winner) {
  if (winner !== undefined && winner != null && winner !== 'No winner found with that name.') {
    console.log('Winner information: ', winner); // Imprime la información del ganador
  } else {
    console.log('No winner found.'); // Imprime un mensaje si no se encuentra el ganador
  }
}

const winnerByName = findWinnerByName('Emily'); // Busca el ganador por nombre
const indexWinnerByTicket = findIndexWinnerByTicket(8); // Busca el índice del ganador por número de ticket

displayWinnerInformation(winnerByName); // Muestra la información del ganador por nombre
console.log('Index of Winner by Ticket Number: ', indexWinnerByTicket); // Imprime el índice del ganador por
// número de ticket