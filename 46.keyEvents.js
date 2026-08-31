const box = document.getElementById("box");

const movement = 10;
let verticalMovement = 0;
let horizontalMovement = 0;

document.body.addEventListener("keydown", event => {
    console.log(event);
    if (event.key.startsWith("Arrow")) {

        event.preventDefault(); /* The preventDefault() method of the Event interface tells the user agent 
        that the event is being explicitly handled, so its default action, such as page scrolling, 
        link navigation, or pasting text, should not be taken. */

        box.style.backgroundColor = "tomato";
        box.textContent = "🐄";

        switch (event.key) {
            case "ArrowUp":
                verticalMovement -= movement;
                break;

            case "ArrowDown":
                verticalMovement += movement;
                break;

            case "ArrowLeft":
                horizontalMovement -= movement;
                break;

            case "ArrowRight":
                horizontalMovement += movement;
                break;
        }

        box.style.top = `${verticalMovement}px`;
        box.style.left = `${horizontalMovement}px`;
    }
});

document.body.addEventListener("keyup", event => {
    console.log(event);
    if (event.key.startsWith("Arrow")) {
        box.style.backgroundColor = "yellowgreen";
        box.textContent = "🐮";
    }
});