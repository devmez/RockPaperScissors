//ROCK PAPER SCISSORS

//open variable list
let gamePrompt = require(`readline-sync`);
let errorMsg = ``;

function playerInit(){
    let playerResponse = gamePrompt.question(`How many players will be playing? `);

    if (playerResponse > 2){
        errorMsg = `Sorry. That player count is not yet available. Please input: 2`;
        console.log(errorMsg);
        playerInit();
    }else if (playerResponse == 0){
        errorMsg = `How do you even play then?... LOL! Let's try that again.`;
        console.log(errorMsg);
        playerInit();
    }else{
        gameStart();
    };
};

function gameStart(){
    console.log(`Welcome to ROCK PAPER SCISSORS!!!!!`);
    console.log(`Let's begin!`);
    console.log(`Please choose either: "ROCK, PAPER, or SCISSORS" by typing your selection below.`);
};

function handSelector(){
    let playerOneChoice = gamePrompt.question(`Player 1, Please enter your choice: `.toLowerCase());
    let playerTwoChoice = gamePrompt.question(`Player 2, Please enter your choice: `.toLowerCase());

    if (playerOneChoice == `` || playerTwoChoice == ``){
        console.log(`We're missing an input. Let's try that again.`)
        playAgain();
    }else if (playerOneChoice == playerTwoChoice){
        console.log(`TIE`)
        playAgain();
    }else if (playerOneChoice == `rock` && playerTwoChoice == 'paper'){
        console.log(`P2 Wins`)
        playAgain();
    }else if (playerOneChoice == `rock` && playerTwoChoice == 'scissors'){
        console.log(`P1 Wins`)
        playAgain();
    }else if (playerOneChoice == `paper` && playerTwoChoice == 'rock'){
        console.log(`P1 Wins`)
        playAgain();
    }else if (playerOneChoice == `paper` && playerTwoChoice == 'scissors'){
        console.log(`P2 Wins`)
        playAgain();
    }else if (playerOneChoice == `scissors` && playerTwoChoice == 'rock'){
        console.log(`P2 Wins`)
        playAgain();
    }else if (playerOneChoice == `scissors` && playerTwoChoice == 'paper'){
        console.log(`P1 Wins`)
        playAgain();
    }else{

    };
};

function playAgain(){
    let playAgainResponse = gamePrompt.question(`Would you like to play again?: `.toLowerCase());

    if (playAgainResponse == ''){
        console.log(`Please enter an input of [yes] or [no].`);
        playAgain();
    }else if(playAgainResponse == `yes`){
        handSelector();
    }else if (playAgainResponse == `no`){
        console.log(`Thank you for playing [ROCK, PAPER, SCISSORS]`)
    }else{
        console.log(`HUH?! ...Please enter an input of [yes] or [no].`)
        playAgain();
    };
};

//function calls
playerInit();
handSelector();






// if (rock = rock) //tie
// if (rock = paper) //paper
// if (rock = scissors) //rock

// if (paper = rock) //paper
// if (paper = paper) //tie
// if (paper = scissors) //scissors

// if (scissors = rock) //rock
// if (scissors = paper) //paper
// if (scissors = scissors) //scissors
