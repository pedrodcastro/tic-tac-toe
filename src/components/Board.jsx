/* eslint-disable react/prop-types */

import { useState } from "react";
import Square from "./Square";

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const nextSquare = squares.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div>
        <Square value={squares[0]} onSquareclick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareclick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareclick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onSquareclick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareclick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareclick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onSquareclick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareclick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareclick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default Board;
