// 1️⃣ Console & Basic Operations (5 Questions)


// 1. Log "Hello, JavaScript!" to the console in 3 different ways.

// // Method 1: Using console.log()
// console.log("Hello, JavaScript!");

// // Method 2: Using console.warn()
// console.warn("Hello, JavaScript!");

// // Method 3: Using console.error()
// console.error("Hello, JavaScript!");

// 2. Perform 35 * 2 - (10 / 2) + 7 and log the result.

// const result = 35 * 2 - (10 / 2) + 7;
// console.log("Result of the calculation:", result);

// 3. Log the data type of "123", 123, true, and null using typeof.

// console.log("Data type of '123':", typeof "123");
// console.log("Data type of 123:", typeof 123);
// console.log("Data type of true:", typeof true);
// console.log("Data type of null:", typeof null); 

// 4. Write a program that swaps the values of two variables.

// let a = 5;
// let b = 10;

// console.log("Before swapping: a =", a, ", b =", b);

// Swapping values using a temporary variable
// let temp = a;
// a = b;
// b = temp;   
// console.log("After swapping using temp: a =", a, ", b =", b);

// Swapping values without a temporary variable
// a = a + b; // a now becomes 15
// b = a - b; // b becomes 5 (original value of a)
// a = a - b; // a becomes 10 (original value of b)
// console.log("After swapping without temp: a =", a, ", b =", b);

// swapping values using destructuring assignment
// [a, b] = [b, a];
// console.log("After swapping using destructuring: a =", a, ", b =", b);


// 5. Use console.group() to organize logs into a group.

// console.group("Grouped Logs");
// console.log("This is the first log in the group.");
// console.log("This is the second log in the group.");
// console.log("This is the third log in the group.");
// console.groupEnd("Grouped Logs");

// console.groupCollapsed("Collapsed Grouped Logs");
// console.log("This is a log in a collapsed group.");
// console.groupEnd("Collapsed Grouped Logs"); // This group will be collapsed by default.


// 2️⃣ Variables & Data Types (5 Questions)

// 6. Declare a const object, modify its properties, and log the updated object.

// const obj = {
//     name: "Shivam",
//     age: 23,
//     email: "shivam@example.com"
// }

// console.log("Original Object:", obj);
// obj.age = 24; // Modifying a property
// console.log("Updated Object:", obj);

// 7. Convert "50" (string) into a number using 3 different methods.

// let num = "50";
// // Method 1: Using Number()
// console.log(Number(num)); // 50


// // Method 2: Using parseInt()
// console.log(parseInt(num)); // 50

// // Method 3: Using unary plus operator
// console.log(+num); // 50

// 8. Check if "JavaScript" contains "Script" without using .includes().


let str = "JavaScript";

//using include()

// console.log(str.includes("Script")); // true

// without using .includes()

// //using indexOf()
// console.log(str.indexOf("Script") !== -1); // true;

// //using search()
// console.log(str.search("Script") !== -1); // true

// // using regex
// console.log(/Script/.test(str)); // true

// 9. Create an array of 5 numbers and log the sum using .reduce().

// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log("Sum of the array:", sum); // 15

// 10. Explain the difference between undefined, null, and NaN with examples.

// let a; // Undefined
// console.log(a); // undefined

// let b = null; // Explicitly assigned null
// console.log(b); // null

// let c = "hello" / 2; // Invalid math operation
// console.log(c); // NaN
// console.log(typeof NaN); // "number" (weird JS quirk)