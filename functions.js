const fetch = require('node-fetch');

// Función sync que imprime por consola el atributo "name" del parámetro recibido (JSON)
function print(json) {
    console.log(json.name);
}

// El método .json() devuelve una promesa
function getJson(data) {
    return data.json();
}

// Sync function calling promise
function getData(data) {
    getJson(data)
        .then(res => console.log(res) )
        .catch(error => console.log(error));
}

// Async/await function
async function asyncGetJson(data) {
    let json = await getJson(data);
    return json;
}

// Sync function to export async function
function syncGetDataAwait(data) {
    try {
        return asyncGetJson(data);
    } catch(error) {
        throw new Error('ERROR', error);
    }
}

function gotError(error) {
    console.log('ERROR -> ', error);
}

function functionReturnPromise(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getNombreFromUsername(apiUrl) {
    fetch(apiUrl)
        .then( res => res.json() )
        .then( json => { console.log(json.name)  })
        .catch(error => console.log(error));
}

function getNombreFromUsernameReturnPromise(apiUrl) {
    return fetch(apiUrl);
}

module.exports = {
    print:print,
    getData:getData,
    gotError:gotError,
    functionReturnPromise:functionReturnPromise,
    getNombreFromUsername:getNombreFromUsername,
    getNombreFromUsernameReturnPromise:getNombreFromUsernameReturnPromise,
    syncGetDataAwait:syncGetDataAwait
}