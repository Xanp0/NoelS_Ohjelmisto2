'use strict';

const gettingJokes = "https://api.chucknorris.io/jokes/random";
getData();

async function getData() {

    try {
        const response = await fetch(gettingJokes);
        const jsonData = await response.json();

        useData(jsonData);
    }
    catch (error) {console.log(error.message);}
}

function useData(jsonInfo) {
    console.log(jsonInfo.value);
}
