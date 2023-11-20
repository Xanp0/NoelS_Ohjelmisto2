'use strict';

const targetElem = document.querySelector('#target');

let htmlOsio =
    `<li>First item</li>
     <li>Second item</li>
     <li>Third item</li>`

targetElem.innerHTML = htmlOsio;

targetElem.classList.add('my-list');