function moveTrain(board, mov) {
  let board2D = board.map((row) => row.split(""));
  let engine = {};
  const carriages = new Set();
  let fruits = new Set();

  for (let i = 0; i < board2D.length; i++) {
    for (let j = 0; j < board2D[i].length; j++) {
      const cell = board2D[i][j];
      if (cell === "@") engine = { row: i, col: j };
      else if (cell === "o") carriages.add(`${i},${j}`);
      else if (cell === "*") fruits.add(`${i},${j}`);
    }
  }

  const directions = { U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1] };
  const [dRow, dCol] = directions[mov];
  const newRow = engine.row + dRow;
  const newCol = engine.col + dCol;

  if (
    newRow < 0 ||
    newRow >= board2D.length ||
    newCol < 0 ||
    newCol >= board2D[0].length
  ) {
    return "crash";
  }

  const newPos = `${newRow},${newCol}`;
  if (carriages.has(newPos)) {
    return "crash";
  } else if (fruits.has(newPos)) {
    fruits.delete(newPos); // Remove the fruit
    return "eat";
  }

  return "none";
}

const board = ["·····", "*····", "@····", "o····", "o····"];

console.log(moveTrain(board, "U"));
// ➞ 'eat'

console.log(moveTrain(board, "D"));
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, "L"));
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, "R"));
// ➞ 'none'
// The train moves to the right and there is empty space on the right
