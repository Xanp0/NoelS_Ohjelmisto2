'use strict';

const names = ['John', 'Paul', 'Jones'];

const targetElem = document.querySelector('#target');

let htmlOsio = ''
htmlOsio += `<ul>`;

for (let nimi of names) {
    htmlOsio += `<li> ${nimi} </li>`;
}
htmlOsio += `</ul>`;

targetElem.innerHTML = htmlOsio;

// tulosti nimet vierekkäin, mutta ei tottakai listana...
//for (let nimi of names) {
    //targetElem.innerHTML += nimi
//}
