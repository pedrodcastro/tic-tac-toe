/* eslint-disable react/prop-types */

import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquare = squares.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    onPlay(nextSquare);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="font-mono text-lg font-bold">{status}</div>
      <div className="grid grid-cols-3 gap-1 border-2 border-gray-300 rounded-md p-9">
        <Square value={squares[0]} onSquareclick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareclick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareclick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareclick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareclick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareclick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareclick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareclick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareclick={() => handleClick(8)} />
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
