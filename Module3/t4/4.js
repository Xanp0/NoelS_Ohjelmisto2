'use strict';

const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const targetElem = document.querySelector('#target');

for (let student of students) {
  const item = document.createElement('option');
  item.innerHTML = student.name;
  item.value = student.id;
  targetElem.appendChild(item);
}
