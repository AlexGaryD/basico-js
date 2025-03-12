/*
Promise ()
Estados de la promesa:
- pending: cuando la promesa se va a crear
- fulfilled: cuando se resuelve la promesa
- rejected: cuando la promesa no se resolvió

Callbacks que tienen las promesas:
- resolve: se llama cuando la promesa se resuelve
- reject: se llama cuando la promesa no se resuelve

2 métodos en las promesas:
- then(): se llama cuando la promesa se resuelve
- catch(): se llama cuando la promesa no se resuelve
*/

// Crear una nueva promesa
const promise = new Promise((resolve, reject) => {
  // Simular una operación asincrónica con setTimeout
  setTimeout(() => {
    let operationSuccessFull = true; // Variable que indica si la operación fue exitosa
    if (operationSuccessFull) {
      resolve("La operación fue exitosa!"); // Llamar a resolve si la operación fue exitosa
    } else {
      reject("La operación falló"); // Llamar a reject si la operación falló
    }
  }, 2000); // Esperar 2 segundos antes de resolver o rechazar la promesa
});

// Manejar la resolución de la promesa
promise
  .then((successMessage) => {
    // Este bloque se ejecuta si la promesa se resuelve
    console.log(successMessage); // Imprimir el mensaje de éxito
  })
  .catch((errorMessage) => {
    // Este bloque se ejecuta si la promesa se rechaza
    console.log(errorMessage); // Imprimir el mensaje de error
  });
