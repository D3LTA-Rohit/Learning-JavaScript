/*
    .filter() - creates a new array by filtering out elements
*/

//Example 1
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isOdd(element) {
    return element % 2 !== 0;
}

function isEven(element) {
    return element % 2 === 0;
}

let oddNumbers = numbers.filter(isOdd);
let evenNumbers = numbers.filter(isEven);

console.log(oddNumbers);
console.log(evenNumbers);

//Example 2
const fruits = ["apple", "banana", "pineapple", "mango", "kiwi", "orange"];

function getShortNames(element) {
    return element.length >= 6;
}

let fruitList = fruits.filter(getShortNames);
console.log(fruitList);