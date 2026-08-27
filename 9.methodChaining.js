// Method chaining - calling one method after another in continuous line of code

let userName = window.prompt("Enter user name: ");

// No method chaining

/*
    userName=userName.trim();    
    let first = userName.charAt(0);
    first =first.toUpperCase();

    let remaining = userName.slice(1);
    remaining=remaining.toLowerCase();

    userName=first+remaining;

    console.log(userName);
*/

// Method Chaining

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
console.log(userName);