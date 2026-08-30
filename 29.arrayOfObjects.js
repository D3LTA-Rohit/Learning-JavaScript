const pokemon = [{ name: "Pikachu", type: "Electric", color: "Yellow" },
{ name: "Squirtal", type: "Water", color: "Blue" },
{ name: "Charmander", type: "Fire", color: "Orange" },
{ name: "Bulbasaur", type: "Grass", color: "Green" }];

const deletedPokemon = pokemon.splice(0, 1, { name: "Tododile", type: "Water", color: "Blue" });

console.log(pokemon);
console.log(deletedPokemon);

//-----------array.forEach()-----------
pokemon.forEach((element) => console.log(element.color));

//-------------array.map()----------------
const pokemonNames = pokemon.map(element => element.name);
console.log(pokemonNames);

//-------------array.filter()-------------
const bluePokemons = pokemon.filter(element => element.color === "Blue");

console.log(bluePokemons);

//--------------array.reduce()---------------
const pokemonWithBiggestName = pokemon.reduce(
    (accumulator, element) => (accumulator.name.length >= element.name.length) ? accumulator : element);

console.log(pokemonWithBiggestName);

console.log(pokemon.sort());
