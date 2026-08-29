/*
    .forEach() - an array method used to iterate over the elements of the array 
                and applied a specified function(callback) to each element.

                array.forEach(callback);

                element, index, array are provided.
*/

let fruits = ["apple", "pineapple", "orange", "kiwi", "mango"];


fruits.forEach(display);

fruits.forEach(uppercase);
fruits.forEach(display);

fruits.forEach(lowercase);
fruits.forEach(display);

fruits.forEach(capitalize);
fruits.forEach(display);

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}

function lowercase(element, index, array) {
    array[index] = element.toLowerCase();
}

function uppercase(element, index, array) {
    array[index] = element.toUpperCase();
}

function display(element) {
    console.log(element);
}