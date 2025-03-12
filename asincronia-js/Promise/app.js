/*Resumen

¿Cómo manejar promesas asíncronas en JavaScript utilizando async/await?
El mundo del desarrollo de software está en constante evolución y aprender
nuevas formas de escribir código más limpio y eficiente es una habilidad invaluable.
¿Quieres mejorar tu forma de manejar promesas asíncronas? Vamos a explorar dos potentes
técnicas de JavaScript: async/await y fetch para hacer peticiones a APIs con ejemplo concreto.

¿Qué son async y await en JavaScript?
Async/await es un paradigma que nos permite escribir código asíncrono de forma más legible y
estructurada. En JavaScript, el uso de async/await nos permite manejar promesas de una manera
más clara, comparada con los métodos tradicionales que usan .then() y .catch(). Al usar async/await,
tu código se ve y se comporta más como el código síncrono, aunque sigue siendo asíncrono.
Cuando declaras una función con async, esta automáticamente devuelve una promesa. Por otro lado,
await hace que JavaScript espere a que una promesa se resuelva antes de continuar con el siguiente
bloque de código.

¿Cómo utilizar fetch para obtener datos de una API?
Para poner en práctica estos conceptos, vamos a hacer
una petición a una API pública usando fetch. Este método
proporciona una forma fácil de obtener recursos de manera asíncrona a través de la red.

Implementación con .then() y .catch()*/

function fetchData(){
    fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json
        ())
        .then(data => console.log(data))
        .cath(error => console.log
            (error));
}

/*En este script, fetch realiza una solicitud a la API de Rick and Morty.
Una vez recibida la respuesta, la convierte a JSON y luego imprime los datos.
Si ocurre un error durante la solicitud, el bloque catch lo capturará y lo mostrará en la consola.

Conversión a async/await*/

async function fetchData() {
    try{
        let response = await fetch
        ("https://rickandmortyapi.com/api/character")
        let data = await response.json();
        console.log(data);

    } catch (error){
        console.log(error);
    }
}

/*
Aquí, al usar async/await, el código se transforma significativamente en términos de legibilidad.
La función fetchData es ahora una función async, y las llamadas a fetch y response.json() están
precedidas por await, lo que indica que deben completarse antes de pasar a la siguiente línea.
Esto hace que el código sea más fácil de leer y entender, especialmente para los desarrolladores
que están acostumbrados al flujo lógico de código síncrono.

¿Por qué utilizar async/await?
Legibilidad: Al cambiar a async/await, el flujo de código se vuelve más natural y fácil de seguir.
Error Handling: La gestión de errores se centraliza a través de try/catch, lo que simplifica la depuración.
Simplicidad: Reduce la complejidad asociada con las cadenas de promesas mediante .then().
Nota importante: Async/await es ideal para manejar situaciones donde los pasos deben realizarse
secuencialmente, pero sigue siendo necesario recordar que el código es asíncrono y no bloqueante.

Conclusión
El uso de async/await en JavaScript es una práctica moderna que le permite a los desarrolladores
manejar la asincronía con mayor elegancia y claridad. Esto, combinado con métodos como fetch, crea
un poderoso conjunto de herramientas para hacer solicitudes en la red mucho más manejables.
¿Te gustaría explorar más sobre la gestión de promesas en JavaScript? ¡Sigue practicando y experimentando!
El camino al dominio de tecnologías modernas comienza con pequeños y sencillos pasos.
*/



/*
Resumen

¿Cómo realizar múltiples peticiones HTTP de forma eficiente en JavaScript?
¿Alguna vez te has enfrentado a la necesidad de realizar múltiples peticiones
HTTP en un proyecto de desarrollo web? Este es un desafío común, especialmente
cuando interactuamos con varias APIs al mismo tiempo. La solución más eficiente
es usar el ciclo for await...of, combinando async y await para ejecutar promesas
de manera asíncrona. Esto no solo hace que el código sea más limpio, sino que
también mejora el rendimiento y la experiencia del usuario al no bloquear la
carga de otros elementos en la aplicación.

¿Qué es y cómo funciona for await...of?
El for await...of es una herramienta poderosa en JavaScript.
Es un bucle que permite iterar sobre objetos asíncronos, como promesas,
de manera que podemos esperar a que cada una se resuelva antes de continuar con la siguiente.
La sintaxis es intuitiva y se adapta bien cuando necesitas trabajar con múltiples solicitudes HTTP.

Por ejemplo, digamos que tienes un array de URLs de una API, como la de Rick and Morty.
Puedes iterar sobre cada URL y realizar una petición fetch asíncrona de la siguiente manera
*/

const urls =[
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode",
];

async function fetchNewData(){
    try{
        for await (let url of urls){
            let response = await fetch(url);
            let data = await response.json();
            console.log(data);
        }
    } catch (error){
        console.log(error);
    }
}

/*
¿Cómo estructurar el código para manejar errores?
Manejar errores es fundamental cuando trabajas con peticiones asíncronas. Utilizar bloques try...catch
es la manera recomendada para capturar y manejar errores, como fallas en las solicitudes de red. Esto
asegura que tu aplicación no falle por completo si una de las peticiones falla y puedes reaccionar
adecuadamente, por ejemplo, mostrando un mensaje de error al usuario.

Dentro del ciclo for await, el bloque try se encarga de realizar la fetch y convertir la respuesta a
formato JSON. Si alguna de estas operaciones falla, el control pasa al bloque catch, donde podemos manejar
el error de manera elegante.

¿Cuáles son los beneficios de usar for await...of en proyectos reales?
Rendimiento sin bloqueo: La ejecución de peticiones de manera asíncrona permite al navegador seguir
procesando otros elementos de la interfaz de usuario, mejorando la experiencia.
Código más limpio y manejable: Al usar async/await, tu código se vuelve más legible y fácil de mantener
comparado con las promesas tradicionales o los callbacks.
Escalabilidad: Puedes fácilmente adaptar este enfoque para manejar más URLs o añadir lógica adicional al
proceso de cada respuesta.
Implementar estas técnicas en tus proyectos no solo optimiza su rendimiento, sino que también proporciona
una base robusta para manejar escenarios complejos donde múltiples elementos de datos deben ser cargados y
procesados simultáneamente. Así que, ¡anímate a aplicar for await...of en tus futuros desarrollos y
experimenta la eficiencia y fluidez mejorada de tus aplicaciones!
*/