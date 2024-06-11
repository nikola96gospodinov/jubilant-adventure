import { XorO } from "../types";

export const setInitialBoard = (numOfTiles: number) => {
  return Array(numOfTiles).fill(undefined);
};

export const getPosition = (
  index: number,
  innerIndex: number,
  numOfTiles: number
) => {
  return index * numOfTiles + innerIndex;
};

export const checkWinner = (
  board: Array<XorO | undefined>,
  turn: XorO,
  numOfTiles: number
) => {
  let isWinner = false;

  for (let index = 0; index < board.length; index++) {
    const tile = board[index];
    if (tile !== turn) continue;

    const isForwardHorizontalValid = numOfTiles - (index % numOfTiles) >= 3;
    if (isForwardHorizontalValid) {
      const isHorizontalWinner = [
        board[index],
        board[index + 1],
        board[index + 2],
      ].every((tile) => tile === turn);

      if (isHorizontalWinner) {
        isWinner = true;
        break;
      }
    }

    const isVerticalValid = index + numOfTiles * 2 <= numOfTiles * numOfTiles;
    if (isVerticalValid) {
      const isVerticalWinner = [
        board[index],
        board[index + numOfTiles],
        board[index + numOfTiles * 2],
      ].every((tile) => tile === turn);

      if (isVerticalWinner) {
        isWinner = true;
        break;
      }
    }

    const isForwardDiagonalValid = isForwardHorizontalValid && isVerticalValid;
    if (isForwardDiagonalValid) {
      const isDiagonalWinner = [
        board[index],
        board[index + numOfTiles + 1],
        board[index + numOfTiles * 2 + 2],
      ].every((tile) => tile === turn);

      if (isDiagonalWinner) {
        isWinner = true;
        break;
      }
    }

    const isBackwardHorizontalValid = index % numOfTiles >= 2;
    const isBackwardDiagonalValid =
      isBackwardHorizontalValid && isVerticalValid;
    if (isBackwardDiagonalValid) {
      const isDiagonalWinner = [
        board[index],
        board[index + numOfTiles - 1],
        board[index + numOfTiles * 2 - 2],
      ].every((tile) => tile === turn);

      if (isDiagonalWinner) {
        isWinner = true;
        break;
      }
    }
  }

  return isWinner;
};
