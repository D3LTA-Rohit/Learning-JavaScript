const display = document.getElementById("display");
const result = document.getElementById("result");

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
    result.value = "";
}

function calculate(){
    try{
    result.value = eval(display.value); //eval() takes a string of JavaScript code and executes it.
    }catch(error){
        result.value = "ERROR";
    }
}