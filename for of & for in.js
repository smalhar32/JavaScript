const fruits = ['banana','apple','peach','mango','grapes']

// //  for loop
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for of
for (const fruit of fruits) {
    console.log(fruit);
    
}
console.log('******************************************');

// const user = 'Shivam Malhar'

// for (const letter of user) {
//     console.log(letter);
    
// }

const person = {
    firstNmae: 'John',
    lastName: 'Sharma',
    age: 25,
    eyeColor: 'dark-brown',
    city: 'Bombay'
}

// for in
for (const key in person) {
    console.log(key,':',person[key]);
    
}

// const personKeys = Object.keys(person)
// const personValues = Object.values(person)
// const personEntries = Object.entries(person)

// for (const key of personKeys) {
//     console.log(person[key]);
// }

// We use for of for  arrays and for in for objects. 