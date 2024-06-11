import { useMutation } from "@tanstack/react-query";
import { DB_URL } from "../constants/url.constants";
import { queryClient } from "../lib/react-query";
import { GET_SCORE_KEY } from "./get-score.service";
import { Score } from "../types";

const updateScore = async (score: Score) => {
  const response = await fetch(DB_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...score }),
  });

  if (!response.ok) {
    throw new Error("Error updating the score");
  }

  return response.json();
};

export const useUpdateScore = () => {
  return useMutation({
    mutationFn: updateScore,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_SCORE_KEY] });
    },
  });
};
