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
  nombre: 'Gary', // Propiedad nombre con valor 'Gary'
  edad: 31, // Propiedad edad con valor 31
  dirección: {
    calle: "Av Condor Ñan 2165", // Propiedad calle dentro del objeto dirección
    ciudad: "Quito" // Propiedad ciudad dentro del objeto dirección
  },
  saludar() {
    console.log(`Hola mi nombre es ${this.nombre}`); // Método saludar que imprime un mensaje con el nombre
  },
  saludar() {
    console.log(`Mi dirección es ${this.dirección.calle}`); // Método saludar que imprime un mensaje con la dirección
  },
  saludar() {
    console.log(`Mi edad es ${this.edad}`); // Método saludar que imprime un mensaje con la edad
  }
};

// Imprimamos el objeto
console.log(persona); // Imprime el objeto persona

// Llamar al método saludar
persona.saludar(); // Llama al método saludar del objeto persona (última definición de saludar)

// Imprimir la propiedad calle del objeto dirección
console.log(persona.dirección.calle); // Imprime la propiedad calle del objeto dirección

// Llamar al método saludar
persona.saludar(); // Llama al método saludar del objeto persona (última definición de saludar)

// Imprimir la propiedad edad del objeto persona
console.log(persona.edad); // Imprime la propiedad edad del objeto persona

// Llamar al método saludar
persona.saludar(); // Llama al método saludar del objeto persona (última definición de saludar)

// Agregar una nueva propiedad al objeto persona
persona.telefono = "0987654321"; // Agrega la propiedad telefono al objeto persona
console.log(persona.telefono); // Imprime la propiedad telefono del objeto persona

// Agregar un nuevo método al objeto persona
persona.despedir = () => {
  console.log(`Adios ${persona.nombre}`); // Método despedir que imprime un mensaje de despedida con el nombre
};

// Llamar al método despedir
persona.despedir(); // Llama al método despedir del objeto persona

// Eliminar la propiedad telefono del objeto persona
delete persona.telefono; // Elimina la propiedad telefono del objeto persona

// Eliminar el método despedir del objeto persona
delete persona.despedir; // Elimina el método despedir del objeto persona

// Eliminar el método saludar del objeto persona
delete persona.saludar; // Elimina el método saludar del objeto persona