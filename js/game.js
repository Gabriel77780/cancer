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
  boardState: [],
  icon: "assets/bulbasaur-gif.gif"
}

let playerTwo = {
  boardState: [],
  icon: "assets/charmander-gif.gif"
}

let currentPlayer = Math.floor(Math.random() * 2) == 1 ? playerOne : playerTwo;
let currentTurn = 1;
let endGame = false;

document.querySelectorAll('.tic-tac-toe-item img').forEach(item => {
  item.addEventListener('click', event => {
    handleSelection(event);
  })
})

function handleSelection(event) {

  if (!(playerOne.boardState.includes(event.target.id) ||
    playerTwo.boardState.includes(event.target.id)) && !endGame) {

    updatePlayerBoard(event.target);
    nextPlayer();
    checkWin();

  }

}

function updatePlayerBoard(element) {

  element.src = currentPlayer.icon;
  currentPlayer.boardState.push(element.id);

}

function checkWin() {

  if (currentTurn <= 9) {

    for (i = 0; i < winningConditions.length; i++) {

      let a = currentPlayer.boardState.includes(winningConditions[i][0]);
      let b = currentPlayer.boardState.includes(winningConditions[i][1]);
      let c = currentPlayer.boardState.includes(winningConditions[i][2]);

      if (a && b && c) {

        document.getElementById("winner").innerHTML = currentPlayer === playerOne ? "Jugador 1" : "Jugador 2";
        endGame = true;

      }

    }

  } else {

    document.getElementById("winner").innerHTML = "Empate";
    endGame = true;

  }
}

function nextPlayer() {

  currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  currentTurn = currentTurn + 1;

}
