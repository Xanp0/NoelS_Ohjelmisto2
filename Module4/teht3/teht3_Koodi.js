'use strict';

const formElem = document.querySelector('form');
const resultsElem = document.querySelector('#results');

formElem.addEventListener('submit', function(evt) {
    evt.preventDefault();
    // haetaan syöttökentästä sen arvo
    const hakuArvo = document.querySelector('input[name=q]').value;

    // muodostetaan nettiin lähetettävä hakukysely
    const hakuKysely = `https://api.tvmaze.com/search/shows?q=${hakuArvo}`;
    // tulostetaan nettiin lähetettävä hakukysely ainakin debuggausvaiheessa
    console.log("-- nettiin lähtee: " + hakuKysely);

    // kutsutaan funktiota, joka tekee varsinaisen nettihaun
    haeData(hakuKysely);
});


async function haeData(nettikysely) {

    try {
        const response = await fetch(nettikysely);
        const jsonData = await response.json();

        kasitteData(jsonData);
    }
    catch (error) {console.log(error.message);}
}

function kasitteData(jsonData) {
    /*
        Tulokset ovat listassa, kaikki data löytyy 'show' avaimen alta.
        Yhden sarjan tiedot laitetaan 'article' elementin sisään.
     */
    // tyhjennetään mahdollisen edellisen haun tulokset.
    resultsElem.innerHTML = '';

    // käydään json-listan jokainen tv-sarja läpi
    for (const tvSarja of jsonData) {
        // luodaan article-elementti, jonka sisään sarjan tiedot tulevat
        const articleElem = document.createElement('article');

        // luodaan articlen sisään tulevat elementit tehtävänannon mukaisesti
        const h2Elem = document.createElement('h2');
        h2Elem.innerText = tvSarja.show.name;

        // kuvatiedoista osa saattaa puuttua, hoidetaan se tehtävän ohjeen mukaan
        const imgElem = document.createElement('img');
        imgElem.src = tvSarja.show.image?.medium;   // tämä data voi puuttua
        imgElem.alt = tvSarja.show.name;

        const aElem = document.createElement('a');
        aElem.href = tvSarja.show.url;
        aElem.innerText = 'Go to TV Show';
        aElem.target = "_blank";

        const divElem = document.createElement('div');
        divElem.innerHTML = tvSarja.show.summary;

        // lisätään articlen sisälle muut elementit kerralla
        articleElem.append(h2Elem, imgElem, aElem, divElem);
        resultsElem.append(articleElem);
    }
}
