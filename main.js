// Function to play a game of RPS
function rps() {

    // Initialize score variables
    let playerScore = 0;
    let computerScore = 0;

    // Select the result paragraphs
    const roundResultDisplay = document.querySelector('#roundResultDisplay');
    const scoreDisplay = document.querySelector('#scoreDisplay');
    const gameResultDisplay = document.querySelector('#gameResultDisplay');

    // Function to get the computer's choice
    function getComputerChoice() {

        // Return a random whole number between 1 and 3
        const randomNum = Math.floor(Math.random() * 3) + 1;

        // Depending on the number returned, assign a value
        let computerChoice;
        switch (randomNum) {
            case 1:
                computerChoice = 'Rock';
                break;
            case 2:
                computerChoice = 'Paper';
                break;
            case 3:
                computerChoice = 'Scissors';
                break;
            default:
                console.error('Failed to return a random number');
        }

        // Return the value
        return computerChoice;
    }

    // Function to play a single round
    function playRound(choice) {
        // Get player choice
        const playerChoice = choice;

        // Get the computer's choice
        const computerSelection = getComputerChoice();

        // Initialize the result variable
        let result;

        // Check for a tie
        if (playerChoice === computerSelection) {
            result = "It's a tie! Play again..";
        } else {

            // Check for a winner
            if (
                (playerChoice === "Rock" && computerSelection === "Scissors") ||
                (playerChoice === "Paper" && computerSelection === "Rock") ||
                (playerChoice === "Scissors" && computerSelection === "Paper")
            ) {
                result = `${playerChoice} beats ${computerSelection}, you win the round!`;
                ++playerScore;
            } else {
                result = `${computerSelection} beats ${playerChoice}, you lose the round..`;
                ++computerScore;
            }
        }

        // Initialize score board variable
        const scoreBoard = `Player: ${playerScore} | Computer: ${computerScore}`;
        const roundResult = `${result}`;

        // Display the result and scoreboard
        roundResultDisplay.textContent = roundResult;
        scoreDisplay.textContent = scoreBoard;

        // Return the result
        return roundResult;
    }


    // Function to create UI
    function createUI() {

        // Function to create buttons
        const createButton = (id, text) => {
            const button = document.createElement('button');
            button.setAttribute('id', id);
            button.textContent = text;
            return button;
        };

        // Function to create paragraph elements
        const createPara = (id, text) => {
            const para = document.createElement('p')
            para.setAttribute('id', id)
            para.textContent = text
            return para
        }

        // Create game buttons
        const ROCK = createButton('Rock', 'ROCK');
        const PAPER = createButton('Paper', 'PAPER');
        const SCISSORS = createButton('Scissors', 'SCISSORS');
        // Create reset button
        const RESET = createButton('Reset', 'RESET')
        RESET.addEventListener('click', () => { location.reload() })

        // Select the buttons div
        const gameBtns = document.querySelector('#gameBtns');

        // Append the game buttons to the buttons div
        [ROCK, PAPER, SCISSORS].forEach(button => gameBtns.appendChild(button));

        // Add an event listener to the buttons div
        gameBtns.addEventListener('click', (e) => {

            // Check if the game has reached a score of 5
            if (playerScore >= 5 || computerScore >= 5) {

                // If it has, end the game
                endGame()

                // Remove the game buttons, insert the reset button
                gameBtns.replaceChildren(), gameBtns.appendChild(RESET)
                return;
            }

            // Get the button id of the player's choice
            const playerChoice = e.target.id;

            // When a button is clicked, play a round
            roundResult = playRound(playerChoice);

            // Display the results of the round
            roundResultDisplay.textContent = roundResult;
        });

        // Function to end the game
        function endGame() {
            // Check who won the game
            if (playerScore > computerScore) {
                roundResult = "Game over, you won!";
            } else if (computerScore > playerScore) {
                roundResult = "Game over, you lose..";
            } else {
                roundResult = "Game over, it's a tie!";
            }
            // Display the results of the round
            gameResultDisplay.textContent = roundResult;
        }
    }

    // Create the UI
    createUI();
}

// Play RPS
rps()