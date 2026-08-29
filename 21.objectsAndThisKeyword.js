/*
    object - A collection of related properties and/or methods

    can represent a real world entity (people, product, places)

    object = {key:value,
                function()}

    this keyword - reference to the object where `this` is used
                    (the object depends upon the immediate context)
                    person.name = this.name;

    Note - this keyword doesn't work with arrow functions
*/

const SpiderMan = {
    realName: "Peter Parker",
    age: 18,
    powers: ["Super Human Strength", "Agility", "Can Stick to walls", "Can shoot Webs"],
    isMutant: false,

    shootWeb: function () { console.log(`Shooting web`) },
    introduce: function () { console.log(`Hi, My real name is ${this.realName}`) }
}

const Wolverine = {
    realName: "Logan",
    age: 200,
    powers: ["Healing", "Adamentium Skeloton", "Adamentium Claws"],
    isMutant: true,

    attack: () => console.log(`attacking with claws`),
    introduce: function () { console.log(`Hi, My real name is ${this.realName}`) }
}

console.log(SpiderMan.realName);
console.log(SpiderMan.powers);
SpiderMan.shootWeb();
SpiderMan.introduce();

console.log(Wolverine.realName);
console.log(Wolverine.powers);
Wolverine.attack();
Wolverine.introduce();