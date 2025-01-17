// Rock, Paper, Scissors
// 0 = Rock, 1 = Paper, 2 = Scissors

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0: 
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let message = "Rock, paper or scissors?"
    
    while (true) {
        let choice = prompt(message).toLowerCase();

        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            return choice;
        }

        message = "Please enter a valid input. Rock, paper or scissors?";
    }
}

function capitalize(word) {
    return String(word).charAt(0).toUpperCase() + String(word).slice(1);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
        return;
    }

    if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
        humanScore++;
    }
    else {
        console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
        computerScore++;
    }
}

let computerScore = 0;
let humanScore = 0;
let round = 1;

while (round < 6) {
    console.log(`Round ${round}! The score is: You ${humanScore} - Computer ${computerScore}`);
    playRound(getHumanChoice(), getComputerChoice());
    round++;
}

console.log(`Game over! Final score: You ${humanScore} - Computer ${computerScore}`);
if (humanScore > computerScore) {
    console.log("You win!");
}
else if (computerScore > humanScore) {
    console.log("You lose!");
}
else {
    console.log("It's a draw!");
}