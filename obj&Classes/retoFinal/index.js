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

function usuarioExistente(username, password) {
  return usersDatabase.some(user => user.username === username && user.password === password);
}

function obtenerTimeline(username) {
  const userTimeline = usersTimeline.find(user => user.username === username);
  return userTimeline ? userTimeline : null;
}

function signIn() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (usuarioExistente(username, password)) {
    alert(`Bienvenido a tu cuenta ${username}`);
    const userTimeline = obtenerTimeline(username);
    if (userTimeline) {
      document.getElementById("timeline").innerHTML = `
        <img src="${userTimeline.image}" alt="${username}">
        <p>${userTimeline.timeline}</p>
      `;
    }
  } else {
    alert("Uuups, usuario o contraseña incorrectos!");
    document.getElementById("timeline").innerHTML = "";
  }
}