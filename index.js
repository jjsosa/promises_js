let apiUrl = 'https://jsonplaceholder.typicode.com/posts';

let promise = fetch(apiUrl);

promise.then(gotData);
promise.catch(gotError);

function gotData(data) {
    console.log('DATA -> ', data);
}

function gotError(error) {
    console.log('ERROR -> ', error);
}