//ROCK PAPER SCISSORS

//open variable list
let gamePrompt = require(`readline-sync`);
let errorMsg = ``;
let playerInput = gamePrompt.question(`How many players will be playing? ` );
let winCount = 0;

//function list
function playerInit(){
    if (playerInput == 1){
        console.log(`GAME TYPE: Solo Gameplay vs. CPU`)
        gameWelcome();
    }else if (playerInput == 0){
        errorMsg = `How do you even play then?... LOL! Let's try that again.`;
        console.log(errorMsg);
        playerInit();
    }else if (playerInput > 2){
        // console.log(`GAME TYPE: ` + playerInput + ` player game innitiated!`);
        // gameWelcome();
        console.log(`This game mode is still UNDER CONSTRUCTION.`)
        playerInit();
    }else{
        errorMsg = `Invalid user input.`
        playerInit();
    };
};

function gameWelcome(){
    console.log(`W E L C O M E   T O   R O C K  -  P A P E R  -  S C I S S O R S`);
    console.log(`Let's begin!`);
    console.log(`Please choose either: "ROCK, PAPER, or SCISSORS" by typing your selection below.`);

    if (playerInput == 1){
        cpuGameplay();
    }else if (playerInput > 2){
        console.log(`This game mode is still UNDER CONSTRUCTION.`)
        playerInit();
    };
};

function cpuGameplay(){
    let playerChoice = gamePrompt.question(`Player 1, Please enter your choice: `.toLowerCase());

    //CPU variables
    let cpuOptions = [[`rock`], [`paper`], [`scissors`]];
    let cpuChoice = cpuOptions[Math.floor(Math.random() * cpuOptions.length)];

    if (playerChoice == cpuChoice){
        console.log(`TIE`)
        playAgainPrompt();
    }else if (playerChoice == `rock` && cpuChoice == `paper`){
        console.log(`YOU WIN! `);
        playAgainPrompt();
    }else if (playerChoice == `rock` && cpuChoice == `scissors`){
        console.log(`YOU LOSE...`)
        playAgainPrompt();
    }else if (playerChoice == `paper` && cpuChoice == `rock`){
        console.log(`YOU WIN!`)
        playAgainPrompt();
    }else if (playerChoice == `paper` && cpuChoice == `scissors`){
        console.log(`YOU LOSE...`)
        playAgainPrompt();
    }else if (playerChoice == `scissors` && cpuChoice == `rock`){
        console.log(`YOU LOSE...`)
        playAgainPrompt();
    }else if (playerChoice == `scissors` && cpuChoice == `paper`){
        console.log(`YOU WIN`)
        playAgainPrompt();
    }else{
        console.log(`Invalid user input. Please try again.`)
        cpuGameplay();
    }
    
};

// function gameplay(){
//     let playerOneChoice = gamePrompt.question(`Player 1, Please enter your choice: `.toLowerCase());
//     let playerTwoChoice = gamePrompt.question(`Player 2, Please enter your choice: `.toLowerCase());

//     if (playerOneChoice == `` || playerTwoChoice == ``){
//         console.log(`We're missing an input. Let's try that again.`)
//         playAgainPrompt();
//     };

//     if (!playerOneChoice == 'rock' || !playerOneChoice == 'paper' || !playerOneChoice == 'scissors' || !playerTwoChoice == 'rock' || !playerTwoChoice == 'paper' || !playerOneChoice == 'scissors'){
//         console.log(`Invalid input. Try again.`)
//         playAgainPrompt();
//     }else if (playerOneChoice == playerTwoChoice){
//         console.log(`TIE`)
//         playAgainPrompt();
//     }else if (playerOneChoice == `rock` && playerTwoChoice == 'paper'){
//         console.log(`P2 Wins`)
//         playAgainPrompt();
//     }else if (playerOneChoice == `rock` && playerTwoChoice == 'scissors'){
//         console.log(`P1 Wins`)
//         playAgainPrompt();
//     }else if (playerOneChoice == `paper` && playerTwoChoice == 'rock'){
//         console.log(`P1 Wins`)
//         playAgainPrompt();
//     }else if (playerOneChoice == `paper` && playerTwoChoice == 'scissors'){
//         console.log(`P2 Wins`)
//         playAgainPrompt();
//     }else if (playerOneChoice == `scissors` && playerTwoChoice == 'rock'){
//         console.log(`P2 Wins`)
//         playAgainPrompt();
//     }else if (playerOneChoice == `scissors` && playerTwoChoice == 'paper'){
//         console.log(`P1 Wins`)
//         playAgainPrompt();
//     }else{

//     };
// };

function playAgainPrompt(){
    let playAgainResponse = gamePrompt.question(`Would you like to play again?: `.toLowerCase());

    if (playAgainResponse == ''){
        console.log(`Please enter an input of [yes] or [no].`);
        playAgainPrompt();
    }else if(playAgainResponse == `yes`){
        cpuGameplay();
    }else if (playAgainResponse == `no`){
        console.log(`========  Thank you for playing [ROCK, PAPER, SCISSORS]  ========`);
    }else{
        console.log(`HUH?! ...Please enter an input of [yes] or [no].`);
        playAgainPrompt();
    };
};


//function CALL
playerInit();