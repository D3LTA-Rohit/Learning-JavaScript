/*
    sort() - method used to sort array in place.
            It sorts elements as strings in lexicographic order, not alphabetical.
            lexicographic = (alphabet + numbers + symbols) as strings
*/

const pokemon = [{ name: "Pikachu", type: "Electric", color: "Yellow" },
{ name: "Squirtal", type: "Water", color: "Blue" },
{ name: "Charmander", type: "Fire", color: "Orange" },
{ name: "Bulbasaur", type: "Grass", color: "Green" }];

const pokemonNames = pokemon.map(element => element.name);
pokemonNames.sort();
console.log(pokemonNames);

const numbers = [5, 4, 3, 7, 8, 6, 5, 4, 3, 9, 12, 45, 563, 454, 63, 23, 12];
numbers.sort((first, second) => first - second);
console.log(numbers);

//Method will do a comparison of string using lexicographic order
pokemon.sort((first,second) => first.name.localeCompare(second.name));
console.log(pokemon);