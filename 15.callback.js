/*
    Callback - a function that is passed as an argument to another function.

    Use to handle Asynchronous operations:
    1. Read a file
    2. Network Requests
    3. Interacting with Databases

    ( Hey, When you are done, call this next. )
*/

function sum(callback, numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    callback(result);
}

function display(result) {
    document.getElementById("display").textContent = result;
}

sum(display, [5, 5, 5, 5]);