/*
    getters - a special method that makes a property readable (get keyword)
    setters - a special method that makes a property writable (set keyword)

    validate and modify a value when reading or writing a property
*/

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName) {
        if (typeof (newFirstName) === "string" && newFirstName.length > 0) {
            this._firstName = newFirstName;
        } else {
            console.error('First Name must be a non-empty String');
        }
    }
    set lastName(newLastName) {
        if (typeof (newLastName) === "string" && newLastName.length > 0) {
            this._lastName = newLastName;
        } else {
            console.error('Last Name must be a non-empty String');
        }
    }
    set age(newAge) {
        if (typeof (newAge) === "number" && newAge >= 0) {
            this._age = newAge;
        } else {
            console.error('Age must be a non-negative numeric value.');
        }
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get fullname() {
        return this._firstName + this.lastName;
    }
    get age() {
        return this._age;
    }
}

const person = new Person("Rohit", "Kumar", 23);

console.log("First Name: " + person.firstName);
console.log("Last Name: " + person.lastName);
console.log("Full Name: " + person.fullname);
console.log("Age: " + person.age);