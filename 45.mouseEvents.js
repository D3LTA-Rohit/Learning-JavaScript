/*
    eventListeners - Listen for specific events to create interactive web pages

    Mouse Events - click, mouseover, mouseout
    
    element.addEventListener(event, callback);
*/

const buttons = document.querySelectorAll("button");

buttons.forEach(element => {
    //let color = ((String)(element.id)).replace("Button","");
    element.addEventListener("mouseover", (event) => {
        document.body.style.backgroundColor = event.target.dataset.color;
    })

    element.addEventListener("mouseout",(event)=>{
        document.body.style.backgroundColor = "white";
    })
});

