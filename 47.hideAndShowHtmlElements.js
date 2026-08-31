const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const moonKnight = document.getElementById('moonKnight');
const emojis = document.getElementById('emojis');

button1.addEventListener("click",(event) => {
    if(moonKnight.style.visibility == "visible"){
        button1.textContent = "Show";
        moonKnight.style.visibility = "hidden";
    } else {
        button1.textContent = "Hide";
        moonKnight.style.visibility = "visible";
    } 
});

button2.addEventListener("click",(event) => {
    if(emojis.style.display == "block"){
        button2.textContent = "Show";
        emojis.style.display = "none";
    } else {
        button2.textContent = "Hide";
        emojis.style.display = "block";
    } 
});