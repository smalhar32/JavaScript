// Given an object representing a person (e.g., {name: "John", age: 30, job: "Engineer"}), write a function that takes this object and returns a string like: "John is 30 years old and works as an Engineer."

function personDescription(name,age,job){
    return `${name} is ${age} years old work as a ${job}`
}
let person = {name: "Aman", age: 23, job: "Engineer"}
console.log(personDescription(person.name,person.age,person.job));
//Output=> Aman is 23 years old work as a Engineer

// Explanation:
// The template literal (${...}) is used to inject the values of name, age, and job into the string dynamically.
// You access the properties from the person object using person.name, person.age, and person.job.