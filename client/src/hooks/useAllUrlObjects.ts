import { useEffect, useState } from "react";
import { BASE_API_URL } from "../constants";

export const useAllUrlObjects = () => {
  const [data, setData] = useState<
    { originalURL: string; shortUrlId: string; createdAt: string }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getAllUrlObjects = async () => {
    setIsLoading(true);
    setHasError(false);

    try {
      const response = await fetch(BASE_API_URL + "allUrls", {
        method: "GET",
      });
      const allUrls = (await response.json()).data;
      setData(allUrls);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUrl = async (url: string) => {
    try {
      const response = await fetch(BASE_API_URL + "url", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const result = await response.json();
      setData((prevData) => {
        return prevData.filter(
          (item) => item.originalURL !== result.urlDeleted
        );
      });
    } catch {
      alert("URL deletion failed");
    }
  };

  useEffect(() => {
    getAllUrlObjects();
  }, []);
  return {
    data,
    isLoading,
    hasError,
    fetchAllUrls: getAllUrlObjects,
    deleteUrl,
  };
};
