/*
    error - an object that is created to represent a problem that occurs
            Occur often with user input or establishing a connection
            
    try {} - Encloses code that might potentially cause an error. 
    catch {} - Catch and handle any thrown errors from try {} block.
    finally {} - (optional) always executes. Used mostly for clean up.
                close files, close connections, release resources.
*/

try {
    console.lag("Hello");
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
} catch (error) {
    console.error(error);
} finally {
    console.log("Always Executes.");
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
}

//-----------------------------Example---------------------------------

try {
    let dividend = Number(window.prompt("Enter Dividend: "));
    let divisor = Number(window.prompt("Enter DIvisor: "));

    if (dividend == NaN || divisor == NaN) {
        throw new Error("Dividend and Divisor should be a number.");
    }
    if (divisor == 0) {
        throw new Error("Divisor shouldn't be zero.");
    }

    console.log("Result: " + (dividend / divisor));
} catch (error) {
    console.log(error);
}

console.log("End");
