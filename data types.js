// Declare variables
var name = "John";   // function-scoped, avoid using in modern code
let age = 25;        // block-scoped, preferable
const pi = 3.14;     // constant value, cannot be reassigned

// Data types
let str = "Hello";     // String
let num = 123;         // Number
let bool = true;       // Boolean
let und;               // undefined
let n = null;          // null
let obj = {key: "value"};  // Object
let arr = [1, 2, 3];   // Array

// 1. What is the difference between var, let, and const?
// Answer:

// var is function-scoped, whereas let and const are block-scoped.
// let allows you to declare variables that can be reassigned, but const is used to declare constants that cannot be reassigned.
// Variables declared with var are hoisted and initialized with undefined, while let and const are hoisted but not initialized (creating a "temporal dead zone" until they are declared).
