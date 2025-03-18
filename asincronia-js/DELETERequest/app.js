// Seleccionar elementos del DOM
const listElement = document.querySelector(".posts"); // Contenedor de los posts
const postTemplate = document.getElementById("single-post"); // Plantilla para un solo post
const form = document.querySelector("#new-post form"); // Formulario para crear un nuevo post
const fetchButton = document.querySelector("#available-posts button"); // Botón para obtener los posts
const postList = document.querySelector("#posts-container"); // Contenedor de la lista de posts

// Función para enviar una solicitud HTTP
function sendHTTPRequest(method, url, data) {
  return fetch(url, {
    method: method, // Método HTTP (GET, POST, DELETE, etc.)
    body: JSON.stringify(data), // Datos a enviar (si los hay)
    headers: {
      "Content-Type": "application/json", // Tipo de contenido
    },
  }).then((response) => {
    return response.json(); // Convertir la respuesta a formato JSON
  });
}

// Función asincrónica para obtener los posts
async function fecthPosts() {
  const responseData = await sendHTTPRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  ); // Realizar una solicitud GET para obtener los posts
  console.log(responseData); // Imprimir los datos recibidos en la consola
  const listOfPosts = responseData; // Guardar los datos recibidos en una variable

  // Recorrer la lista de posts y crear elementos en el DOM
  for (const post of listOfPosts) {
    const postContainer = document.createElement("article"); // Crear un contenedor para el post
    postContainer.id = post.id; // Asignar el ID del post al contenedor
    postContainer.classList.add("post-item"); // Añadir una clase al contenedor

    const title = document.createElement("h2"); // Crear un elemento para el título
    title.textContent = post.title; // Asignar el título del post

    const body = document.createElement("p"); // Crear un elemento para el cuerpo del post
    body.textContent = post.body; // Asignar el cuerpo del post

    const button = document.createElement("button"); // Crear un botón para eliminar el post
    button.textContent = "DELETE Content"; // Asignar el texto del botón

    // Añadir los elementos al contenedor del post
    postContainer.append(title);
    postContainer.append(body);
    postContainer.append(button);

    // Añadir el contenedor del post a la lista de posts en el DOM
    listElement.append(postContainer);
  }
}

// Añadir un evento al botón para obtener los posts
fetchButton.addEventListener("click", fecthPosts);

// Función asincrónica para crear un nuevo post
async function createPost(title, content) {
  const userId = Math.random(); // Generar un ID de usuario aleatorio
  const post = {
    title: title, // Título del post
    body: content, // Contenido del post
    userId: userId, // ID del usuario
  };

  // Enviar una solicitud POST para crear un nuevo post
  sendHTTPRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

// Añadir un evento al formulario para crear un nuevo post
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
  const title = event.currentTarget.querySelector("#title").value; // Obtener el título del post
  const content = event.currentTarget.querySelector("#content").value; // Obtener el contenido del post

  createPost(title, content); // Llamar a la función para crear un nuevo post
});

// Añadir un evento al contenedor de la lista de posts para eliminar un post
postList.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const postId = event.target.closest("article").id; // Obtener el ID del post a eliminar
    sendHTTPRequest(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    ); // Enviar una solicitud DELETE para eliminar el post
  }
});
