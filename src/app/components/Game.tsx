import React, { useState } from "react";
import Board from "./Board";
import { Square } from "./types";

const Game = () => {
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [history, setHistory] = useState<Square[][]>([Array(9).fill(null)]); // 이중배열
  const currentSquares = history[history.length - 1];
  // 배열의 마지막꺼만 나오게 (최신)

  const handlePlay = (nextSquares: Square[]) => {
    setHistory([...history, nextSquares]); // 이중배열 까줌 ...
    setXIsNext(!xIsNext);

    // [1, 2, 3].push(1); // [1,2,3,1]

    // [...[[1], [2], [3]], [1]]; // [[1],[2],[3],[1]]
    console.log(history);
  };

  const jumpTo = () => {
    // todo
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info"></div>
    </div>
  );
};

export default Game;
