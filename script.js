let choices = ["Rock", "Paper", "Scissors"];
function computerPlay(choices) {
    let option = choices[Math.floor(Math.random()*choices.length)];
    return option;
}


function oneRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "rock") {
        return "It's a tie! rock holds rock";
    }

    else if (playerSelection == "rock" && computerSelection == "paper"){
        return "You lose! paper covers rock";
    }

    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! rock beats scissors";
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! rock beats scissors";
    }
    
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! paper covers rock";
    }


    else if (playerSelection == "paper" && computerSelection == "paper") {
        return "It's a tie! paper holds paper";
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! scissors beats paper";
    }

    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "It's a tie! scissors hold scissors";
    }
    
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! scissors beats paper";
    }
    else {
        return "There was no play!";
    }
};


let playerSelection = "";
let computerSelection = "";

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
            return "We play again!";
        }
    }

console.log(playerScore);
console.log(computerScore);

if (playerScore > computerScore) {
    return "You finally won!";   
}
else if(computerScore > playerScore) {
    return "You lost the game";
}
else if (computerScore == playerScore) {
    return "It was a draw game!";
}

}

// oneRound(playerSelection,computerSelection)
game();