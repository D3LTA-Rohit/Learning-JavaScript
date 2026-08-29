/*
    .reduce() - reduce the elements of an array to a single value
*/

const prices = [10, 15, 25];

console.log(prices.reduce(total).toFixed(2));

console.log(prices.reduce(getMax));

function total(accumulator, element) {
    return accumulator + element;
}

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}