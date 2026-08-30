/*
    Nested Objects - Objects inside other objects.
                    Allows you to represent more complex data structures.
                    Child object is enclosed by a parent object.

                    Person{ Address{}, ContactInfo{} }
*/

const person1 = {
    fullName: "Stephen Strange",
    age: 30,
    isSorcerer: true,

    address: {
        houseNo: "177A",
        street: "Bleaker St.",
        city: "New York"
    }
}

console.log(person1.fullName);
console.log(person1.age);
console.log(person1.isSorcerer);
console.log(person1.address);

console.log(person1.address.houseNo);
console.log(person1.address.street);
console.log(person1.address.city);

//Loop through nested object
for (let property in person1.address) {
    console.log(person1.address[property]);
}


//-----------Using Class-------------
class Address {
    constructor(houseNo, street, city) {
        this.houseNo = houseNo;
        this.street = street;
        this.city = city;
    }
}
class Person {
    constructor(fullName, age, isSorcerer, ...address) {
        this.fullName=fullName;
        this.age=age;
        this.isSorcerer=isSorcerer;
        this.address= new Address(...address);
    }
}
const person2 = new Person("Peter Parker","19","false",null,null,"New York");

console.log(person2.fullName);
console.log(person2.age);
console.log(person2.isSorcerer);
console.log(person2.address);

console.log(person2.address.houseNo);
console.log(person2.address.street);
console.log(person2.address.city);

//Loop through nested object
for (let property in person2.address) {
    console.log(person2.address[property]);
}