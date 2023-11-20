'use strict';

const targetElem = document.getElementById('target');

const ekaElem = document.createElement('li');
ekaElem.innerHTML = 'First item';

const toinenElem = document.createElement('li');
toinenElem.innerHTML = 'Second item';

const kolmasElem = document.createElement('li');
kolmasElem.innerHTML = 'Third item';

targetElem.appendChild(ekaElem);
targetElem.appendChild(toinenElem);
targetElem.appendChild(kolmasElem);

const liElements = document.querySelectorAll('li');

const listanToinenElem = liElements[1];
listanToinenElem.classList.add('my-item');