const winningConditions = [

  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"],

];

let playerOne = {
  icon: "assets/bulbasaur-gif.gif"
}

let playerTwo = {
  icon: "assets/charmander-gif.gif"
}

let currentPlayer = Math.floor(Math.random() * 2) == 1 ? playerOne : playerTwo;
let currentTurn = 0;
let endGame = false;

document.querySelectorAll('.tic-tac-toe-item img').forEach(item => {
  item.addEventListener('click', event => {
    handleSelection(event);
  })
})

function initValues(){
  currentPlayer = Math.floor(Math.random() * 2) == 1 ? playerOne : playerTwo;
  currentTurn = 0;
  endGame = false;

  playerOne.boardState = [];
  playerTwo.boardState = [];

}

function handleSelection(event) {

  if (!(playerOne.boardState.includes(event.target.id) ||
    playerTwo.boardState.includes(event.target.id)) && !endGame) {

    updatePlayerBoard(event.target);
    
    checkWin();
    nextTurn();
    nextPlayer();

  }

}

function updatePlayerBoard(element) {

  element.src = currentPlayer.icon;
  currentPlayer.boardState.push(element.id);

}

function checkWin() {

  if (currentTurn <= 8) {

    for (i = 0; i < winningConditions.length; i++) {

      let a = currentPlayer.boardState.includes(winningConditions[i][0]);
      let b = currentPlayer.boardState.includes(winningConditions[i][1]);
      let c = currentPlayer.boardState.includes(winningConditions[i][2]);

      if (a && b && c) {

        document.getElementById("winner").innerHTML = currentPlayer === playerOne ? "Jugador 1" : "Jugador 2";
        endGame = true;

      }
    }

  }

}

function nextPlayer() {

  currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;

}

function nextTurn() {

  currentTurn = currentTurn + 1;

  if(currentTurn == 9 && !endGame) {

    document.getElementById("winner").innerHTML = "Empate";
    endGame = true;

  }

}

document.getElementById("restart-button").addEventListener("click", restartGame);

function restartGame() {

  initValues();

  document.querySelectorAll('.tic-tac-toe-item img').forEach(img => {
    img.src = "assets/pokeball.gif";
  });

  cleanWinnerState();
}

function cleanWinnerState(){
  document.getElementById("winner").innerHTML = "";
}

initValues();
