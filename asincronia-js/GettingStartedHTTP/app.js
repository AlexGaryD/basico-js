/*

¿Cómo funciona HTTP?
Qué es HTTP y cómo lo utilizamos en el front-end?
Al desarrollar aplicaciones web, entender cómo manejar peticiones HTTP es fundamental para la
comunicación entre el front-end y los servidores. HTTP (Hypertext Transfer Protocol) es el protocolo
que permite realizar solicitudes de datos y enviar información entre clientes y servidores. En la práctica,
se emplean métodos HTTP mediante la función fetch en JavaScript para interactuar con APIs.

¿Cómo funcionan las peticiones con fetch?
Cuando utilizamos fetch, estamos solicitando a un servidor que nos proporcione información que luego
podemos manejar y mostrar en el DOM. Mediante fetch, hacemos un pedido a una API, que a menudo nos devuelve
datos en formato JSON. Usar fetch es una manera de realizar peticiones HTTP de forma asíncrona,
lo que nos permite mejorar la experiencia del usuario al cargar datos sin interrumpir el flujo de la
aplicación.
*/

// Realizar una petición GET utilizando fetch
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    // Convertir la respuesta a formato JSON
    return response.json();
  })
  .then((data) => {
    // Manejar los datos recibidos
    console.log(data);
  })
  .catch((error) => {
    // Manejar cualquier error que ocurra durante la petición
    console.error("Error al realizar la petición:", error);
  });

/*
Explicación del código:
1. Realizar una petición GET utilizando fetch:
   - Se utiliza la función fetch para realizar una petición GET a la URL especificada.
   - Ejemplo:
     fetch("https://jsonplaceholder.typicode.com/posts")

2. Convertir la respuesta a formato JSON:
   - Se utiliza el método .then() para manejar la respuesta de la petición.
   - La respuesta se convierte a formato JSON utilizando response.json().
   - Ejemplo:
     .then((response) => {
       return response.json();
     })

3. Manejar los datos recibidos:
   - Se utiliza otro método .then() para manejar los datos recibidos en formato JSON.
   - Los datos se imprimen en la consola.
   - Ejemplo:
     .then((data) => {
       console.log(data);
     })

4. Manejar cualquier error que ocurra durante la petición:
   - Se utiliza el método .catch() para manejar cualquier error que ocurra durante la petición.
   - El error se imprime en la consola.
   - Ejemplo:
     .catch((error) => {
       console.error("Error al realizar la petición:", error);
     })
*/

// Realizar una petición GET utilizando async/await
async function fetchData() {
  try {
    // Realizar la petición utilizando fetch
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // Convertir la respuesta a formato JSON
    let data = await response.json();
    // Manejar los datos recibidos
    console.log(data);
  } catch (error) {
    // Manejar cualquier error que ocurra durante la petición
    console.error("Error al realizar la petición:", error);
  }
}

// Llamar a la función fetchData para realizar la petición
fetchData();

/*
Explicación del código:
1. Realizar una petición GET utilizando async/await:
   - Se define una función async llamada fetchData.
   - Dentro de la función, se utiliza await para realizar la petición utilizando fetch.
   - Ejemplo:
     async function fetchData() {
       let response = await fetch("https://jsonplaceholder.typicode.com/posts");

2. Convertir la respuesta a formato JSON:
   - Se utiliza await para convertir la respuesta a formato JSON.
   - Ejemplo:
     let data = await response.json();

3. Manejar los datos recibidos:
   - Los datos recibidos en formato JSON se imprimen en la consola.
   - Ejemplo:
     console.log(data);

4. Manejar cualquier error que ocurra durante la petición:
   - Se utiliza un bloque try/catch para manejar cualquier error que ocurra durante la petición.
   - El error se imprime en la consola.
   - Ejemplo:
     catch (error) {
       console.error("Error al realizar la petición:", error);
     }

5. Llamar a la función fetchData para realizar la petición:
   - Se llama a la función fetchData para realizar la petición.
   - Ejemplo:
     fetchData();
*/
