// Genera un número secreto aleatorio entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10 + 1);

// Función para adivinar el número
function adivinarNumero() {
    const numeroJugador = parseInt(document.getElementById('numeroJugador').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 10) {
        resultado.textContent = "Por favor, introduce un número válido entre 1 y 10.";
        resultado.style.color = "red";
    } else if (numeroJugador === numeroSecreto) {
        resultado.textContent = "¡Felicidades! ¡Has adivinado el número secreto!";
        resultado.style.color = "green";
    } else if (numeroJugador > numeroSecreto) {
        resultado.textContent = "El número secreto es menor. ¡Inténtalo de nuevo!";
        resultado.style.color = "orange";
    } else if (numeroJugador < numeroSecreto) {
        resultado.textContent = "El número secreto es mayor. ¡Inténtalo de nuevo!";
        resultado.style.color = "orange";
    }
}