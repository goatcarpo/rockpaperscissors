function getComputerChoice () {
const choices = ["rock", "paper", "scissors"];
const computerSelection = choices[Math.floor(Math.random()*choices.length)];
return computerSelection;
};

let playerScore = 0;
let computerScore = 0;

function updateScore(result) {
    if (result === 'You win!') {
      playerScore++;
    } else if (result === 'You lose!') {
      computerScore++;
    }
};

const resultDisplay = document.getElementById('result-display');

function playRound (playerSelection, computerSelection) {   
    let result;
    if (playerSelection === computerSelection) {
            result = "It's a tie!";
            } else if (
                (playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')
            ) {
                result = 'You win!';
            } else {
                result = 'You lose!';
        }
        
        resultDisplay.textContent = result;

        updateScore(result);
        const playerScoreDisplay = document.getElementById('player-score');
        const computerScoreDisplay = document.getElementById('computer-score');
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        if (playerScore === 5 || computerScore === 5) {
            announceWinner();
    }
};

function announceWinner() {
        if (playerScore === 5) {
          console.log('Congratulations! You won the game!');
        } else if (computerScore === 5) {
          console.log('Sorry, you lost the game. Better luck next time!');
        }
};
    
const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let playerSelection;
            if (button.id === 'rock') {
              playerSelection = 'rock';
            } else if (button.id === 'paper') {
              playerSelection = 'paper';
            } else if (button.id === 'scissors') {
              playerSelection = 'scissors';
            }
        
            const computerSelection = getComputerChoice();
            playRound(playerSelection, computerSelection);
        });
});
