/*
    Destructuring - Extract values from arrays and objects,
                    then assign them to variables in a convenient way

                [] = to perform array destructuring
                {} = to perform object destructuring
*/

//---------- Example: 1 --------------
//SWAP THE VALUES OF TWO VARIABLES

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log("a: " + a + " | " + "b: " + b);

//---------- Example: 2 --------------
//SWAP TWO ELEMENTS IN AN ARRAY

let colors = ["red", "green", "blue", "orange"];
[colors[0], colors[3]] = [colors[3], colors[0]];
console.log(colors);

//---------- Example: 3 --------------
//ASSIGN ARRAY ELEMENTS TO VARIABLES

let [color1, color2, ...remainingColors] = colors;

console.log(color1 + " and " + color2)
console.log(remainingColors);

//---------- Example: 4 --------------
//EXTRACT VALUES FROM OBJECTS

const person1 = {
    firstName: "SpongeBob",
    lastName: "SquarePants",
    job: "Cook"
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star"
}

const { firstName, lastName, job = "Unemployed" } = person2;

console.log(`${firstName} | ${lastName} | ${job}`);

//---------- Example: 5 --------------
//DESTRUCTURE IN FUNCTION PARAMETERS

function display({ firstName, lastName, job = "Unemployed" }) {
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
    console.log(`Job: ${job}`);
}

display(person1);