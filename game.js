//ROCK PAPER SCISSORS
function gameStart(){
    console.log('Welcome to ROCK PAPER SCISSORS!!!!!')
}

function playerInit(){
    let playerPrompt = require('readline-sync');
    let errorMsg = '';
    for (let playerResponse = playerPrompt.question('How many players will be playing? ')){
        if (playerResponse > 2){
            errorMsg = 'Sorry, that player count is not yet available. Please input: 2. ';
        }else if (playerResponse == 0){
            errorMsg = "How can you play then... LOL. Let's ttry that again."
        }else{
            gameStart();
        }
    }
}
playerInit();

// function gameStart(){

// }