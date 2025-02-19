/*
estructura de datos
key / value
objeto {
  propiedad: valor,
  propiedad: valor,
  propiedad: valor
  Metodos()
}
*/

const persona = {
  nombre: "Gary", // Propiedad nombre con valor "John"
  edad: 31, // Propiedad edad con valor 30
  direccion: {
    calle: "Av Condor Ñan", // Propiedad calle dentro del objeto direccion
    ciudad: "Quito", // Propiedad ciudad dentro del objeto direccion
  },
  saludar() {
    console.log(`hola, mi nombre es ${this.nombre}`); // Método saludar que imprime un mensaje con el nombre
  },
  mi_edad() {
    console.log(`mi edad es ${this.edad}`); // Método miedad que imprime un mensaje con la edad
  },
  mi_direccion() {
    console.log(`mi direccion es ${this.direccion.calle} en la ciudad de ${this.direccion.ciudad}`); // Método midireccion que imprime un mensaje con la calle y ciudad
  },
};

// Imprimamos el objeto

console.log(persona); // Imprime el objeto persona

// Imprimamos la propiedad nombre

console.log(persona.nombre); // Imprime la propiedad nombre del objeto persona

// Imprimamos el metodo saludar

persona.saludar(); // Llama al método saludar del objeto persona

// Agrergamos una propiedad al objeto en este caso telefono

persona.telefono = "555-555-5555"; // Agrega la propiedad telefono al objeto persona

console.log(persona.telefono); // Imprime la propiedad telefono del objeto persona

// Agregamos un metodo al objeto

persona.despedir = () => {
  console.log("Adios"); // Método despedir que imprime "Adios"
};

persona.despedir(); // Llama al método despedir del objeto persona

// Acceder a una propiedad de un objeto anidado / Metodo

console.log(persona.direccion.calle); // Imprime la propiedad calle del objeto anidado direccion

// Eliminar una propiedad de un objeto

delete persona.telefono; // Elimina la propiedad telefono del objeto persona

console.log(persona.telefono); // Intenta imprimir la propiedad telefono del objeto persona (debería ser undefined)

// Eliminar un metodo de un objeto

delete persona.despedir; // Elimina el método despedir del objeto persona

console.log(persona.despedir); // Intenta imprimir el método despedir del objeto persona (debería ser undefined)
