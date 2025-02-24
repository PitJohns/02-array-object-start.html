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
 /*const finded = people.find(function (person) {
  return person.budget === 7520 
})*/


/*const finded = people.findIndex(function (person) {
    return person.budget === 7520 
})

//const finded = people.find((p) => p.budget === 7520)

 console.log(people.with(finded, 42));*/
/*let sumBudget = 0
const filtered = people.filter(function(p) {
   return p.budget > 5000
 })

console.log(filtered)
filtered.forEach(function(p) {
   sumBudget += p.budget
}) 
console.log(sumBudget)*/

/*const byBudget = p => p.budget > 5000
const pickBudget = (p) => p.budget 

const sumBudget = people
  .filter(byBudget)
  .map(pickBudget)
  .reduce((acc, p) => acc + p, 0)


console.log(sumBudget)*/

const string = 'Првет, как дела?'
const reversed = string
.split('')
.toReversed()
.join('!')
.split('')
.filter(c => c != '!')
.join('')

console.log(reversed)