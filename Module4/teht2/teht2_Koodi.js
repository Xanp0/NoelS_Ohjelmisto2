'use strict';

const tvForm = document.querySelector('#tv');
tvForm.addEventListener('submit', async function(evt){
    evt.preventDefault();

    const query = document.querySelector('input[name=q]').value;

    try {
        const response = await fetch(
            `https://api.tvmaze.com/search/shows?q=${value_from_input}`
            //https://api.tvmaze.com/search/shows?q=${query}
        );
        const jsonData = await response.json();
        console.log(jsonData);
    } catch (error) {
        console.log(error.message);
    }
});
