const myFunctions = require('./functions');

let promise = new Promise ((resolve, reject) => {
        () => console.log('PROBANDO!');
})

const apiUrl = 'https://api.github.com/users/';
const username = 'jjsosa';
const completeUrl = apiUrl + username;

// Ejecución y control de la promesa en el archivo de funciones
//myFunctions.getNombreFromUsername(completeUrl);

// Ejecución y control de la promesa en este archivo
// myFunctions.getNombreFromUsernameReturnPromise(completeUrl)
//     .then( res => res.json() )
//     .then( json => { console.log(json.name) })
//     .catch(error => console.log(error));

// Promise llamando a función sync en el then()
// myFunctions.getNombreFromUsernameReturnPromise(completeUrl)
//     .then(myFunctions.getData)
//     .catch(error => console.log(error));

// Promise llamando a función async en el then() y después a función sync
myFunctions.getNombreFromUsernameReturnPromise(completeUrl)
    .then(res => myFunctions.syncGetDataAwait(res))
    .then(json => myFunctions.print(json));