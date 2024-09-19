



let number = Math.random() * 100;
let humanChoice = prompt("rock paper or scissor");
humanChoice = humanChoice.toLowerCase();
let computerChoice = getComputerChoice();
let humanScore = 0;
let computerScore = 0;
let result = playRound();

/*
//dit deed eigenlijk helemaal niks
function getHumanChoice(humanChoice) {
    if (humanChoice.toLowerCase() === "rock"){
        return "rock";
    }
    else if (humanChoice.toLowerCase() === "scissor"){
        return "scissor";
    }
    else if (humanChoice.toLowerCase() ==="paper"){
        return "paper";
    }

    else {
        return ("error");
    }
}
*/

//gets computerChoice value
function getComputerChoice(computerChoice){
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



// did werkt niet, ik krijg de waardes goed terug maar kan niet comparen
 function playRound(){
     if (humanChoice === computerChoice){
       return "its a tie!";
       
    }
   
// verbeterde versie rock paper playround

    else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "scissor" && computerChoice === "rock" || humanChoice === "paper" && computerChoice === "scissor"){
        computerScore++;
        //console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);    
        return "you lost";
    }

    else {
            humanScore++;
            //console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
            return "you won";
    }


// oude versie rock paper playround
   /*

    else if (humanChoice === "rock"){
        if (computerChoice === "paper"){
            computerScore = computerScore + 1;
            return "you lost";
        }
        else {
            humanScore = humanScore + 1;
            return "you won";
        }
    }

    else if (humanChoice === "paper"){
        if (computerChoice === "scissor"){
            computerScore = computerScore + 1;
            return "you lost";
        }
        else {
            humanScore = humanScore + 1;
            return "you won";
        }

        
    }

    else if (humanChoice === "scissor"){
        if (computerChoice === "rock"){
            computerScore = computerScore + 1;
            return "you lost";  
        }
        else {
            humanScore = humanScore + 1;
            return "you won";
        }
    } */
};


console.log(`You have chosen: ${humanChoice} & Computer has chosen: ${computerChoice}  = ${result}`);
console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);