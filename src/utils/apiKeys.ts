
// Simple utility to manage API keys in localStorage
const API_KEYS = {
  HUGGING_FACE: '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',
  GEMINI: 'AIzaSyAj6sIJMFcf2J4rOE4vYdQIfXCA1Z2DIEo',
  GOOGLE_BOOKS: 'AIzaSyBVCg3sJACsVsDcCu-y2D6ljcNlo69LxNk'
};

export const getApiKey = (key: keyof typeof API_KEYS): string => {
  const storedKey = localStorage.getItem(`apiKey_${key}`);
  if (!storedKey) {
    localStorage.setItem(`apiKey_${key}`, API_KEYS[key]);
    return API_KEYS[key];
  }
  return storedKey;
};

export const setApiKey = (key: keyof typeof API_KEYS, value: string) => {
  localStorage.setItem(`apiKey_${key}`, value);
};
