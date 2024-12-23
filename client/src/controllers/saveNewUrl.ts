import { BASE_API_URL } from "../constants";

type SaveNewUrlReturnType = {
  data: {
    originalURL: string;
    shortUrlId: string;
  };
};

export const saveNewUrl = async (
  url: string
): Promise<SaveNewUrlReturnType> => {
  const response = await fetch(`${BASE_API_URL}/url`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: url }),
  });
  const result = await response.json();
  return result;
};
