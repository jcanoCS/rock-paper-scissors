const CHOICES = ["ROCK", "PAPER", "SCISSORS"];
const WIN_LOSE_CHART =    +
                                            /*COMPUTER CHOICE*/
                                     /*  ROCK     PAPER     SCISSORS */
                        /*ROCK*/    [[   "DRAW",  "LOSE",   "WIN"  ], +
    /* PLAYER CHOICE */ /*PAPER*/    [   "WIN",   "DRAW",   "LOSE"], +
                       /*SCISSORS*/  [   "LOSE",  "WIN",    "DRAW"]];
    
     

function getComputerChoice() {
    // random int between 0 and 2 (inclusive)
    let randomIndex = Math.floor(Math.random() * (3) + 0);
    console.log(randomIndex);
    return CHOICES[randomIndex];
}




// make sure to make playerSelection be case insensitive
function playRound(playerSelection, computerSelection) {
    
    let duelResult = WIN_LOSE_CHART[playerSelection[computerSelection]];

    // return duelResult;

    if (duelResult === "WIN") {
        return "YOU WIN!";
    } else if (duelResult == "LOSE") {
        return "YOU LOSE!";
    } else {
        return "IT'S A DRAW!";
    }

}