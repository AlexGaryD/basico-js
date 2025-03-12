/*
Promise ()
Las promesas presentan tres estados fundamentales durante su ciclo de vida:

Pending (pendiente): Este es el estado inicial. La promesa está creada pero aún no se ha resuelto ni ha fallado.
Fulfilled (resuelta): Indica que la promesa se ha completado con éxito.
Rejected (rechazada): Ocurre cuando la promesa no se puede cumplir, produciendo un error.

¿Qué funciones de callback usan las promesas?
Las promesas trabajan con dos tipos de funciones de callback:

Resolve: Se ejecuta cuando la promesa se resuelve exitosamente.
Reject: Se activa cuando la promesa no se puede completar, indicando un fallo.

¿Cómo utilizar métodos como then y catch con promesas?
Las promesas vienen con dos métodos esenciales para gestionar su resultado:

Then: Se ejecuta cuando la promesa se resuelve. A través de este método, podemos llevar a cabo acciones basadas en el resultado exitoso de una promesa.
Catch: Se utiliza para manejar errores. Si la promesa falla, el catch nos proporciona la información necesaria para entender por qué no se resolvió.
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

// Crear otra promesa simulando una respuesta de API
const myPromise = new Promise((resolve, reject) => {
  let mockApiResponse = true; // Simulación de una respuesta de API

  setTimeout(() => {
    if (mockApiResponse) {
      resolve('Operación completada con éxito'); // Llamar a resolve si la operación fue exitosa
    } else {
      reject('Error en la operación'); // Llamar a reject si la operación falló
    }
  }, 3000); // Esperar 3 segundos antes de resolver o rechazar la promesa
});

// Manejar la resolución de la promesa simulada
myPromise
  .then(result => {
    // Este bloque se ejecuta si la promesa se resuelve
    console.log(result); // Imprimir el mensaje de éxito
  })
  .catch(error => {
    // Este bloque se ejecuta si la promesa se rechaza
    console.error(error); // Imprimir el mensaje de error
  });