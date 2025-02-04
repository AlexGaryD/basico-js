// Métodos que modifican el array original (Mutabilidad).
//Methods that modify the original array (Mutability).

// push() - Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.
const countries = ['USA', 'Canada', 'UK', 'Ecuador']; // Inicializa un array de países
const newCountries = countries.push('Germany', 'Australia', 'Suiza'); // Agrega 'Germany' y 'Australia' al final del array 'countries'

console.log(countries); // Imprime el array modificado: ['USA', 'Canada', 'UK', 'Germany', 'Australia']
console.log(newCountries); // Imprime la nueva longitud del array: 5

// pop() - Elimina el último elemento de un array y lo devuelve.
const removedCountry = countries.pop(); // Elimina 'Australia' del final del array 'countries'

console.log(countries); // Imprime el array modificado: ['USA', 'Canada', 'UK', 'Germany']
console.log(removedCountry); // Imprime el elemento eliminado: 'Australia'

// Ejercicio: Gestión de una pila (Stack)

let bookCart = []; // Inicializa un array vacío para el carrito de libros

// Constantes para las acciones del carrito
const ADD_TO_CART_ACTION = 'addToCart';
const REMOVE_FROM_CART_ACTION = 'removeFromCart';
const VIEW_CART_ACTION = 'viewCart';

// Función para ver el contenido del carrito
function viewCart() {
  console.log('Current Cart of Books: ', bookCart); // Imprime el contenido actual del carrito
}

// Función para realizar acciones en el carrito
function performCartActions(action, newBook) {
  switch (action) {
    case ADD_TO_CART_ACTION:
      bookCart.push(newBook); // Agrega un nuevo libro al final del carrito
      break;
    case REMOVE_FROM_CART_ACTION:
      if (bookCart.length === 0) {
        console.log('Cart is empty. No books to remove.'); // Mensaje si el carrito está vacío
      } else {
        const removedBook = bookCart.pop(); // Elimina el último libro del carrito
        console.log(`Removed book from the cart: ${removedBook}`); // Imprime el libro eliminado
      }
      break;
    case VIEW_CART_ACTION:
      viewCart(); // Llama a la función para ver el contenido del carrito
      break;
    default:
      console.log('Invalid action. Please choose a valid option.'); // Mensaje para acción inválida
  }
}

// Realiza acciones en el carrito
performCartActions(ADD_TO_CART_ACTION, 'Think like a monk'); // Agrega 'Think like a monk' al carrito
performCartActions(VIEW_CART_ACTION); // Muestra el contenido del carrito
performCartActions(ADD_TO_CART_ACTION, 'Ego is the enemy.'); // Agrega 'Ego is the enemy.' al carrito
performCartActions(VIEW_CART_ACTION); // Muestra el contenido del carrito
performCartActions(REMOVE_FROM_CART_ACTION); // Elimina el último libro del carrito
