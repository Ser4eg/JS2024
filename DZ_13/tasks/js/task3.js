/*Задача 3. 
Виведіть всі можливі наступні комбінації ходів користувачів у грі“Хрестики-нулики”, 
починаючи з деякої заданої ситуації (тобто маємо двовимірний масив з елементами : 0 - нулик, Х - хрестик, пробіл - ще не зайнято, 
і вам треба самостійно вивести всі можливі шляхи заповнення ще незаповнених клітинок (де пробіли). 
Поки можна не підраховувати чи вже є 3 хрестики чи 3 нулики у рядок.
*/

function generateTicTacToeMoves(board, currentPlayer) {
  let result = [];

  function recurse(currentBoard, player) {
    let emptyCells = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (currentBoard[i][j] === " ") {
          emptyCells.push([i, j]);
        }
      }
    }

    if (emptyCells.length === 0) {
      result.push(currentBoard.map((row) => row.slice()));
      return;
    }

    for (let [row, col] of emptyCells) {
      let newBoard = currentBoard.map((row) => row.slice());
      newBoard[row][col] = player;

      let nextPlayer = player === "X" ? "O" : "X";
      recurse(newBoard, nextPlayer);
    }
  }

  recurse(board, currentPlayer);
  return result;
}

if (confirm("Почати тестування?")) {
  let initialBoard = [
    ["X", "O", "X"],
    [" ", "O", "O"],
    [" ", " ", "X"],
  ];

  let allMoves = generateTicTacToeMoves(initialBoard, "O");
  console.log(allMoves);

  allMoves.forEach((board, index) => {
    console.log(`Варіант ${index + 1}:`);
    board.forEach((row) => console.log(row.join(" ")));
    console.log("\n");
  });
}
