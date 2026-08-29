/*
    .map() - accepts a callback() function and applies that function to each
            element of an array, then returns a new array.
*/

function format(element) {
    let temp = element.split('-');
    return `${temp[1]} ${temp[2]}, ${temp[0]}`;
}

const dates = ["2019-May-19", "2018-July-19", "2017-November-14"];

let newDates = dates.map(format);

console.log(dates);
console.log(newDates);
