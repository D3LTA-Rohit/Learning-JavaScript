/*
    Function Definition - Define a reusable block of code that performs a specific task 

    Function Expression - A way to define functions as a value or variables
*/

const hello = function () {
    console.log("hello");
}

hello();

setTimeout(function () { console.log(" world!!") }, 2000);

/*
    Arrow Functions - A concise way to write function expressions
                        good for simple functions that you use only once
                        (parameters) => some code
*/

const printName = (name) => console.log(`${name}`);

printName("Rohit");


//Example of function expressions and arrow functions using map, filter and reduce

const numbers = [1, 2, 3, 4, 5]

const squares = numbers.map(function (element) { return Math.pow(element, 2); });
console.log(`Squares: ${squares}`);

const cubes = numbers.map((element) => Math.pow(element, 3));
console.log(`Cubes: ${cubes}`);

const evenNumbers = numbers.filter(function (element) { return element % 2 === 0; });
console.log(`Even Numbers: ${evenNumbers}`);

const oddNumbers = numbers.filter((element) => element % 2 !== 0);
console.log(`Odd Numbers: ${oddNumbers}`);

const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(`Total: ${total}`);