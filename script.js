/*
Project: Rock Paper Scissors Game
Author: LaNise Essick
created: 9/25/2024
*/


let playerScore = 0;
let aiScore = 0;

//getComputerChoice function randomly returns “rock”, “paper” or “scissors”
function getAIchoice(){
    let aiChoice = Math.floor(Math.random()* 3) + 1;

    if(aiChoice === 1){
        return 'Rock';
    }else if(aiChoice === 2){
        return 'Paper';
    } else {
        return 'Scissors'
    }  
}

//getHumanChoice function takes the user choice and returns it
function getPlayerChoice(input){
    if(input === 'p'){
        return 'Paper';
    }else if(input === 'r'){
        return 'Rock';
    }else if(input === 's'){
        return 'Scissors'
    } else{
        console.log('Invalid choice! Choose P for Paper, S for Scissors, or R for Rock ')
        return getHumanChoice();
    }
}

//playRound function takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
function playRound(playerChoice, aiChoice){

    if (playerChoice === aiChoice){
        return 'Draw!'
    } 
    else if((playerChoice === 'Rock' && aiChoice === 'Scissors') || (playerChoice === 'Paper' && aiChoice === 'Rock')|| (playerChoice === 'Scissors' && aiChoice === 'Paper'))
    {
        playerScore++;
    }
    else
    {
        aiScore++;
    }
}


//playGame function calls playRound function to play 5 rounds, keeps track of the scores and declares a winner at the end.
function playGame(){
    scores = 'Player score: ' + playerScore + '  ' + 'AI score: ' + aiScore;
    //Display final score message and 
    if (playerScore > aiScore){
        console.log('\nCongratulations, You Win! \n\nFinal Scores ' + '\n'+ scores);
    }else if(aiScore > playerScore){
        console.log('\nSorry, You Lose! Better luck next time.\n\nFinal Scores ' + '\n'+ scores);
    }else{
        console.log('\nThis game is a Draw! \n\nFinal Scores ' + '\n'+scores);
    }
}
//playGame function call
//playGame();

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerResult = document.querySelector("#player-result");
const aiResult = document.querySelector("#ai-result");
const playerScores = document.querySelector("#player-score");
const aiScores = document.querySelector("#ai-score");


rock.addEventListener("click", () =>{
    
    const playerChoice = getPlayerChoice("r");
    const aiChoice = getAIchoice();
    playerResult.textContent = `Player Choice: ${playerChoice}`;
    aiResult.textContent = `AI Choice: ${aiChoice}`;
    playRound(playerChoice, aiChoice)
    playerScores.textContent = `Player Score: ${playerScore}`;
    aiScores.textContent = `AI Choice: ${aiScore}`;

});
paper.addEventListener("click", () =>{
    const playerChoice = getPlayerChoice("p");
    displayResults.textContent = playerChoice;
});
scissors.addEventListener("click", () =>{
    const playerChoice = getPlayerChoice("s");
    displayResults.textContent = playerChoice;
});
const results = document.createElement("div");
