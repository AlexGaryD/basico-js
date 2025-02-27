/* 
clases
funciones constructoras

Estas dos generan el prototipos
metodos
propiedades
prototype
  metodos
  propiedades 
  Prototipos:
Prototipos y Herencias en JavaScript
En JavaScript, todos los objetos tienen un prototipo. Un prototipo es también un objeto.
Los objetos heredan propiedades y métodos de su prototipo.
Los prototipos permiten compartir métodos y propiedades entre múltiples instancias de objetos.
Herencia:

La herencia en JavaScript permite que un objeto herede propiedades y métodos de otro objeto.
Se puede lograr mediante el uso de clases y la palabra clave extends.
La herencia permite crear jerarquías de objetos y reutilizar código.
*/

class Animal {
  constructor(nombre, tipo) {
    this.nombre = nombre; // Propiedad nombre
    this.tipo = tipo; // Propiedad tipo
  }
  emitirSonido() {
    console.log("El animal emite un sonido"); // Método emitirSonido que imprime un mensaje
  }
}

class Perro extends Animal {
  constructor(nombre, tipo, raza) {
    super(nombre, tipo); // Llama al constructor de la clase padre (Animal)
    this.raza = raza; // Propiedad raza
  }
  emitirSonido() {
    console.log("El perro ladra"); // Método emitirSonido que imprime un mensaje específico para Perro
  }
  correr() {
    console.log(`${this.nombre} corre alegremente`); // Método correr que imprime un mensaje con el nombre del perro
  }
}

// Crear una instancia de la clase Perro
const perro1 = new Perro("Bobby", "Perro", "Pug");

console.log(perro1); // Imprime la instancia perro1
perro1.correr(); // Llama al método correr de perro1
perro1.emitirSonido(); // Llama al método emitirSonido de perro1

// Agregar un nuevo método a la instancia perro1
perro1.nuevoMetodo = function () {
  console.log("Este es un metodo"); // Método nuevoMetodo que imprime un mensaje
};

// Agregar un nuevo método al prototipo de Perro
Perro.prototype.segundoMetodo = function () {
  console.log("Es otro nuevo metodo"); // Método segundoMetodo que imprime un mensaje
};

// Agregar un nuevo método al prototipo de Animal
Animal.prototype.tercerMetodo = function () {
  console.log("Un metodo más"); // Método tercerMetodo que imprime un mensaje
};

// Crear otra instancia de la clase Perro
const perro2 = new Perro("Campana", "Perro", "Labrador");

console.log(perro2); // Imprime la instancia perro2
perro2.correr(); // Llama al método correr de perro2
perro2.emitirSonido(); // Llama al método emitirSonido de perro2

// Agregar un nuevo método a la instancia perro2
perro2.nuevoMetodocampana = function () {
  console.log("Este es un metodo segundo de campana"); // Método nuevoMetodocampana que imprime un mensaje
};

// Agregar un nuevo método al prototipo de Perro
Perro.prototype.nuevoMetodocampana = function () {
  console.log("Este es un metodo segundo "); // Método nuevoMetodocampana que imprime un mensaje
};
