const display = document.getElementById("display");

let timer = null;
let startTime = 0;
let elapsedTime = 0; //Amount of time that has been passed between start and end
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;

    display.textContent = "00:00:00:000";
}

function update() {
    let currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));     // 1hr = 3600000ms 
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);   // 1min = 60000ms
    let seconds = Math.floor(elapsedTime / 1000 % 60);          // 1sec = 1000ms
    let milliseconds = Math.floor(elapsedTime % 1000);

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    milliseconds = milliseconds.toString().padStart(3, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}