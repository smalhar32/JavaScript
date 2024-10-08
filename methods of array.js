//1. toString()
//The toString() Returns a string with array values separated by commas.

let bikes = ["Yamaha", "Bajaj", "Honda", "TVS"];
// console.log(bikes.toString());

// 2. join()
// The join() returns a new string by concatenating all of hte elements in an array. Separated by commas or a specified separator sting.

// console.log(bikes.join());
// console.log(bikes.join(""));
// console.log(bikes.join("-"));

// 3. pop()
// The pop() method removes the last element of an array, and returns the removed element.
// And this method changes the original array.

// console.log(bikes.pop());
// console.log(bikes);

// 4. push()
// The push() adds new items to the end of an array, and its changes the length of the array.
// returns the new length.

// console.log(bikes.push('Ducatti','Royal Enfield'));
// console.log(bikes);

// 5.shift()
// The shift() removes the first element and returns it.

// console.log(bikes.shift());
// console.log(bikes);

//6. unshift()
//The unshift() adds element to beginning and returns new array length.

// console.log(bikes.unshift('BMW','Kawasaki'));
// console.log(bikes);

// 7. delete(operator)
// Array elements can be deleted using the JavaScript operator delete.
//Using delete leaves undefined holes in the array.

// let fruits = ['banana','apple','grapes']
// delete fruits[1]
// console.log(fruits);

// 8.concat()
// The concat() method concatenates (joins) two or more arrays. returns a new array, containging the joined array

// let arr1 = [1, 2, 3];
// let arr2 = [23,43,53];
// let arr3 = [111,12];

// let newArr = arr1.concat(arr2,arr3);
// console.log(newArr);