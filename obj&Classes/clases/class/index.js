// Definición de la clase Persona
// Una clase es una plantilla para crear objetos con propiedades y métodos predefinidos.

class Persona {
  // El constructor es un método especial para crear e inicializar un objeto creado con una clase.
  constructor(nombre, edad) {
    this.nombre = nombre; // Propiedad nombre
    this.edad = edad; // Propiedad edad
  }

  // Método saludar
  // Un método es una función que pertenece a un objeto.
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`); // Imprime un mensaje con el nombre y la edad
  }
}

// Crear una instancia de la clase Persona
const persona1 = new Persona("Mariana", 25); // Crea un objeto persona1 con nombre "Mariana" y edad 25

// Llamar al método saludar en la instancia persona1
persona1.saludar(); // Llama al método saludar de persona1

// Crear otra instancia de la clase Persona
const persona2 = new Persona("Juan", 30); // Crea un objeto persona2 con nombre "Juan" y edad 30

// Llamar al método saludar en la instancia persona2
persona2.saludar(); // Llama al método saludar de persona2
