/* 
    rest parameters -
    (...rest) allow a function work with a variable
    number of arguments by bundling them into an array

    spread - expands an array into separate elements
    rest - bundles separate elements into an array
*/

const food1 = "Pizza";
const food2 = "Burger";
const food3 = "Sandwich";

function createArray(...foods) {
    return foods;
}

foods = createArray(food1, food2, food3);

console.log(...foods);

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

function average(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

console.log(sum(12, 21, 3, 45, 543, 4, 3));
console.log(average(3, 3));

function combineString(...strings) {
    return strings.join(" ");
}

console.log("Mr.", "Sponge Bob", "and", "Mr.", "Patrick");