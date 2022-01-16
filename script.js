let choices = ["Rock", "Paper", "Scissors"];
function computerPlay(choices) {
    let option = choices[Math.floor(Math.random()*choices.length)];
    return option;
}
// computerPlay(choices);

function oneRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("It's a tie! rock holds rock");
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        console.log("You lose! paper covers rock");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! rock beats scissors");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! rock beats scissors");
    }
    
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! paper covers rock")
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("It's a tie!");
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! scissors beats paper")
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log("It's a tie");
    }
    
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! scissors beats paper")
    }
    else {
        console.log("There was no play!")
    }
}


function game() {
let playerScore = 0;
let computerScore = 0;
let totalRounds = 5;
    for (i = 0; i <= totalRounds; i++) {
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
}

let playerSelection = prompt("What do you play").toLowerCase();
let computerSelection = computerPlay(choices).toLowerCase();
// oneRound(playerSelection,computerSelection)
game();