



function getComputerChoice(){
    switch(Math.floor(Math.random()*3))
    {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "Error";
    }
    

    
}

function getHumanChoice(){
    let choice;
    while(!(choice === "rock" || choice ==="paper"|| choice ==="scissors"))
    {
        choice = prompt("Input 'rock','paper',or 'scissors'")?.toLocaleLowerCase()
    }
    return choice
}

function playRound(humanChoice,computerChoice)
{
    if (humanChoice === "rock" && computerChoice ==="scissors") return 0;
    else if (humanChoice === "paper" && computerChoice ==="rock") return 0;
    else if (humanChoice === "scissors" && computerChoice ==="paper") return 0;
    else if (humanChoice === "rock" && computerChoice ==="paper") return 1;
    else if (humanChoice === "paper" && computerChoice ==="scissors") return 1;
    else if (humanChoice === "scissors" && computerChoice ==="rock") return 1;
    else if (humanChoice === computerChoice) 
        {
            
            return 2;
        }

    
    

}



let humanScore =0;
let computerScore = 0;

function playGame(){
    let round = 1
    while(round!== 6)
    {
        console.log("round: "+round)
        let winner = playRound(getHumanChoice(), getComputerChoice());
        
        if (winner === 0)
        {
            humanScore++;
        }
        else if (winner === 1)
        {
            computerScore++;
        }
        else{
            console.log("tie");
            continue;
        }
        console.log("human score: "+ humanScore);
        console.log("computer score: "+ computerScore);
        round++;

    }
    console.log("game is over")
    if (humanScore > computerScore)
    {
        console.log("human wins!")
    }
    else{
        console.log("computer wins!")
    }


}
playGame();