// Initialize score variables
let playerScore = 0;
let computerScore = 0;

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
function playRound() {
    // Get player choice
    const playerChoice = prompt("Rock, Paper or Scissors?");
    // Get the computer's choice
    const computerSelection = getComputerChoice()
    // Initialize the result variable
    let result;
    // Initialize score board variable
    let scoreBoard;
    // Format the player's input
    const selection = playerChoice;
    const selectionCapitalized = selection.charAt(0).toUpperCase() + selection.slice(1);
    // Check the player's input for errors
    if (selectionCapitalized !== "Rock" || "Paper" || "Scissors") {
        result = "Please make a valid selection."
    }
    // Check for a tie
    if (selectionCapitalized == computerSelection) {
        result = "It's a tie! Play again.."
        // Check for a winner
    } else if (selectionCapitalized == "Rock" && computerSelection == "Scissors") {
        result = "Rock smashes scissors, you win the round!"
        ++playerScore
    } else if (selectionCapitalized == "Paper" && computerSelection == "Rock") {
        result = "Paper covers Rock, you win the round!"
        ++playerScore
    } else if (selectionCapitalized == "Scissors" && computerSelection == "Paper") {
        result = "Scissors slash Paper, you win the round!"
        ++playerScore
    } else if (computerSelection == "Rock" && selectionCapitalized == "Scissors") {
        result = "Rock crushes Scissors, you lose the round.."
        ++computerScore
    } else if (computerSelection == "Paper" && selectionCapitalized == "Rock") {
        result = "Paper covers Rock, you lose the round.."
        ++computerScore
    } else if (computerSelection == "Scissors" && selectionCapitalized == "Paper") {
        result = "Scissors cuts Paper, you lose the round.."
        ++computerScore
    }
    scoreBoard = `Player: ${playerScore} | Computer: ${computerScore}`
    const roundResult = `${result}\n${scoreBoard}`;

    // Return the result
    return roundResult
}

// Function to end the game
function endGame() {
    if (playerScore > computerScore) {
        console.log("Game over, you won!");
    } else if (computerScore > playerScore) {
        console.log("Game over, you lose..")
    }
}

// Function to play a game
function game() {

    // Select the buttons
    const btns = document.querySelectorAll('button')

    // Create the game buttons
    function createGameButtons() {
        const ROCK = document.createElement('button')
        const PAPER = document.createElement('button')
        const SCISSORS = document.createElement('button')
    }
    createGameButtons()

}

// Play a game
game()