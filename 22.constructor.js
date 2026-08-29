/*
    Constructor - a special method for defining the properties and methods for objects
*/

function Pokemon(name, type, specialAttack) {
    this.name = name;
    this.type = type;
    this.specialAttack = specialAttack;

    this.attack = function (){console.log(`${this.name} attack with ${this.specialAttack}`)}
}

const pokemon1=new Pokemon("Pikachu","Electric","Thunderbolt");

const pokemon2=new Pokemon("Blastoise","Water","Hydro Cannon");

console.log(pokemon1.name + " " + pokemon1.type);
console.log(pokemon2.name + " " + pokemon2.type);

pokemon1.attack();
pokemon2.attack();