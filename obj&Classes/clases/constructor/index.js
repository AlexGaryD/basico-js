// let persona =  {
//   nombre: "Diego",
//   apellido: "De Granda",
//   edad: 35
// }

// Función constructora
// Una función constructora se utiliza para crear múltiples objetos con la misma estructura y propiedades.

function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}

// Creamos una instancia de Persona
const persona1 = new Persona("Alexis", "Vera", 32);
console.log(persona1); // Imprime la instancia persona1

// Creamos otra instancia de Persona
const persona2 = new Persona("Diego", "De Granda", 35);
console.log(persona2); // Imprime la instancia persona2

// Creamos una tercera instancia de Persona
const persona3 = new Persona("Ricardo", "García", 31);
console.log(persona3); // Imprime la instancia persona3

// Agregamos una propiedad a la clase Persona
// En este caso, la forma en que funciona prototype es que se agrega a todas las instancias de la clase Persona
// Esta propiedad no se agregará a la clase Persona en sí, solo al prototipo de la clase del cual se crean las instancias
Persona.prototype.telefono = "0999999999";

// Creamos una propiedad solo para una de nuestras instancias
persona1.nacionalidad = "Ecuatoriana";
console.log(persona1); // Imprime la instancia persona1 con la nueva propiedad nacionalidad
console.log(persona2); // Imprime la instancia persona2 sin la propiedad nacionalidad
console.log(persona3); // Imprime la instancia persona3 sin la propiedad nacionalidad

// Creamos un método para la clase Persona
// Los métodos agregados al prototipo de una clase están disponibles para todas las instancias de esa clase
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
};








































































































































































































































































// Llamamos al método saludar en cada instancia de Persona
persona1.saludar(); // Llama al método saludar de persona1
persona2.saludar(); // Llama al método saludar de persona2
persona3.saludar(); // Llama al método saludar de persona3
