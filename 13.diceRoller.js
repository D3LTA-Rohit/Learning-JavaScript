function roll() {
    const input = document.getElementById("input").value;
    const submit = document.getElementById("submit");
    const result = document.getElementById("result");
    let images = [];

    for (let i = 0; i < input; i++) {
        let temp = Math.floor(Math.random() * 6) + 1;
        images.push(`<img src = "DiceImages/${temp}.png" alt = "Dice ${temp}">`);
    }
    result.innerHTML = images.join('');
}