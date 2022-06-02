function computerPlay() {
    let computersChoice = Math.floor(Math.random() * options.length);
    return options[computersChoice];
}

function playRound(playerChoice, computerChoice){
    console.log(playerChoice, computerChoice);
    if (playerChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'rock') {
        console.log(`That\'s a tie - no point for anyone! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer} `);
    } else if(playerChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'scissors') {
        scoreComputer += 1;
        console.log(`You lost - computer earns a point! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer} `);
    } else if(playerChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'paper') {
        console.log(`You win - you earn a point! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer}`);
    } else if(playerChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'rock') {
        console.log(`You lost - computer earns a point! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer}`);
    } else if(playerChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'scissors') {
        console.log(`That\'s a tie - no point for anyone! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer}`);
    } else if(playerChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'paper') {
        console.log(`You win - you earn a point! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer}`);
    } else if(playerChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'rock') {
        console.log(`You win - you earn a point! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer}`);
    } else if(playerChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'scissors') {
        console.log(`You lost - computer earns a point! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer}`);
    } else if(playerChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'paper') {
        console.log(`That\'s a tie - no point for anyone! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer}`);
    } else {
        console.log(`The combination isn't valid - so noone earns a point! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer}`);
    }
}

function game() {
    for(let i = 0; i < 5; i++){
        playRound(playerSelection, computerSelection)
    }
}

const options = ['rock', 'scissors', 'paper'];
let scoreComputer = 0;
let scorePlayer = 0;
let computerSelection = computerPlay();
let playerSelection = prompt("Choose between rock, paper and scissors!").toLowerCase();

