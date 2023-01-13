const playerTxt = document.querySelector("#player");
const computerTxt = document.querySelector("#computer");
const resultTxt = document.querySelector("#result");
const selector = document.querySelectorAll('.Rock');
let player;
let computer;
let result;
selector.forEach(button => button.addEventListener("click",() => {
   
    player = button.textContent;
    computerTurn();
    playerTxt.textContent = ` Player: ${player}`;
    computerTxt.textContent = ` Computer: ${computer}`;
    resultTxt.textContent = checkWinner();


}));


function computerTurn(){
    const randNum = Math.floor(Math.random() * 3) + 1 ;
    switch (randNum){
        case 1:
        computer = "Rock";
        break;
        case 2:
        computer = "Paper";
        break;
        case 3:
        computer = "Scissor";
    }
}

function checkWinner(){
    if (player == computer) {
        return "Draw!";
    }
    else if( computer == "Rock"){
        return( player == "Paper") ? "you Win" : "you Lose";
    }
    else if( computer == "Paper"){
        return( player == "Scissor") ? "you Win" : "you Lose";
    }
    else if( computer == "Scissor"){
        return( player == "Rock") ? "you Win" : "you Lose";
    }
}