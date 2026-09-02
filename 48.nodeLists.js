/*
    NodeList - Static collection of HTML elements by (id, class, element)
                
    Can be created by using querySelectorAll() method
    
    Similar to an array, but no map, filter and reduce methods are available.

    NodeList won't be updated when the DOM changes, 
    but HTMLCollection will be updated when the DOM changes.
*/

let boxes = document.querySelectorAll('.boxes'); // returns a NodeList of all elements with class 'boxes'

boxes.forEach((box) => {
    box.addEventListener("mouseover",(event) => {
        event.target.style.backgroundColor = "rgb(71, 71, 71)";
    });

    box.addEventListener("mouseout",(event) => {
        event.target.style.backgroundColor = "black";
    });

    box.addEventListener("click",(event) => {
        switch(event.target.id){
            case "button1" : event.target.style.backgroundColor = "tomato";
                            break;
            case "button2" : event.target.style.backgroundColor = "grey";
                            break;
            case "button3" : event.target.style.backgroundColor = "lightGreen";
                            break;
            case "button4" : event.target.style.backgroundColor = "pink";
                            break;                            
        }
    });
});

//Adding another box

const box = document.createElement("button");

box.id="button5";
box.classList= "boxes";
box.textContent="New Box";

document.body.appendChild(box);

boxes = document.querySelectorAll(".boxes"); //update NodeList as DOM changes

console.log(boxes);
