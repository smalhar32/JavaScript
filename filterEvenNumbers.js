function filterEvenNumbers(numbers) {
    // Use the filter() method to keep only even numbers
    return numbers.filter(function(num){
        return num % 2 === 0;
    })
}
let evenNumbers = filterEveNumbers([1,,2,3,4,5,6]);
console.log(evenNumbers);