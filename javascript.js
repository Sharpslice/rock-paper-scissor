



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
    
    if (humanChoice === "rock" && computerChoice ==="scissors") humanScore++;
    else if (humanChoice === "paper" && computerChoice ==="rock") humanScore++;
    else if (humanChoice === "scissors" && computerChoice ==="paper") humanScore++;
    else if (humanChoice === "rock" && computerChoice ==="paper") computerScore++;
    else if (humanChoice === "paper" && computerChoice ==="scissors") computerScore++;
    else if (humanChoice === "scissors" && computerChoice ==="rock") computerScore++;
    else if (humanChoice === computerChoice) 
        {
            
            return;
        }

    
    

}

document.getElementById("buttons").addEventListener('click', handleButtonClick);

function handleButtonClick(e){
    const buttonId = e.target.id;
    
    playRound(buttonId,getComputerChoice());
    if(humanScore === 5 )
    {
        alert("Human Wins!")
    }
    else if(computerScore === 5)
        {
            alert("Computer Wins!")
        }
    document.getElementById("humanScore").textContent = humanScore;
    document.getElementById("computerScore").textContent = computerScore;
    
}

let humanScore =0;
let computerScore = 0;

function playGame(){
    
    


}
playGame();