import type { GiphyGif, GiphySearchResponse } from '../types/giphy';

const API_URL = 'https://api.giphy.com/v1/gifs/search';

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

export const searchGifs = async (query: string, signal?: AbortSignal): Promise<GiphyGif[]> => {
  // create query params
  const params = new URLSearchParams({
    api_key: API_KEY,
    q: query,
    limit: '5',
  });

  const response = await fetch(`${API_URL}?${params.toString()}`, { signal });

  if (!response.ok) {
    throw new Error(`GIPHY request failed: ${response.status}`);
  }

  const result: GiphySearchResponse = await response.json();

  return result.data;
};
