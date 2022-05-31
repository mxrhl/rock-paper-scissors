
const options = ['rock', 'scissors', 'paper'];
let computerSelection = computerPlay();
let playerSelection = prompt("Choose between rock, paper and scissors!").toLowerCase();

if (playerSelection.toLowerCase() in options) {
    console.log(playRound(playerSelection, computerSelection));
} else {
    alert("Your inputted value isn't valid - the program stops");
}

function computerPlay() {
    let computersChoice = Math.floor(Math.random() * options.length);
    return options[computersChoice];
}

function playRound(playerChoice, computerChoice){
    console.log(playerChoice, computerChoice);
    if (playerChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'rock') {
        console.log("That's a tie - no point for anyone!")
    } else if(playerChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'scissors') {
        console.log("You lost - computer earns a point!")
    } else if(playerChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'paper') {
        console.log("You win - you earn a point!")
    } else if(playerChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'rock') {
        console.log("You lost - computer earns a point!")
    } else if(playerChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'scissors') {
        console.log("That's a tie - no point for anyone!")
    } else if(playerChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'paper') {
        console.log("You win - you earn a point!")
    } else if(playerChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'rock') {
        console.log("You win - you earn a point!")
    } else if(playerChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'scissors') {
        console.log("You lost - computer earns a point!")
    } else if(playerChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'paper') {
        console.log("That's a tie - no point for anyone!")
    } else {
        console.log("The combination isn't valid - so noone earns a point!")
    }
}

