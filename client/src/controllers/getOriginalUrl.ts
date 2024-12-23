import { BASE_API_URL } from "../constants";

export const getOriginalUrl = async (shortUrlId: string) => {
  const response = await fetch(`${BASE_API_URL}/url/${shortUrlId}`);
  const result = await response.json();
  return result.data.originalURL;
};
