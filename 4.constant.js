// const = a variable that cannot be changed once assigned

const PI = 3.14;
let radius;
let circumference;
document.getElementById("submit").addEventListener("click",function(){
    radius = document.getElementById("radius").value;
    circumference = 2 * PI * radius;
    document.getElementById("h1").textContent = circumference + " cm";
});