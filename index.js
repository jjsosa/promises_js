const myFunctions = require('./functions');

let apiUrl = 'https://api.github.com/users/';

// Ejecución y control de la promesa en el archivo de funciones
myFunctions.getNombreFromUsername('jjsosa', apiUrl);

// Ejecución y control de la promesa en este archivo
myFunctions.getNombreFromUsernameReturnPromise('jjsosa', apiUrl)
    .then( res => res.json() )
    .then( json => { console.log(json.name) })
    .catch(error => console.log(error));