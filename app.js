// Function to get player's choice
function getPlayerChoice() {
    const playerChoice = prompt("Rock, Paper or Scissors?");
    return playerChoice;
}

// Function to get the computer's choice
function getComputerChoice() {
    // Return a random whole number between 1 and 3
    let randomNum = Math.floor((Math.random() * 3) + 1);
    // Initialize computerChoice variable
    let computerChoice;
    // Depending on the number returned, assign a value
    switch (randomNum) {
        case 1:
            computerChoice = 'Rock';
            break;
        case 2: computerChoice = 'Paper';
            break;
        case 3:
            computerChoice = 'Scissors';
            break;
        default:
            console.log('Failed to return a random number')
    }
    // Return the value
    return computerChoice
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    // Initialize the result variable
    let result;
    // Format the player's input
    const selection = playerSelection;
    const selectionCapitalized = selection.charAt(0).toUpperCase() + selection.slice(1);
    // Check the player's input for errors
    if (selectionCapitalized !== "Rock" || "Paper" || "Scissors") {
        result = "Please make a valid selection."
    }
    // Check for a tie
    if (selectionCapitalized == computerSelection) {
        result = "It's a tie!"
    // Check for a winner
    } else if (selectionCapitalized == "Rock" && computerSelection == "Scissors") {
        result = "Rock smashes scissors, you win the round!"
    } else if (selectionCapitalized == "Paper" && computerSelection == "Rock") {
        result = "Paper covers Rock, you win the round!"
    } else if (selectionCapitalized == "Scissors" && computerSelection == "Paper") {
        result = "Scissors slash Paper, you win the round!"
    } else if (computerSelection == "Rock" && selectionCapitalized == "Scissors") {
        result = "Rock crushes Scissors, you lose the round.."
    } else if (computerSelection == "Paper" && selectionCapitalized == "Rock") {
        result = "Paper covers Rock, you lose the round.."
    } else if (computerSelection == "Scissors" && selectionCapitalized == "Paper") {
        result = "Scissors cuts Paper, you lose the round.."
    }
    // Return the result
    return result;
}

// Get the player's choice
const playerChoice = getPlayerChoice()
// Get the computer's choice
const cpuChoice = getComputerChoice()

// Play a single round and log the result
console.log(playRound(playerChoice, cpuChoice))