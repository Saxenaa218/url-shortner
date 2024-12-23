export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const generateShortUrl = (shortUrlId: string): string => {
  return `${window.location.origin}/${shortUrlId}`;
};
