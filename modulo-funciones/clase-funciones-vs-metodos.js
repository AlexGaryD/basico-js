// Capacidades que tienen las funciones al igual que otros objetos

// 1. Pasar funciones como argumentos -> callback

function a() {
    // Función a
}
function b(callback) {
    // Función b que recibe una función como argumento
    callback(); // Llama a la función pasada como argumento
}
b(a); // Pasa la función a como argumento a la función b

// 2. Retornar funciones

function c() {
    // Función c
    function d() {
        // Función d anidada dentro de c
    }
    return d; // Retorna la función d
}
const returnedFunction = c(); // Almacena la función retornada en una variable
returnedFunction(); // Llama a la función retornada

// 3. Asignar funciones a variables -> Expresión de función

const e = function() {
    // Función anónima asignada a la variable e
};

// 4. Tener propiedades y métodos

function f() {
    // Función f
}
const obj = {}; // Objeto vacío
f.call(obj); // Llama a la función f con el objeto obj como contexto

// 5. Anidar funciones -> Nested functions

function g() {
    // Función g
    function h() {
        // Función h anidada dentro de g
        function i() {
            // Función i anidada dentro de h
        }
        i(); // Llama a la función i
    }
    h(); // Llama a la función h
}
g(); // Llama a la función g

// 6. ¿Es posible almacenar funciones en objetos?

const rocket = {
    name: 'Falcon 9', // Propiedad del objeto
    launchMessage: function launchMessage() {
        // Método del objeto
        console.log('🔥🚀👽🔥'); // Imprime un mensaje en la consola
    }
};

rocket.launchMessage(); // Llama al método launchMessage del objeto rocket