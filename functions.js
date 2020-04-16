const fetch = require('node-fetch');

function gotData(data) {
    console.log('DATA -> ', data);
}

function gotError(error) {
    console.log('ERROR -> ', error);
}

function functionReturnPromise(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getNombreFromUsername(username, apiUrl) {
    const url = apiUrl + username;
    fetch(url)
        .then( res => res.json() )
        .then( json => { console.log(json.name)  })
        .catch(error => console.log(error));
}

function getNombreFromUsernameReturnPromise(username, apiUrl) {
    const url = apiUrl + username;
    return fetch(url);
}

module.exports = {
    gotData:gotData,
    gotError:gotError,
    functionReturnPromise:functionReturnPromise,
    getNombreFromUsername:getNombreFromUsername,
    getNombreFromUsernameReturnPromise:getNombreFromUsernameReturnPromise
}