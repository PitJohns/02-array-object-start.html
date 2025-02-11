/* Theory 
const array =  [1, 2, 3, 5, 20, 42]; 
const arrayStrings = ['a', 'b', 'c', null, 17];
const array = new Array(1, 2, 3, 5, 20, 42);
console.log(array.length );
console.log(array [0]);
console.log(array [array.length - 1]);
console.log(array [10]);
array[0] = 'Privet! ';
console.log(array);
array[array.length] = 'becon';
*/
 //1:53:50

 const inputElement = document.getElementById('title');
 const createBtn = document.getElementById('create');
 const listElement = document.getElementById('list');

 //console.log(inputElement.value );
// const notes = ['рассказать блок про массивы', 'рассказать теорию объектов', 42]
/*function render() {
    /*for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
    }*
   for (let note of notes) {
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
   }
};

render();*/

 createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return
    }
    const newNote = {
      title: inputElement.value,
      completed: false,   };
    listElement.insertAdjacentHTML('beforeend', getNoteTemplate(newNote));
    inputElement.value = '';  
 };

 function getNoteTemplate(note, index) {
    return `
     <li class="list-group-item d-flex justify-content-between 
        align-items-center"
    >
        <span class="${note.completed ? 'text-decoration-line-through' : ''}">
        ${note.title}</span>
        <span>
            <span class="btn btn-${note.completed ? 'warning' : 'success'
            }" data-index="${index}">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
        </span>
        </li>`
 };

 /**
  * 
  * Object Theory 
  
 const person = {
    firstName: 'Vladilen',
    lastName: 'Minin',
    year: 1993, 
    hasGirlfriend: false,
    lahguafes: ['ru', 'en', 'de'],
    getFullName: function () {
        console.log(person.firstName + ' ' + person.lastName)
    }

 };

console.log(person.year);
console.log(person['firstName']);

const key = 'hasGirlfriend'
console.log(person[key])
person.hasGirlfriend = true;
console.log(person[key])
person.getFullName() 
*/

const notes = [
   {
    title: 'записать блок про массивы',
    completed: true,
   }, 
   {
    title: 'рассказать теорию объектов',
    completed: true,
   }, 
];

function render() {
  for (let i = 0; i < notes.length; i++) {
  listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
 }
};
render();

2:32