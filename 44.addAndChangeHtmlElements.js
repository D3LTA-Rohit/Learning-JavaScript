/*
    Step 1: CREATE THE ELEMENT
    Step 2: ADD ATTRIBUTES/PROPERTIES   
    Step 3: APPEND ELEMENT TO DOM
    
    REMOVE HTML ELEMENT
*/

//Creating list element
const listItem = document.createElement("li");

//Adding attributes
listItem.id = "apple";
listItem.textContent = "Apple";
listItem.style.color = "red";
listItem.style.fontWeight = "bold";

//Appending to DOM
//document.getElementById("fruits").append(listItem); //append - element added to last
//document.getElementById("fruits").prepend(listItem);  //prepend - element added at first
//document.body.firstElementChild.append(listItem);

const fruits = document.querySelectorAll("#fruits li");
document.body.firstElementChild.insertBefore(listItem, fruits[2]);

//Example with h1 element
const message = document.createElement("h1");

message.textContent = "Falling Forever";
message.style.color = "olive";
message.style.fontWeight = "bold";
message.style.textAlign = "center";
message.style.fontSize = "60px";

let count = 1;
setInterval(() => {
    let id = "box" + String(count);
    document.getElementById(id).append(message);
    if (count == 5) {
        count = 1;
    } else {
        count++;
    }
}, 400);
