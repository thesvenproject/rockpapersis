

for(i=0;i>5;i++){}
let humanChoice = prompt("rock paper or scissor");
humanChoice = humanChoice.toLowerCase();
let computerChoice = getComputerChoice();


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

 function playRound(){
    if (humanChoice === computerChoice){
      return console.log("Tie");
      
   }
  


   else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "scissor" && computerChoice === "rock" || humanChoice === "paper" && computerChoice === "scissor"){
       computerScore++;
      
       return console.log("You lost this round.");
   }

   else {
           humanScore++;
          
           return console.log("You won this round.");
   }

}

playRound();
console.log(`You have chosen: ${humanChoice} & Computer has chosen: ${computerChoice}`);
console.log(`Your score: ${humanScore} Computer score: ${computerScore}`);
 }

playGame();

