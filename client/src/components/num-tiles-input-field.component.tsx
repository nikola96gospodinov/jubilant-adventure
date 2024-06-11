import React, { Dispatch, SetStateAction, useState } from "react";

type Props = {
  numOfTiles: number | undefined;
  setNumOfTiles: Dispatch<SetStateAction<number | undefined>>;
};

export const NumTilesInputField = ({ numOfTiles, setNumOfTiles }: Props) => {
  const [error, setError] = useState<string>();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.valueAsNumber;

    if (value < 3 || value > 15 || isNaN(value)) {
      setError("Please enter a number between 3 and 15");
      return;
    }

    setError("");
    setNumOfTiles(value);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="numTiles">Number of Tiles</label>
      <input
        type="number"
        id="numTiles"
        name="numTiles"
        value={numOfTiles}
        onChange={onChange}
        className="border-2 border-gray-900 my-1 pl-2"
      />
      <span className="text-red-500">{error}</span>
    </div>
  );
};
