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

function getNombre(username, apiUrl) {
    const url = apiUrl + username;
    fetch(url)
        .then( res => res.json() )
        .then( json => { console.log(json.name)  })
        // .error ( err => { console.log('error: ', err) })
}

module.exports = {
    gotData:gotData,
    gotError:gotError,
    functionReturnPromise:functionReturnPromise,
    getNombre:getNombre
}