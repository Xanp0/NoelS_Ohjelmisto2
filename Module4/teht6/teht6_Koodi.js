'use strict';

const formElem = document.querySelector('#norris');
const inputElem = document.querySelector('input[name=q]');
const resultsElem = document.querySelector('#results');

let gettingJokes = "https://api.chucknorris.io/jokes/search?query=";

formElem.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const inputData = inputElem.value;
    gettingJokes += inputData;

    getData(gettingJokes);
});

async function getData(gotJokes) {

    try {
        const response = await fetch(gotJokes);
        const jsonData = await response.json();

        useData(jsonData);
    }
    catch (error) {console.log(error.message);}
}

function useData(jsonInfo) {

    for (let joke of jsonInfo.result) {
        let htmlPart =
            `<article>
                <p>${joke.value}<p>
             </article>`;

        resultsElem.innerHTML += htmlPart;
    }
}
