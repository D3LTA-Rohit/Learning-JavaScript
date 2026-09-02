/*
    JSON - JSON or JavaScript Object Notation is a data interchanging 
           format, used for exchanging data between a server and a 
           web application.

           JSON files {key:value} OR [value1, value2, value3, value4]

           JSON.stringify() - converts a JS object to a JSON string
           JSON.parse() - converts a JSON string to a JS object

*/

// Examples for JSON.stringify()
const names = [
    "Robert Reynolds",
    "James Barnes",
    "Yelena Belova",
    "Ava Starr",
    "John Walker",
    "Alexi Shostakov"
]; // Array
console.log(names);

const namesString = JSON.stringify(names);
console.log(namesString);

const person = {
    "name": "Peter Parker",
    "age": 24,
    "powers": [
        "Climbing Walls",
        "Spider Sense",
        "Enhanced Agility, Strength and Durability"
    ],
    "location": "New York"
}; // Object
console.log(person);

const personString = JSON.stringify(person);
console.log(personString);

const people = [
    {
        "name": "Tony Stark",
        "powers": [
            "Cursed with knowledge"
        ],
        "location": "New York"
    },
    {
        "name": "Steve Rogers",
        "powers": [
            "Super Human Strength",
            "Super Human Agility",
            "Super Human Stamina"
        ],
        "location": "New York"
    },
    {
        "name": "Thor Odinson",
        "powers": [
            "God of Thunder"
        ],
        "location": "Asgard"
    }
]; // Array of Objects
console.log(people);

const peopleString = JSON.stringify(people);
console.log(peopleString);


// Examples for JSON.parse()
console.log(JSON.parse(`[
    "Robert Reynolds",
    "James Barnes",
    "Yelena Belova",
    "Ava Starr",
    "John Walker",
    "Alexi Shostakov"
]`));

console.log(JSON.parse(`{
    "name": "Peter Parker",
    "age": 24,
    "powers": [
        "Climbing Walls",
        "Spider Sense",
        "Enhanced Agility, Strength and Durability"
    ],
    "location": "New York"
}`));

console.log(JSON.parse(`[
    {
        "name": "Tony Stark",
        "powers": [
            "Cursed with knowledge"
        ],
        "location": "New York"
    },
    {
        "name": "Steve Rogers",
        "powers": [
            "Super Human Strength",
            "Super Human Agility",
            "Super Human Stamina"
        ],
        "location": "New York"
    },
    {
        "name": "Thor Odinson",
        "powers": [
            "God of Thunder"
        ],
        "location": "Asgard"
    }
]`));