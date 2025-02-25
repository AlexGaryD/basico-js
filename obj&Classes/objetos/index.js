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
  nombre: 'Gary',
  edad: 31,
  dirección: {
    calle: "Av Condor Ñan 2165",
    ciudad: "Quito"
  },
  saludar(){
    console.log(`Hola mi nombre es $ {persona.nombre}`)
  },
  saludar(){
    console.log(`Mi dirección es ${persona.dirección.calle}`);
  },
  saludar(){
    console.log(`Mi edad es ${persona.edad}`);
  }

};

// Imprimamos el objeto
console.log(persona);
persona.saludar();

console.log(persona.dirección.calle);
persona.saludar();

console.log(persona.edad);
persona.saludar();

persona.telefono = "0987654321";
console.log(persona.telefono);

persona.despedir = () => {
  console.log(`Adios ${persona.nombre}`);
}

persona.despedir();

delete persona.telefono;

delete persona.despedir;
delete persona.saludar;