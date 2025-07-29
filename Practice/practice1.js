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