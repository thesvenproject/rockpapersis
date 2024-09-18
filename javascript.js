



let number = Math.random() * 100;
let humanChoice = prompt("rock paper or scissor");
let computerChoice = getComputerChoice();
let humanScore = 0;
let computerScore = 0;


//gets humanChoice value
function getHumanChoice(humanChoice) {
    if (humanChoice.toLowerCase() == "rock"){
        return "rock";
    }
    else if (humanChoice.toLowerCase() == "scissor"){
        return "scissor";
    }
    else if (humanChoice.toLowerCase() == "paper"){
        return "paper";
    }

    else {
        console.error("error");
    }
}

console.log(humanChoice);


console.log(number);
//gets computerChoice value
function getComputerChoice(computerChoice){
    if (number >= 0 && number <= 33) {
    return "rock";
    }
    
    else if (number > 33 && number <= 66) {
    return "scissor"; 
    
    }

    else if (number > 66 && number <= 100){
        return "paper";
    }

    else {
        console.log("error");
    }
}


console.log(computerChoice);

// did werkt niet, ik krijg de waardes goed terug maar kan niet comparen
 function playRound(humanChoice, computerChoice){
    if ("rock" && "rock"){
        console.log("its a tie!");
    }
    else {
        console.log("test2");
    }
}

playRound();


console.log(humanChoice === computerChoice);