import React, { useState } from "react";
import { NumTilesInputField } from "./components/num-tiles-input-field.component";
import { Board } from "./components/board.component";

export const Main = () => {
  const [numOfTiles, setNumOfTiles] = useState<number>();

  return (
    <div className="flex flex-col mt-10 items-center gap-10">
      <div className="font-bold text-2xl">Tic Tac Toe</div>

      <NumTilesInputField
        numOfTiles={numOfTiles}
        setNumOfTiles={setNumOfTiles}
      />

      {numOfTiles && <Board numOfTiles={numOfTiles} />}
    </div>
  );
};
