function getComputerChoice() {
    num = Math.floor(Math.random()*3) + 1;
    if (num === 1) {
        return "Rock";
    }
    else if (num == 2) {
        return "Paper";

    } 
    else {
        return "Scissors";

    }
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    }
    else {
        return "Tie!";
    }
  }


function winner(yourScore, cpuScore) {
    if (yourScore > cpuScore) {
        return "Congratulations, you WON!";
    }
    else if (yourScore < cpuScore) {
        return "Sorry, you LOST!";
    }
    else {
        return "Draw!";
    }
}



function game() {

    let cpuScore = 0;
    let yourScore = 0;
    let draws = 0;
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors:", "");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        

        if (result.slice(0, 8) === "You Lose") {
            cpuScore++;
        }
        else if (result.slice(0, 7) === "You Win") {
            yourScore++;
        }
        else {
            draws++;
        }
    }

    endResult = winner(yourScore, cpuScore);

    console.log("Your Wins: " + yourScore + "\nCpu Wins: " + cpuScore + "\nDraws: " + draws + "\n\n" + endResult);
}