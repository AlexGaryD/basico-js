switch (expresion){
  case valor1:
      // Bloque de código a ejecutar
      break;
  case valor2:
      // Bloque de código a ejecutar
      break;
  default:
      // Bloque de código a ejecutar si no se cumple ninguno de los casos anteriores
}

//ejemplos

let expre = "Papayas";

switch (expre) {
  case "Naranjas":
      console.log("Las naranjas cuestan $0.59 el kilo.");
      break;
  case "Manzanas":
      console.log("Las manzanas cuestan $0.75 el kilo.");
      break;
  case "Plátanos":
      console.log("Los plátanos cuestan $0.48 el kilo.");
      break;
  case "Mangos":
  case "Papayas":
      console.log("Los mangos y las papayas cuestan $2.79 el kilo.");
      break;
  default:
      console.log(`Lo siento, no tenemos ${expre}.`);
}

console.log("Gracias por su compra ¿Hay algo más que desees?");

// Función para consultar el precio de una fruta
function consultarPrecio() {
  const fruta = document.getElementById('fruta').value;
  const resultado = document.getElementById('resultado');

  switch (fruta) {
      case "Naranjas":
          resultado.textContent = "Las naranjas cuestan $0.59 el kilo.";
          break;
      case "Manzanas":
          resultado.textContent = "Las manzanas cuestan $0.75 el kilo.";
          break;
      case "Plátanos":
          resultado.textContent = "Los plátanos cuestan $0.48 el kilo.";
          break;
      case "Mangos":
      case "Papayas":
          resultado.textContent = "Los mangos y las papayas cuestan $2.79 el kilo.";
          break;
      default:
          resultado.textContent = `Lo siento, no tenemos ${fruta}.`;
  }

  console.log("Gracias por su compra ¿Hay algo más que desees?");
}