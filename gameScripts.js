/************  GAME VARIABLES AND FUNCTIONS ***********************************/
/**************************************************************************** */
let thePlayerPointsGlobal = 5;
let theAiPointsGlobal = 10;
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

function convertPlayerSelectionToIndex(playerSelection) {
    return CHOICES.indexOf(playerSelection);
}


function playRound(playerSelection, computerIndex) {
    let playerIndex = convertPlayerSelectionToIndex(playerSelection);
    console.log("You: " + CHOICES[playerIndex] + "  ||  AI: " + CHOICES[computerIndex]);
    console.log("Result: " + WIN_LOSE_CHART[playerIndex][computerIndex]);
    return WIN_LOSE_CHART[playerIndex][computerIndex];
}



/**************************************************************************** */
//                      EVENT FUNCTIONS
/**************************************************************************** */

let btns = document.querySelectorAll('#btn');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (e){

        let playerClickedChoice = e.target.value;
        console.log('Player Chose: ' + playerClickedChoice);
        let pointsWon = playRound(playerClickedChoice, generateComputerChoice());
        console.log("Points won: " + pointsWon);


    });
}





// Testing DOM Changing methods
document.getElementById("aiPoints").innerHTML = theAiPointsGlobal;