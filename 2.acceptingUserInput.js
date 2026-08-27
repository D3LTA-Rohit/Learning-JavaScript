// Accepting user input

// Easy way --> Window Prompt
/*
    let userName = window.prompt('Enter your name: ');
    document.getElementById("h1id").textContent = `Hello ${userName}`;
*/

//Professional way --> HTML textbox
/*
    document.getElementById("button").onclick = function(){
        let userName = document.getElementById("userName").value;
        document.getElementById("h1").textContent = `Hello ${userName}`;
    }
*/

//Modern way
document.getElementById("button").addEventListener("click", function () {
    let userName = document.getElementById("userName").value;
    document.getElementById("h1").textContent = `Hello ${userName}`;
});