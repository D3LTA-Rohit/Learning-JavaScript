/*
    class - (ES6 feature) provides a more structured and cleaner way work with objects compared 
            to traditional constructor functions
*/

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    details(){
        console.log(`name = ${this.name}\nprice = $${this.price.toFixed(2)}`);
    }
}

const product1 = new Product("Shirt", 10);
const product2 = new Product("Pant", 20);

product1.details();
product2.details();