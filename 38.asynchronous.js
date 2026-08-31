/*
    synchronous - Executes line by line consecutively in a sequential manner.
                Code that waits for an operation to complete.
    
    asynchronous - Allows multiple operations to be performed concurrently without waiting.
                    Doesn't block the execution flow and allows the program to continue.
                    (IO operations, network requests, fetching data)
                    
                    Handled with: callbacks, promises, async/await
*/

setTimeout(() => console.log("Completed Task 1"), 2000);
setTimeout(() => console.log("Completed Task 2"), 4000);
setTimeout(() => console.log("Completed Task 3"), 1000);
setTimeout(() => console.log("Completed Task 4"), 5000);