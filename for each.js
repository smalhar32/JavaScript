const fruits = ['banana','apple','peach','mango','grapes']

// for (const fruit of fruits) {
//     console.log(fruit);    
// }

// fruits.forEach(function(fruit){
//     console.log(fruit);
    
// })

fruits.forEach((fruit) => {console.log(fruit)});

// fruits.forEach((fruit) => {console.log(fruit.toUpperCase());
//     return fruit.toUpperCase()  // thi will not turn the elements in upper case but it will be used to avoid undefined in the output
// })

// for each ka koi defined value nhi hota hai is liye undefined return kar deta hai

fruits.forEach(fruit => {
    console.log(fruit);
    
});