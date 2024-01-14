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
function playRound(choice) {
    // Get player choice
    const playerChoice = choice;
    // Get the computer's choice
    const computerSelection = getComputerChoice()
    // Initialize the result variable
    let result;
    // Initialize score board variable
    let scoreBoard;
    // Check for a tie
    if (playerChoice == computerSelection) {
        result = "It's a tie! Play again.."
        // Check for a winner
    } else if (playerChoice == "Rock" && computerSelection == "Scissors") {
        result = "Rock smashes scissors, you win the round!"
        ++playerScore
    } else if (playerChoice == "Paper" && computerSelection == "Rock") {
        result = "Paper covers Rock, you win the round!"
        ++playerScore
    } else if (playerChoice == "Scissors" && computerSelection == "Paper") {
        result = "Scissors slash Paper, you win the round!"
        ++playerScore
    } else if (computerSelection == "Rock" && playerChoice == "Scissors") {
        result = "Rock crushes Scissors, you lose the round.."
        ++computerScore
    } else if (computerSelection == "Paper" && playerChoice == "Rock") {
        result = "Paper covers Rock, you lose the round.."
        ++computerScore
    } else if (computerSelection == "Scissors" && playerChoice == "Paper") {
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

    // Create the game buttons
    const ROCK = document.createElement('button')
    ROCK.setAttribute('id', 'Rock')
    ROCK.textContent = 'ROCK'
    const PAPER = document.createElement('button')
    PAPER.setAttribute('id', 'Paper')
    PAPER.textContent = 'PAPER'
    const SCISSORS = document.createElement('button')
    SCISSORS.setAttribute('id', 'Scissors')
    SCISSORS.textContent = 'SCISSORS'
    
    // Select the buttons div
    const gameBtns = document.querySelector('#gameBtns');

    // Select the results div
    const gameResults = document.querySelector('#gameResults')
    // Select the result paragraph
    const displayResult = document.querySelector('#displayResult')

    // Append the game buttons to the buttons div
    gameBtns.appendChild(ROCK)
    gameBtns.appendChild(PAPER)
    gameBtns.appendChild(SCISSORS)

    // Add an event listener to the buttons div
    gameBtns.addEventListener('click', (e) => {
        // Get the game button id
        let choice = e.target.id
        // When a button is clicked, play a round
        let roundResult = playRound(choice)
        displayResult.textContent = roundResult
    })

}

// Play a game
game()