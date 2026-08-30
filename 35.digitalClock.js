function updateClock() {
    const date = new Date();
    let hours = date.getHours();

    const meridiem = hours >= 12 ? "PM" : "AM"; // 0 = Midnight

    /* 
        hours = hours % 12;
        if (hours === 0) { hours = 12; }
    */

    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0)
    const minutes = date.getMinutes().toString().padStart(2, 0);
    const seconds = date.getSeconds().toString().padStart(2, 0);

    const time = `${hours}:${minutes}:${seconds} ${meridiem}`;

    document.getElementById("clock").textContent = time;
}

setInterval(updateClock, 1000); //updating clock after every one second