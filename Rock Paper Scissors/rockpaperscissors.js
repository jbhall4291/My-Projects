let choices = ["Rock", "Paper", "Scissors"];

// needed to use a prompt, requires 'npm install prompt-sync'
const prompt = require("prompt-sync")();

console.log("\x1b[33mWelcome to Rock, Paper, Scissors! \x1b[0m");
console.log("Your choices are as follows:");
console.log("1 for Rock");
console.log("2 for Paper");
console.log("3 for Scissors");

//prompt user for input and store as variable
let userInput = prompt("Which do you choose? ");

// validate user input
if (userInput == 1 || userInput == 2 || userInput == 3) {
} else {
  console.log("That's not an option, I quit! 😠");
  return;
}

// convert to number type to use with array
let userSelection = choices[Number(userInput) - 1];

//randomly choose computers choice
let computerSelection = choices[Math.floor(Math.random() * 3)];

//response based on user's input
if (userSelection == "Rock") {
  console.log("Oh, so you like Rock.");
} else if (userSelection == "Paper") {
  console.log("So you've gone with Paper.");
} else if (userSelection == "Scissors") {
  console.log("You've chosen Scissors.");
}

// logic to decide the winner (or draw)
if (userSelection == computerSelection) {
  draw();
} else if (userSelection == "Rock" && computerSelection == "Paper") {
  computerWins();
} else if (userSelection == "Scissors" && computerSelection == "Rock") {
  computerWins();
} else if (userSelection == "Paper" && computerSelection == "Scissors") {
  computerWins();
} else if (userSelection == "Rock" && computerSelection == "Scissors") {
  userWins();
} else if (userSelection == "Paper" && computerSelection == "Rock") {
  userWins();
} else if (userSelection == "Scissors" && computerSelection == "Paper") {
  userWins();
}

// functions with appropriate message
function computerWins() {
  console.log(`I went with ${computerSelection}, so I win! 😄`);
}

function userWins() {
  console.log(`I went with ${computerSelection}, so you win! 👏`);
}

function draw() {
  console.log(`Well I also went with ${computerSelection}, so it's a draw! 😐`);
}
