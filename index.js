let playerText = document.getElementById("playerHeading");
let computerText = document.getElementById("computerHeading");
let resultText = document.getElementById("result");
let choiceButton = document.querySelectorAll(".gameButton");
let player;
let computer;

choiceButton.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    

    playerText.textContent = `Player: ${player}`;
    computerTurn();
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}
));

function computerTurn(){
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    switch (randomNumber) {
        case 1:
            computer = "ROCK"
            break;
        case 2:
            computer = "PAPER"
            break;
        case 3:
            computer = "SCISSORS"
            break;
    }
}

function checkWinner(){
    if(computer == player){
        return "DRAW!";
    } 
    else if(computer == "ROCK"){
        return (player == "PAPER") ? "YOU WIN!" : "You Lose!";
    }
    else if(computer == "SCISSORS"){
        return (player == "ROCK") ? "YOU WIN!" : "You Lose!";
    }
    else if(computer == "PAPER"){
        return (player == "SCISSORS") ? "YOU WIN!" : "You Lose!";
    }
}





