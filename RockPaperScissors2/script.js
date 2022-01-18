let choices = ["Rock", "Paper", "Scissors"];
function computerPlay(choices) {
    let option = choices[Math.floor(Math.random()*choices.length)];
    return option;
}


let playerSelection = "";
let computerSelection = "";

function oneRound(playerSelection,computerSelection) {

let playerOutcome = [playerSelection == "rock" && computerSelection == "scissors",
playerSelection == "paper" && computerSelection == "rock",
playerSelection == "scissors" && computerSelection == "paper"];

let computerOutcome = [playerSelection == "rock" && computerSelection == "paper",
playerSelection == "scissors" && computerSelection == "rock",
playerSelection == "paper" && computerSelection == "scissors"];

let tieGame = [playerSelection == "rock" && computerSelection == "rock", 
playerSelection == "paper" && computerSelection == "paper", 
playerSelection == "scissors" && computerSelection == "scissors"];

    if (playerOutcome) {
        console.log("You win! Fire on...")
    }
    else if(computerOutcome) {
        console.log("You lose! Try again");
    }
    else if(tieGame) {
        console.log("It's a tie! Play again");
    }
    else {
        console.log("Enter a valid value!");
    }
}

function game() {
let playerScore = 0;
let computerScore = 0;
let totalRounds = 5;
    for (i = 0; i <= totalRounds; i++) {
let playerSelection = prompt("What do you play").toLowerCase();
let computerSelection = computerPlay(choices).toLowerCase();
oneRound(playerSelection,computerSelection);

        if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
           playerScore++;
        }
        else if(playerSelection == "rock" && computerSelection == "paper" || playerSelection == "scissors" && computerSelection == "rock" || playerSelection == "paper" && computerSelection == "scissors") {
            computerScore++;
        }
        else if(playerSelection == "scissors" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "paper" || playerSelection == "rock" && computerSelection == "rock") {
            "";
        }
        else {
            console.log("We play again!");
        }
    }

console.log(playerScore);
console.log(computerScore);

if (playerScore > computerScore) {
    console.log("You finally won!")    
}
else if(computerScore > playerScore) {
    console.log("You lost the game");
}
else if (computerScore == playerScore) {
    console.log("It was a draw game!")
}

}

game();