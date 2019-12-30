//ROCK PAPER SCISSORS
function playerInit(){
    let playerPrompt = require(`readline-sync`);
    let playerResponse = playerPrompt.question(`How many players will be playing? `);
    let errorMsg = ``;

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
    }
};

function gameStart(){
    console.log(`Welcome to ROCK PAPER SCISSORS!!!!!`);
    setTimeout(()=>{console.log(`Let's begin!`)}, 2000);
    console.log(`Please choose either: "ROCK, PAPER, or SCISSORS" by typing your selection below.`);
};


//function calls
playerInit();