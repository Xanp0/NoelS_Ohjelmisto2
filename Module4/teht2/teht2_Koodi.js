'use strict';

const tvForm = document.querySelector('#tv');

tvForm.addEventListener('submit', async function(evt){
    evt.preventDefault();

    const query = document.querySelector('input[name=q]').value;
    //https://api.tvmaze.com/search/shows?q=${value_from_input}
    const hakuKysely = `https://api.tvmaze.com/search/shows?q=${query}`;

    try {
        const response = await fetch(hakuKysely);
        const jsonData = await response.json();

        useData(jsonData);
    }
    catch (error) {console.log(error.message);}
});

function useData(jsonInfo) {
    console.log(jsonInfo);
}
