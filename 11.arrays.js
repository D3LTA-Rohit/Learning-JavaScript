//array - a variable like structure that can hold more than one value

let fruits = ["pineapple","apple","coconut","kiwi","banana"];

console.log(fruits);

console.log(fruits.length); //number of elements

fruits.push("mango"); //element added to last
console.log(fruits);

fruits.pop(); //element deleted to last
console.log(fruits);

fruits.unshift("oranges");
console.log(fruits);

console.log(fruits.shift()); //Removes the first element from an array and returns it
console.log(fruits);

console.log(fruits.indexOf("kiwi"));

for(let fruit of fruits){
    console.log(fruit);
}

console.log(fruits.sort());
console.log(fruits.sort().reverse());

console.log(fruits);

/*
    spread operator (...) - allows an  iterable
                            such as an array or a string
                            to be expanded into separate elements.
                            (unpacks the elements)
*/

let numbers=[65,34,78,56,34,23,89,90,34];

console.log(Math.max(...numbers));

let name = "Peter Parker";
let letters = [...name];
console.log(letters.join('^'));

let copyFruits = [...fruits];
console.log(copyFruits);