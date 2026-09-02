const choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const computerScore = document.getElementById("computerScore");
const playerScore = document.getElementById("playerScore");

let scoreComputer = 0;
let scorePlayer = 0;

function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if (playerChoice === computerChoice) {
        result = "It's a TIE!";
    } else {
        switch (playerChoice) {
            case "Rock": result = (computerChoice === "Scissors") ? "You WIN!" : "You LOSE!";
                break;

            case "Paper": result = (computerChoice === "Rock") ? "You WIN!" : "You LOSE!";
                break;

            case "Scissors": result = (computerChoice === "Paper") ? "You WIN!" : "You LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("redColor", "greenColor");

    if (result === "You WIN!") {
        resultDisplay.classList.add("greenColor");
        scorePlayer++;
        playerScore.textContent = `Player Score: ${scorePlayer}`;
    } else if (result === "You LOSE!") {
        resultDisplay.classList.add("redColor");
        scoreComputer++;
        computerScore.textContent = `Computer Score: ${scoreComputer}`;
    }


}
