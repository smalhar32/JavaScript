//multi-dimentional array is an array in which there are multiple arrays inside array 
// Or you can say that array inside array

const fruits = ['Mango', 'Apple', 'Orange']

//Using assign object
// const myFruits=[] 
// Object.assign(myFruits, fruits)

//Using  spread operator(...)
const myFruits = [...fruits]
//Shallow copy
myFruits.push('Dates')
myFruits.push('Grapes')

const user1={
    firstName:'Anurag',
    lastName: 'Singh'
}

// const  user2 = {}

// Object.assign(user2,user1)

const user2 = {...user1}
user2.firstName = 'Rahul'
//tic-tac-toe

// const ticTacToe = [
//   ['X',null,null],
//   [null,null,'O'],
//   ['O',null,'X'],
// ];
// console.log(ticTacToe);