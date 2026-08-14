/*
Project: Rock Paper Scissors Game
Author: LaNise Essick
created: 9/25/2024
*/


let playerScore = 0;
let aiScore = 0;

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
    playerResult.innerHTML = `<img src="img/${playerChoice}.png" alt="${playerChoice}">`;
    aiResult.innerHTML = `<img src="img/${aiChoice}.png" alt="${aiChoice}">`;
    playRound(playerChoice, aiChoice)
    playerScores.textContent = `${playerScore}`;
    aiScores.textContent = `${aiScore}`;

});
paper.addEventListener("click", () =>{
    const playerChoice = getPlayerChoice("p");
    const aiChoice = getAIchoice();
    playerResult.innerHTML = `<img src="img/${playerChoice}.png" alt="${playerChoice}">`;
    aiResult.innerHTML = `<img src="img/${aiChoice}.png" alt="${aiChoice}">`;
    playRound(playerChoice, aiChoice)
    playerScores.textContent = `${playerScore}`;
    aiScores.textContent = `${aiScore}`;
});
scissors.addEventListener("click", () =>{
    const playerChoice = getPlayerChoice("s");
    const aiChoice = getAIchoice();
    playerResult.innerHTML = `<img src="img/${playerChoice}.png" alt="${playerChoice}">`;
    aiResult.innerHTML = `<img src="img/${aiChoice}.png" alt="${aiChoice}">`;
    playRound(playerChoice, aiChoice)
    playerScores.textContent = `${playerScore}`;
    aiScores.textContent = `${aiScore}`;
});
