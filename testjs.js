let humanScore = 0;
let computerScore = 0;
  
  function getComputerChoice(){
    let number = Math.random() * 100;
    if ( number <= 33) {
    return "rock";
    }
    
    else if (number > 33 && number <= 66) {
        return "scissor"; 
    
    }

    else if (number > 66){
        return "paper";
    }

    else {
        return "error";
    }
  }



function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
      return ("It's a draw!");
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
      humanScore++;
      return ("You win! Rock beats scissors");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
      return ("You lose! Paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        humanScore++;
      return ("You win! Paper beats rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
      return ("You lose! Scissors beat paper");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        humanScore++;
      return ("You win! Scissors beat paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
      return ("You lose!Rock beats scissors");
    }

  }

function playGame(){
    
  let computerSelection = getComputerChoice();
  let playerSelection = prompt("Choose your weapon");

  console.log(playRound(playerSelection, computerSelection));
  console.log(`You have chosen: ${playerSelection} & Computer has chosen: ${computerSelection}`);
  console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
}

playGame();
  
  