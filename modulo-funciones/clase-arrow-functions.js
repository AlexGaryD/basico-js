// Función tradicional
const greeting = function (name) {
  return `Hi, ${name}`; // Retorna un saludo con el nombre proporcionado
};

// Arrow function - retorno explícito
const newGreeting = (name) => {
  return `Hi, ${name}`; // Retorna un saludo con el nombre proporcionado
};

// Arrow function - retorno implícito
const newGreetingImplicit = (name) => `Hi, ${name}`; // Retorna un saludo con el nombre proporcionado
//  (sin necesidad de la palabra clave return con parantesis)
const newGreetingImplicitone = name => `Hi, ${name}`; // Retorna un saludo con el nombre proporcionado
//  (sin necesidad de la palabra clave return sin parantesis)
const newGreetingImplicitWithTwoParameters = (name, lastName) =>
  `Hi, I'm ${name} ${lastName}`; // Retorna un saludo con el nombre y apellido proporcionados

// Enlace léxico (Lexical Binding)

// Objeto con propiedades y métodos
const finctionalCharacter = {
  name: "Uncle Ben", // Propiedad del objeto
  // Método con función tradicional
  messageWithTraditionalFunction: function (message) {
    console.log(`${this.name} says: ${message}`); // Imprime un mensaje con el nombre del objeto y el 
    // mensaje proporcionado
  },
  // Método con arrow function
  messageWithArrowFunction: (message) => {
    console.log(`${this.name} says: ${message}`); // Intenta imprimir un mensaje con el nombre del objeto
    //  y el mensaje proporcionado
  },
};

// Llamada al método con función tradicional
finctionalCharacter.messageWithTraditionalFunction(
  "With great power comes great responsibility."
); // Funciona correctamente, imprime: "Uncle Ben says: With great power comes great responsibility."

// Llamada al método con arrow function
finctionalCharacter.messageWithArrowFunction("Beware of Doctor Octopus."); // No funciona como se espera, imprime: "undefined says: Beware of Doctor Octopus."

/*
Explicación:
1. Funciones flecha (Arrow Functions):
   - Las funciones flecha son una forma más concisa de escribir funciones en JavaScript.
   - Pueden tener un retorno explícito (usando la palabra clave return) o un retorno implícito (sin usar return).
   - Las funciones flecha no tienen su propio contexto this, sino que heredan el this del contexto en el que
    fueron definidas.

2. Enlace léxico (Lexical Binding):
   - En el objeto finctionalCharacter, el método messageWithTraditionalFunction usa una función tradicional,
    por lo que el this dentro de la función se refiere al objeto finctionalCharacter.
   - El método messageWithArrowFunction usa una función flecha, por lo que el this dentro de la función se
    refiere al contexto en el que la función fue definida, no al objeto finctionalCharacter. 
    Esto causa que this.name sea undefined.
    Las funciones flecha no tienen su propio contexto this, sino que heredan el this del contexto en 
    el que fueron definidas.
    En el objeto finctionalCharacter, el método messageWithTraditionalFunction usa una función tradicional,
    por lo que el this dentro de la función se refiere al objeto finctionalCharacter.
    El método messageWithArrowFunction usa una función flecha, por lo que el this dentro de la función se refiere 
    al contexto en el que la función fue definida, no al objeto finctionalCharacter. Esto causa que this.name sea undefined.
*/
