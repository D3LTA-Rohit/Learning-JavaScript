/*
    closure - A function defined inside of another function.
                The inner function has access to the variables and scope of the outer function.

                Allow for private variables and scope maintenance

                Used frequently in JS Frameworks: React, Vue, Angular
*/

function outer() {
    let message = "message";

    function inner() {
        console.log(message);
    }
    inner();
}
outer();

//----------------- Example: Counter ---------------------------------

function createCounter() {

    let counter = 0;

    function increaseCounter() {
        counter++;
        console.log(`Count increased to ${counter}`);
    }

    function decreaseCounter() {
        counter--;
        console.log(`Count decreased to ${counter}`);
    }

    function getCounter() {
        return counter;
    }

    return { increaseCounter:increaseCounter, decreaseCounter, getCounter };
}

const counter = createCounter();
console.log(counter);

counter.increaseCounter();
counter.increaseCounter();
counter.decreaseCounter();

console.log(counter.getCounter());