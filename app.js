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

console.log(getComputerChoice())