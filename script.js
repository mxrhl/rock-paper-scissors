
const buttons = document.querySelectorAll('button');
buttons.forEach( button => {
          button.addEventListener('click', () => {
          game(button.textContent);
      })
});

const currentScore = document.getElementById('score');
const scoreMessage = document.getElementById('result');

function computerPlay() {
    let computersChoice = Math.floor(Math.random() * options.length);
    return options[computersChoice];
};

function playRound(playerChoice, computerChoice){
    if (playerChoice.toLowerCase() == computerChoice.toLowerCase()) {
        scoreMessage.textContent = `${playerChoice} ties ${computerChoice}! That\'s a tie - no point for anyone!`
    } else if(playerChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'scissors') {
        scorePlayer += 1;
        scoreMessage.textContent = `${playerChoice} beats ${computerChoice}! You win - you earn a point!`
    } else if(playerChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'paper') {
        scoreComputer += 1;
        scoreMessage.textContent = `${playerChoice} loses to ${computerChoice}! You lose - computer earns a point!`
    } else if(playerChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'rock') {
        scoreComputer += 1;
        scoreMessage.textContent = `${playerChoice} loses to ${computerChoice}! You lose - computer earns a point!`
    } else if(playerChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'paper') {
        scorePlayer += 1;
        scoreMessage.textContent = `${playerChoice} beats ${computerChoice}! You win - you earn a point!`
    } else if(playerChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'rock') {
        scorePlayer += 1;
        scoreMessage.textContent = `${playerChoice} beats ${computerChoice}! You win - you earn a point!`
    } else if(playerChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'scissors') {
        scoreComputer += 1;
        scoreMessage.textContent = `${playerChoice} loses to ${computerChoice}! You lose - computer earns a point!`
    } else {
        scoreMessage.textContent = "The combination isn't valid - so noone earns a point!"
    }
    currentScore.textContent = `Player - ${scorePlayer}, Computer - ${scoreComputer}`
}

function game(playerChoice) {

    playRound(playerChoice, computerPlay());

    if (scoreComputer == 5 || scorePlayer == 5) {
        if (scoreComputer > scorePlayer) {
            scoreMessage.textContent = `The game ended ${scoreComputer} : ${scorePlayer} with a win for the computer.`
        } else {
            scoreMessage.textContent = `The game ended ${scorePlayer} : ${scoreComputer} with a win for you.`
        };
        scoreComputer = 0;
        scorePlayer = 0;
        currentScore.textContent = `Player - ${scorePlayer}, Computer - ${scoreComputer}`;
    }


}


const options = ['Rock', 'Scissors', 'Paper'];
let scoreComputer = 0;
let scorePlayer = 0;