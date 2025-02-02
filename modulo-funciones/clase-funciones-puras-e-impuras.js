// Funciones puras

// Side Effects (Efectos secundarios)
// 1. Modificar variables globales
// 2. Modificar parámetros
// 3. Solicitudes HTTP
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulación del DOM
// 6. Obtener la hora actual

// Ejemplo de función pura
function sum(a, b) {
    return a + b; // Retorna la suma de a y b sin causar efectos secundarios
}

// 1. Modificar variables globales
let globalVariable = 0;

function modifyGlobalVariable(value) {
    globalVariable += value; // Modifica la variable global
    return globalVariable;
}

// 2. Modificar parámetros
function modifyParameter(obj) {
    obj.value = 42; // Modifica el parámetro pasado
    return obj;
}

let myObject = { value: 10 };
modifyParameter(myObject); // myObject.value ahora es 42

// 3. Solicitudes HTTP
function fetchData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data)); // Realiza una solicitud HTTP y causa un efecto secundario
}

// 4. Imprimir mensajes en pantalla o consola
function logMessage(message) {
    console.log(message); // Imprime un mensaje en la consola
}

// 5. Manipulación del DOM
function changeElementText(id, newText) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = newText; // Cambia el texto de un elemento del DOM
    }
}

// 6. Obtener la hora actual
function getCurrentTime() {
    return new Date().toLocaleTimeString(); // Obtiene la hora actual
}


// Funciones impuras
// Ejemplo de función impura que imprime en consola (efecto secundario)
function sum(a, b) {
  console.log('A: ', a); // Imprime el valor de a en la consola
  return a + b; // Retorna la suma de a y b
}

let total = 0
function sumWithSideEffect () {
  total += a
  return total
}
// Ejemplos de uso
modifyGlobalVariable(5); // Modifica la variable global
console.log(globalVariable); // Imprime el valor de la variable global

logMessage('Hello, world!'); // Imprime un mensaje en la consola

changeElementText('myElement', 'New Text'); // Cambia el texto de un elemento del DOM

console.log(getCurrentTime()); // Imprime la hora actual

// Función pura

// Ejemplo de función pura que calcula el cuadrado de un número
function square(x) {
    return x * x; // Retorna el cuadrado de x sin causar efectos secundarios
}

// Ejemplo de función pura que suma 10 a un número
function addTen(y) {
    return y + 10; // Retorna y + 10 sin causar efectos secundarios
}

// Uso de funciones puras
const number = 5;
const finalResult = addTen(square(number)); // Calcula el cuadrado de number y luego le suma 10
console.log(finalResult); // Imprime el resultado final en la consola