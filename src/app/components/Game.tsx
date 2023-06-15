import React, { useState } from "react";
import Board from "./Board";
import { Square } from "./types";

const Game = () => {
  const [history, setHistory] = useState<Square[][]>([Array(9).fill(null)]); // 이중배열
  const [currentMove, setCurrentMove] = useState<number>(0);
  const xIsNext = currentMove % 2 === 0; // 짝수 인지
  const currentSquares = history[currentMove];
  // 배열의 마지막꺼만 나오게 (최신)

  const handlePlay = (nextSquares: Square[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory); // 이중배열 까줌 ...
    setCurrentMove(nextHistory.length - 1);

    // [1, 2, 3].push(1); // [1,2,3,1]

    // [...[[1], [2], [3]], [1]]; // [[1],[2],[3],[1]]
    console.log([...history.slice(0, currentMove + 1)]);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move: number) => {
    let description;
    if (move > 0) {
      description = "go to move #" + move;
    } else {
      description = "go to game start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">{moves}</div>
    </div>
  );
};

export default Game;
