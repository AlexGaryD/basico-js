/*
 CLOSURE: función que tiene acceso a variables de un ámbito externo,
 incluso después de que esa función haya terminado de ejecutarse.

 Ámbito léxico: cada vez que se declara una función,
 crea su propio ámbito léxico, y puede acceder a las variables
 dentro de ese ámbito y a las variables en ámbitos superiores.
*/

// Ejemplo básico de closure
function outerFunction() {
    let outerVariable = "I am from outer function"; // Variable del ámbito externo

    function innerFunction() {
        console.log(outerVariable); // Accede a la variable del ámbito externo
    }

    return innerFunction; // Retorna la función interna
}

const closureExample = outerFunction(); // Almacena la función interna retornada
closureExample(); // Llama a la función interna, que tiene acceso a outerVariable

// Ejemplo de closure con contador
function createCounter() {
    let count = 0; // Variable del ámbito externo

    return function() {
        count++; // Incrementa la variable del ámbito externo
        console.log(count); // Imprime el valor de la variable del ámbito externo
    };
}

const counterA = createCounter(); // Crea una instancia del contador
counterA(); // Imprime 1
counterA(); // Imprime 2
counterA(); // Imprime 3
counterA(); // Imprime 4

const counterB = createCounter(); // Crea otra instancia del contador
counterB(); // Imprime 1
counterB(); // Imprime 2

// Otro ejemplo de closure
function outer() {
    let message = "Hello, "; // Variable del ámbito externo

    function inner(name) {
        console.log(message + name); // Accede a la variable del ámbito externo y la combina con el parámetro
    }

    return inner; // Retorna la función interna
}

const closureA = outer(); // Almacena la función interna retornada
const closureB = outer(); // Almacena otra instancia de la función interna retornada

closureA("Alice"); // Imprime "Hello, Alice"
closureA("Bob"); // Imprime "Hello, Bob"
closureA("Gary"); // Imprime "Hello, Gary"
closureB("Charlie"); // Imprime "Hello, Charlie"

/*
Explicación:
1. Closure:
   - Un closure es una función que tiene acceso a variables de un ámbito externo, incluso después de que esa función haya terminado de ejecutarse.
   - Los closures permiten que las funciones internas recuerden el estado de las variables en el ámbito externo en el que fueron creadas.

2. Ámbito léxico:
   - Cada vez que se declara una función, se crea su propio ámbito léxico.
   - Las funciones pueden acceder a las variables dentro de su propio ámbito y a las variables en ámbitos superiores.

3. Ejemplos:
   - En el primer ejemplo, `outerFunction` define una variable `outerVariable` y retorna `innerFunction`, que tiene acceso a `outerVariable` incluso después de que `outerFunction` haya terminado de ejecutarse.
   - En el segundo ejemplo, `createCounter` define una variable `count` y retorna una función que incrementa e imprime `count`. Cada instancia de `createCounter` tiene su propio `count`.
   - En el tercer ejemplo, `outer` define una variable `message` y retorna `inner`, que combina `message` con un parámetro `name` y lo imprime. Cada instancia de `outer` tiene su propio `message`.
*/
