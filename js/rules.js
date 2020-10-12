

let player1 = {
  turn: 0,
  gameState: []
}

let player2 = {
  turn: 0,
  gameState: []
}

let currentPlay = Math.floor( Math.random() * 1) == 1 ? player1 : player2;

let ticTacToeItems = document.getElementsByClassName("tic-tac-toe-item");

for (i = 0; i < ticTacToeItems.length; i++) { 
  ticTacToeItems[i].addEventListener("click", (e,r) => {
    console.log(e,r);
  })
 }



const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function winTheGame() {
  for (i = 0; i < winningConditions.length; i++) {
    let a = player2.gameStateplayer1GameState.includes(winningConditions[i][0]);
    let b = player1GameState.includes(winningConditions[i][1]);
    let c = player1GameState.includes(winningConditions[i][2]);

    if (a && b && c) {
      alert("Alguno ganó");
    }
  }

  alert("Fin del recorrido");
}
