import { useQuery } from "@tanstack/react-query";
import { DB_URL } from "../constants/url.constants";
import { Score } from "../types";

export const GET_SCORE_KEY = "score";

const getScore = async () => {
  const response = await fetch(DB_URL);

  if (!response.ok) {
    throw new Error("Error getting the score");
  }

  const data = await response.json();

  return data as Score;
};

export const useGetScore = () => {
  return useQuery({
    queryKey: [GET_SCORE_KEY],
    queryFn: getScore,
  });
};
