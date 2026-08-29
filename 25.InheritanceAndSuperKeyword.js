/*
    Inheritance - allows a new class to inherit properties and methods from an existing class
                (Parent --> Child)
                helps with code reusability
*/
class Shape {
    numberOfSides;

    display() { console.log(`Shape: ${this.name} | Sides: ${this.numberOfSides}`); }
}
class Square extends Shape {
    name = "Square";
    numberOfSides = 4;
}
class Triangle extends Shape {
    name = "Triangle";
    numberOfSides = 3;
}

const square = new Square();
const triangle = new Triangle();

square.display();
triangle.display()

/*
    super - keyword is used in classes to call the constructor or access the properties and 
            methods of parent (super class / base class)

            this = this object
            super = the parent
*/

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Bear extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }
}

class Eagle extends Animal {
    constructor(name, age, flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const bear = new Bear("bear",25,45);
const eagle = new Eagle("eagle",20,55);

console.log(`Name: ${bear.name} | Age: ${bear.age} | Run Speed: ${bear.runSpeed}`);
console.log(`Name: ${eagle.name} | Age: ${eagle.age} | Fly Speed: ${eagle.flySpeed}`);