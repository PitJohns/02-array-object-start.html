const names =['Владилен', 'Елена', 'Игорь', 'Ксения'];

//names.push('Алена');
//names.unshift ('Алена');
//names.shift;

//const firstName = names.shift();
/*const firstName = names.pop();
console.log(firstName);
console.log('Names: ', names);*/

//console.log(names.reverse());
const letters = ['e', 'c', 'd', 'b', 'a'];
//const reversed = names.toReversed();
/*console.log(
    letters.toSorted(function (a, b) {
      return a.charCodeAt(0 ) - b.charCodeAt(0)
    })
);
console.log(letters );*/
//console.log(names.toSpliced(0, 2 ));
//console.log(names);

//const greateWoman = 'Елена';
//const index = names.indexOf(greateWoman);
//console.log(index);
//const newNames = names.with(index, 'Елена великая');

/*names[index] = 'Елена Вликая';
console.log(names[index]);
console.log(names)*/
//console.log(names);
//console.log(newNames);


// Time 3:06
/*const capitalNames = names.map(function(name, index) {
    if (index === 1 ) {
      return 'Елена Великая'
    } 
    return name;
}); */

//console.log(names.includes('Игорь'));
//console.log(names.indexOf('Игорь') !== -1 );

const people = [
  {name: 'Владилен', budget: 4200},
  {name: 'Елена', budget: 15100},
  {name: 'Игорь', budget: 300},
  {name: 'Ксения', budget: 7520},
]; 

 //console.log(people.indexOf({budget: 7520 }));

 /*let findedPerson 

 for (let person of people) {
  if (person.budget === 7520) {
    findedPerson = person
  };
 };*/

const findedPerson = people.find(function
  (person) {
    if (person.budget === 7520) {
      return true
    }
})

 console.log(findedPerson);
 3Ж:18:59