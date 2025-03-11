/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña
2. El sistema debe ser capaz de validar si el usuario y
contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y contraseña son correctos, el sistema
debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema
debe mostrar un mensaje de error y no mostrar ningun timeline.
*/

// Base de datos de usuarios con sus contraseñas
const usersDatabase = [
  {
    username: "Luffy",
    password: "ABC",
  },
  {
    username: "Zoro",
    password: "ABC",
  },
  {
    username: "Sanji",
    password: "ABC",
  },
];

// Timeline de los usuarios
const usersTimeline = [
  {
    username: "Luffy",
    timeline: "Voy a ser el rey de los piratas!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdhrbx1TqV0kjE7Qt52YcnCbmkYqGwNCuDoQ&s",
  },
  {
    username: "Zoro",
    timeline: "Soy el mejor espadachín del mundo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKQe5KrAajOBCLe-cRBxqt6H3BXwGqMJtYw&s",  
  },
  {
    username: "Sanji",
    timeline: "Me gusta cocinar y voy a encontrar All Blue",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCIoJhLkCeZMd4riJb9aDTIPC1bbOJf814Cg&s",
  },
  {
    username: "BarbaNegra", // Usuario no registrado en la base de datos
    timeline: "Voy a ser el rey de los piratas!",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMEu-PR87L9iAd_vsaDrGqgQBNmZ3s2MvS0g&s",
  },
];

// Función para verificar si el usuario y contraseña existen en la base de datos
function usuarioExistente(username, password) {
  // Utiliza el método some() para verificar si algún usuario en la base de datos coincide con el nombre de usuario y la contraseña proporcionados
  return usersDatabase.some(user => user.username === username && user.password === password);
}

// Función para obtener el timeline del usuario
function obtenerTimeline(username) {
  // Utiliza el método find() para buscar el timeline del usuario en el array usersTimeline
  const userTimeline = usersTimeline.find(user => user.username === username);
  // Retorna el timeline del usuario si se encuentra, de lo contrario retorna null
  return userTimeline ? userTimeline : null;
}

// Función para iniciar sesión
function signIn() {
  // Obtiene los valores de usuario y contraseña desde los campos de entrada del formulario
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Verifica si el usuario y contraseña existen en la base de datos
  if (usuarioExistente(username, password)) {
    // Muestra un mensaje de bienvenida si el usuario y contraseña son correctos
    alert(`Bienvenido a tu cuenta ${username}`);
    // Obtiene el timeline del usuario
    const userTimeline = obtenerTimeline(username);
    // Si se encuentra el timeline del usuario, lo muestra en el contenedor del timeline
    if (userTimeline) {
      document.getElementById("timeline").innerHTML = `
        <img src="${userTimeline.image}" alt="${username}">
        <p>${userTimeline.timeline}</p>
      `;
    }
  } else {
    // Muestra un mensaje de error si el usuario o contraseña son incorrectos
    alert("Uuups, usuario o contraseña incorrectos!");
    // Limpia el contenido del contenedor del timeline
    document.getElementById("timeline").innerHTML = "";
  }
}