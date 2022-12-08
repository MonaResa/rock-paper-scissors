const choices = ["rock", "paper", "scissors"];

// Get user input.
const userInput = prompt("Do you choose rock, paper, or scissors?");
if (userInput === "paper" || userInput === "rock" || userInput === "scissors") {
  console.log("You chose " + `${userInput}`);
} else {
  console.log("Error! Try again!");
}

// Get computer input.
let computerInput = choices[Math.floor(Math.random()*3)];
console.log("Computer chose" + ` ${computerInput}`);

// Declare winner.
const winner = declareWinner(userInput, computerInput);

function declareWinner(userInput, computerInput) {
  if (userInput === 'rock' && computerInput === 'paper') {
    console.log('You lose! Paper beats rock.');
  } else if (userInput === 'rock' && computerInput === 'scissors') {
    console.log('You win! Rock beats scissors.');
  } else if (userInput === 'paper' && computerInput === 'rock') {
    console.log('You win! Paper beats rock.');
  } else if (userInput === 'paper' && computerInput === 'scissors') {
    console.log('You lose! Scissors beats paper.'); 
  } else if (userInput === 'scissors' && computerInput === 'rock') {
    console.log('You lose! Rock beats scissors.');
  } else if (userInput === 'scissors' && computerInput === 'paper') {
    console.log('You win! Scissors beats paper.'); 
   } else {console.log('You tie.')}
}