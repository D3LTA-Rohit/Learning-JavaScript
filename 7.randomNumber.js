const generateButton = document.getElementById("generateButton");
const result = document.getElementById("result");

let min = Number(document.getElementById("min").value);
let max = Number(document.getElementById("max").value);
let randomNumber;

generateButton.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("result").textContent = randomNumber;
})