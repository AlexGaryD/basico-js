class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const persona1 = new Persona("Mariana", 25);

persona1.saludar();

const persona2 = new Persona("Juan", 30);

persona2.saludar();
