/*
    callback Hell - situation in JavaScript where callbacks are nested within
                    other callbacks to the degree where the code is difficult
                    to read.

                    Old pattern to handle asynchronous functions.

                    Use Promises + Async/Await to avoid callback hell.
*/

function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 Completed.");
        callback();
    }, 2000);
}

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 Completed.");
        callback();
    }, 1000);
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 Completed.");
        callback();
    }, 3000);
}

function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 Completed.");
        callback();
    }, 2000);
}

function task5(callback) {
    setTimeout(() => {
        console.log("Task 5 Completed.");
        callback();
    }, 4000);
}

//A pyramid pattern is start to build
task1(() => {
    task2(() => {
        task3(() => {
            task4(() => {
                task5(() => {
                    console.log("All tasks completed.")
                });
            });
        });
    });
});