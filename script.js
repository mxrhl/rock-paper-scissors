function computerPlay() {
    let computersChoice = Math.floor(Math.random() * options.length);
    return options[computersChoice];
}

function playerPlay() {
    return prompt("Choose between rock, paper and scissors!").toLowerCase();
}

function playRound(playerChoice, computerChoice){
    if (playerChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'rock') {
        console.log(`Rock ties rock! That\'s a tie - no point for anyone! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer} `);
    } else if(playerChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'scissors') {
        scorePlayer += 1;
        console.log(`Rock beats scissors! You win - you earn a point! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer} `);
    } else if(playerChoice.toLowerCase() == 'rock' && computerChoice.toLowerCase() == 'paper') {
        scorePlayer += 1;
        console.log(`Rock loses to paper! You lose - computer earns a point! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer}`);
    } else if(playerChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'rock') {
        scoreComputer += 1;
        console.log(`Scissors lose to rock! You lost - computer earns a point! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer}`);
    } else if(playerChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'scissors') {
        console.log(`Scissors tie scissors! That\'s a tie - no point for anyone! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer}`);
    } else if(playerChoice.toLowerCase() == 'scissors' && computerChoice.toLowerCase() == 'paper') {
        scorePlayer += 1;
        console.log(`Scissors beat paper! You win - you earn a point! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer}`);
    } else if(playerChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'rock') {
        scorePlayer += 1;
        console.log(`Paper beats rock! You win - you earn a point! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer}`);
    } else if(playerChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'scissors') {
        scoreComputer += 1;
        console.log(`Paper loses to scissors! You lost - computer earns a point! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer}`);
    } else if(playerChoice.toLowerCase() == 'paper' && computerChoice.toLowerCase() == 'paper') {
        console.log(`That\'s a tie - no point for anyone! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer}`);
    } else {
        console.log(`The combination isn't valid - so noone earns a point! - Result: Player - ${scorePlayer}, Computer - ${scoreComputer}`);
    }
}

function game() {


    for(let i = 0; i < 5; i++){
        playRound(playerPlay(), computerPlay())
    };

    if (scoreComputer > scorePlayer) {
        console.log(`The game ended as a win for the computer - Player: ${scorePlayer}, Computer: ${scoreComputer}`)
    } else if (scoreComputer === scorePlayer) {
        console.log(`The game ended as a tie - Player: ${scorePlayer}, Computer: ${scoreComputer}`)
    } else {
        console.log(`The game ended as a win for you - Player: ${scorePlayer}, Computer: ${scoreComputer}`)
    };

    let playAgain = confirm("You wanna play a game of rock, paper, scissors again?");
    if (playAgain) {
        scoreComputer = 0;
        scorePlayer = 0;
        game();
    } else {
        console.log("Thanks for playing - see you soon!");
    }
}

const options = ['rock', 'scissors', 'paper'];
let scoreComputer = 0;
let scorePlayer = 0;

game();

