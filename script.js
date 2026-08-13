/*
Project: Rock Paper Scissors Game
Author: LaNise Essick
created: 9/25/2024
*/


//getComputerChoice function randomly returns “rock”, “paper” or “scissors”
function getComputerChoice(){
    let pcChoice = Math.floor(Math.random()* 3) + 1;

    if(pcChoice === 1){
        return 'Rock';
    }else if(pcChoice === 2){
        return 'Paper';
    } else {
        return 'Scissors'
    }  
}

//getHumanChoice function takes the user choice and returns it
function getHumanChoice(){
    let huChoice = prompt('Choose P for Paper, S for Scissors, or R for Rock').toLowerCase();

    if(huChoice === 'p'){
        return 'Paper';
    }else if(huChoice === 'r'){
        return 'Rock';
    }else if(huChoice === 's'){
        return 'Scissors'
    } else{
        console.log('Invalid choice! Choose P for Paper, S for Scissors, or R for Rock ')
        return getHumanChoice();
    }
}

//playRound function takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
function playRound(huChoice, pcChoice){

    if (huChoice === pcChoice){
        displayGame.appendChild(console.log('Draw!'))
    } else if(
        (huChoice === 'Rock' && pcChoice === 'Scissors') || 
        (huChoice === 'Paper' && pcChoice === 'Rock')|| 
        (huChoice === 'Scissors' && pcChoice === 'Paper') 
    ){
        const playerWin = createElement("div");
        console.log(huChoice + ' beats ' + pcChoice + ', You won this round!' );
        humanScore++;
    }else{
        displayGame.appendChild('You lost this round! ' + pcChoice + ' beats ' + huChoice + '.');
        computerScore++;
    }

    scores = 'Player score: ' + humanScore + '  ' + 'Computer score: ' + computerScore;
    console.log(scores);

}

//global score variables to keep track of the players score
let humanScore = 0;
let computerScore = 0;

//playGame function calls playRound function to play 5 rounds, keeps track of the scores and declares a winner at the end.
function playGame(){
    //Display final score message and 
    if (humanScore > computerScore){
        console.log('\nCongratulations, You Win! \n\nFinal Scores ' + '\n'+scores);
    }else if(computerScore > humanScore){
        console.log('\nSorry, You Lose! Better luck next time.\n\nFinal Scores ' + '\n'+scores);
    }else{
        console.log('\nThis game is a Draw! \n\nFinal Scores ' + '\n'+scores);
    }
}
//playGame function call
//playGame();

    const displayGame = document.querySelector("#displayGame");

    // const rock = document.createElement("button");
    // rock.textContent = "Rock";
    // displayGame.appendChild(rock);
    
    // const paper = document.createElement("button");
    // paper.textContent = "Paper";
    // displayGame.appendChild(paper);

    // const scissors = document.createElement("button");
    // scissors.textContent = "Scissors";
    // displayGame.appendChild(scissors);

    rock.addEventListener("click", () =>{
        playRound("Rock");
    });
    paper.addEventListener("click", () =>{
        playRound("Paper");
    });
    scissors.addEventListener("click", () =>{
        playRound("Scissors")
    });

    const results = document.createElement("div");
