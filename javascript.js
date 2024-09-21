


function getHumanChoice(humanChoice){
        
        return window.prompt("Enter your choice:").toLowerCase()
        }



function getComputerChoice(computerChoice){
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




function playGame(){
    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
      return ("Tie");
      
   }
  


   else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "scissor" && computerChoice === "rock" || humanChoice === "paper" && computerChoice === "scissor"){
       computerScore++;      
       return ("You lost this round.");
   }

   else {
        humanScore++;
        return ("You won this round.");
   }

}
for (i=0;i<5;i++){
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
console.log(playRound(humanChoice, computerChoice));
console.log(`You have chosen: ${humanChoice} & Computer has chosen: ${computerChoice}`);
console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);

}
if (i==5){
    if(humanScore>computerScore){
        console.log("You won this game!");
    }
    if(humanScore<computerScore){
        console.log("Computer won this game!"); 
    }
}
}
playGame();

