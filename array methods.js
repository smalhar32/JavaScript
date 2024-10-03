const evenNumbers = [0,2,4,6,8,44,26,56,90,-2]
console.log(evenNumbers);

evenNumbers.shift()
console.log(evenNumbers);

evenNumbers.unshift(-2)
console.log(evenNumbers);

const animals =  ['cat', 'dog', 'bird','lion','elephant','goat']

let animal_num = evenNumbers.concat(animals)
console.log(animal_num);

console.log(evenNumbers.indexOf(4));
console.log(evenNumbers.includes(3));
console.log(evenNumbers.sort());
console.log(animals.sort());
console.log(evenNumbers.reverse());
console.log(animals.slice(2,5));   //Does not modify the original array
console.log(animals.splice(2,1,'rat')); //Modify the original array
console.log(animals);