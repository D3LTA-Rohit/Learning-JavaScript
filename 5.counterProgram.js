const increase = document.getElementById("increaseButton");
const reset = document.getElementById("resetButton");
const decrease = document.getElementById("decreaseButton");

let counter = 0;

increase.addEventListener("click", function () {
    counter++;
    document.getElementById("label").textContent = counter;
});

reset.addEventListener("click", function () {
    counter = 0;
    document.getElementById("label").textContent = counter;
});

decrease.addEventListener("click", function () {
    counter--;
    document.getElementById("label").textContent = counter;
});