const input = document.getElementById("input");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const output = document.getElementById("output");

let celsius;
let fahrenheit;

function convert(){
    if(toFahrenheit.checked){
        celsius = Number(input.value);
        fahrenheit = (celsius * 9)/5 + 32;
        output.textContent = `${fahrenheit.toFixed(2)} F`;

    }else if(toCelsius.checked){
        fahrenheit = Number(input.value);
        celsius = (fahrenheit-32)*5/9;
        output.textContent = `${celsius.toFixed(2)} C`;
    }else{
        output.textContent = "Select an option";
    }
}