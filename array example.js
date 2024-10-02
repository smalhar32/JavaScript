// Find the largest number in an array.

// There are different ways to solve this problem

// // 1
// function findLargestNumber(numbers) {
//     // Step 2: Initialize a variable to the first element
//     let largest = numbers[0];

//     // Step 3: Loop through the array, starting from the second element
//     for (let i = 1; i < numbers.length; i++) {
//         // Step 4: Compare each element with the current largest number
//         if (numbers[i] > largest) {
//             largest = numbers[i];  // Update largest if current element is larger
//         }
//     }

//     // Step 5: Return the largest number
//     return largest;
// }
// let arr = [3, 10, 4, 7, 15, 1];
// console.log(findLargestNumber(arr));  // Output: 15
// // First method ends here

// // 2

// function findLargestNumber(num) {
//         return Math.max(...num)
    
// }
// console.log(findLargestNumber([1,2,3,4,5,6]));
// // Second method ends here

// 3
let findLargestNumber = (num) =>(Math.max(...num))
console.log(findLargestNumber([1,2,3,4,5,6]));