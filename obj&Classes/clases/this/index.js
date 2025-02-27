/* 
this --- class 

this --- objeto -- class 
this en JavaScript
En JavaScript, this es una referencia al objeto actual en el contexto en el que se está ejecutando el código.
En el contexto de una clase, this se refiere a la instancia de la clase.
En el contexto de un objeto, this se refiere al objeto en sí.
*/

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre; // Propiedad nombre
    this.edad = edad; // Propiedad edad
  }
}

const persona1 = new Persona("Alice", 25); // Crea una instancia de la clase Persona con nombre "Alice" y edad 25

console.log(persona1); // Imprime la instancia persona1

// Agregar un nuevo método a la instancia persona1
persona1.nuevoMetodo = function () {
  console.log(`Mi nombre es ${this.nombre}`); // Método nuevoMetodo que imprime un mensaje con el nombre
};

// Llamar al método nuevoMetodo en la instancia persona1
persona1.nuevoMetodo(); // Llama al método nuevoMetodo de persona1

const persona2 = new Persona("Bob el constructor", 30); // Crea una instancia de la clase Persona con nombre "Bob" y edad 30

console.log(persona2); // Imprime la instancia persona2

// Agregar un nuevo método a la instancia persona2
persona2.nuevoMetodo2 = function () {
  console.log(`Mi nombre es  ${this.nombre}`); // Método nuevoMetodo que imprime un mensaje con el nombre
}

// Llamar al método nuevoMetodo en la instancia persona1
persona2.nuevoMetodo2(); // Llama al método nuevoMetodo de persona1