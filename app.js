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

 createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return 
    }
     listElement.insertAdjacentHTML(
        'beforeend',
        `
            <li class="list-group-item d-flex justify-content-between 
                align-items-center"
            >
            <span>${inputElement.value}</span>
            <span>
                <span class="btn btn-small btn-success">&check;</span>
                <span class="btn btn-small btn-danger">&times;</span>
            </span>
            </li>`
    );
    inputElement.value = '';  
 };

 2:02 