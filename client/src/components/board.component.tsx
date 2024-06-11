import React, { useState } from "react";
import { XorO } from "../types";
import {
  setInitialBoard,
  getPosition,
  checkWinner,
} from "../utils/board.utils";
import { useGetScore } from "../services/get-score.service";
import { useUpdateScore } from "../services/update-score.service";

type Props = {
  numOfTiles: number;
};

export const Board = ({ numOfTiles }: Props) => {
  const [board, setBoard] = useState<Array<XorO | undefined>>(() =>
    setInitialBoard(numOfTiles)
  );
  const [turn, setTurn] = useState<XorO>("X");

  const { data: score } = useGetScore();
  const { mutate: updateScore } = useUpdateScore();

  const onTileClick = (index: number, index2: number) => {
    setTurn(turn === "X" ? "O" : "X");

    const newBoard = [...board];
    newBoard[getPosition(index, index2, numOfTiles)] = turn;
    setBoard(newBoard);

    if (checkWinner(newBoard, turn, numOfTiles) && score) {
      resetBoard();
      updateScore({ ...score, [turn]: score[turn] + 1 });
    }
  };

  const resetBoard = () => {
    setBoard(setInitialBoard(numOfTiles));
  };

  const numOfTilesArray = Array(numOfTiles).fill("");

  return (
    <div className="flex flex-col gap-1 justify-center">
      <p className="font-bold text-2xl mb-2">It's player {turn}'s turn...</p>

      {numOfTilesArray.map((_, index) => (
        // Normally, you wouldn't use the index as a key, but in this case, it's fine
        <div className="flex gap-1 justify-center" key={index}>
          {numOfTilesArray.map((_, innerIndex) => (
            <div
              className="border-2 border-gray-900 w-10 h-10 cursor-pointer items-center justify-center text-3xl font-bold flex"
              onClick={() => onTileClick(index, innerIndex)}
              key={`${index}-${innerIndex}`}
            >
              {board[getPosition(index, innerIndex, numOfTiles)]}
            </div>
          ))}
        </div>
      ))}

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
        onClick={() => resetBoard()}
      >
        Reset board
      </button>

      <div className="flex gap-2 justify-center text-xl text-gray-700">
        <div>
          X: <span className="font-bold text-black">{score?.X ?? 0}</span>
        </div>
        <div>
          O: <span className="font-bold text-black">{score?.O ?? 0}</span>
        </div>
      </div>
    </div>
  );
};
