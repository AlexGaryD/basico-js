// Operadores lógicos en JavaScript

// Operador AND (&&): Devuelve true si ambos operandos son verdaderos.
console.log(true && true); // true
console.log(true && false); // false
console.log(false && false); // false

// Operador OR (||): Devuelve true si al menos uno de los operandos es verdadero.
console.log(true || false); // true
console.log(false || false); // false

// Operador NOT (!): Invierte el valor de verdad del operando.
console.log(!true); // false
console.log(!false); // true

// Ejemplos prácticos

const a = 10;
const b = 20;
const c = 30;

// Usando AND (&&)
if (a < b && b < c) {
    console.log("a es menor que b y b es menor que c"); // Este mensaje se mostrará
}

// Usando OR (||)
if (a > b || b < c) {
    console.log("a es mayor que b o b es menor que c"); // Este mensaje se mostrará
}

// Usando NOT (!)
if (!(a > b)) {
    console.log("a no es mayor que b"); // Este mensaje se mostrará
}
