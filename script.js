// // rest parameter
// // rest parameter is used to pass a variable number of arguments to a function. It is similar to the arguments object in JavaScript.

// function abcd(a,b,c,...rest) {
// console.log(a,b,c,rest);

// }

// abcd(1,2,3,4,5,6,7,8,9,10);

// // Output: 1 2 3 [ 4, 5, 6, 7, 8, 9, 10 ]

// // In the above example, the rest parameter is used to pass a variable number of arguments to the function. The rest parameter is used to pass the remaining arguments to the function as an array.

// // hoisting
// // Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// console.log(a);
// var a = 10;

// // What happens in the above example?
// // var a;                   // variable declaration
// // console.log(a);          // variable reference
// // a = 10;                  // variable initialization

// // Output: undefined

// // In the above example, the variable a is declared after it is used. The variable a is hoisted to the top of the scope. The variable a is initialized with undefined. So, the output of the above example is undefined.

// iife - Immediately Invoked Function Expression
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.

// Example 1: IIFE
// (function () {
//     console.log('Hello World');
// })();
// // Output: Hello World

// // Example 2: IIFE
// var sherry = (function sherylibrary() {
//     var lolo = 12;
//     return {
//         imageEffect: function () {
//             console.log("image effect");

//         },
//         mouseFollower: function (){
//             console.log("mouse follower");

//         }

//     };
// })();
// // console.log(sherry);
// console.log(sherry.imageEffect());
// console.log(sherry.mouseFollower());

// In the above example, the function is defined and invoked immediately. The function is defined inside the parentheses. The function is invoked using ().

// hofs - higher order functions

// // return the function

// function abcd() {
//     console.log("hello");

//     return function(){
//         console.log("heyeye");

//     }
// }
// var ans = abcd();
// ans();

// // accept the function

// function abcd(fnc){
//     fnc();
// }

// abcd(function(){
//     console.log("heyeyeye");

// })


// callback function

function abcd(values) {
    values();
}
abcd(function (){
    console.log("call karte time jis function ko bheja jaye use callback funciton bolte hai");
    
})