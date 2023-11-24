'use strict';
const targetElem = document.querySelector('img');
const triggerElem = document.querySelector('p');

function mouseHits(evt) {
    targetElem.src = 'img/picB.jpg';
}
triggerElem.addEventListener("mouseenter", mouseHits);

triggerElem.addEventListener("mouseleave", function (evt) {
    targetElem.src = 'img/picA.jpg';
});
