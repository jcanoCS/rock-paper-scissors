const WIN = 1;
const DRAW = 0;
const LOSE = -1;
const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
const WIN_LOSE_CHART =    
                                            /*COMPUTER CHOICE*/
                                    /*   ROCK    PAPER   SCISSORS */
      /*PERSPECTIVE*/     /*ROCK*/   [[   DRAW,  LOSE,   WIN  ], 
    /* PLAYER CHOICE */  /*PAPER*/    [   WIN,   DRAW,   LOSE], 
                        /*SCISSORS*/  [   LOSE,  WIN,    DRAW]];
    
     

function generateComputerChoice() {
    // random int between 0 and 2 (inclusive)
    return Math.floor(Math.random() * (3) + 0);  
}

function promptPlayerChoice() {
    let playerSelection = null;

    while(true){
        playerSelection = prompt("ROCK, PAPER, OR SCISSORS?");
        playerSelection = playerSelection.toUpperCase();
        if (playerSelection !== null && CHOICES.includes(playerSelection)) {
            break;
        }
    }
    return CHOICES.indexOf(playerSelection);
}


function playRound(playerSelection, computerSelection) {
    console.log("You: " + CHOICES[playerSelection] + "  ||  AI: " + CHOICES[computerSelection]);
    return WIN_LOSE_CHART[playerSelection][computerSelection];
}

function game() {
    let remainingRounds = 5;
    let playerPoints = 0;
    let computerPoints = 0;
    let playerChoice;
    let computerChoice;
    let result;
    let message;

    while(remainingRounds > 0) {

        playerChoice = promptPlayerChoice();
        computerChoice = generateComputerChoice();
        result = playRound(playerChoice, computerChoice);

        switch(result) {
            case WIN:
                playerPoints++;
                console.log("You win");
                break;
            case LOSE:
                computerPoints++;
                console.log("You lose");
                break;
            default:
                console.log("Draw");
                // no points incremented in a draw
        }
        // decrement remaining rounds
        remainingRounds--; 
    }
    
    if (playerPoints > computerPoints){
        message = "You win!";
    } else if (playerPoints === computerPoints) {
        message = "It's a draw!";
    } else {
        message = "You lose!";
    }

    // display the final results
    window.alert(message + "\nYou: " + playerPoints + " || AI: " + computerPoints);
}