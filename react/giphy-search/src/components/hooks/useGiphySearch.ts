import { useState } from 'react';
import { searchGifs } from '../../api/giphy';
import type { GiphyGif } from '../../types/giphy';

export const useGiphySearch = () => {
  const [data, setData] = useState<GiphyGif[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const search = async (query: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const gifs = await searchGifs(query);
      setData(gifs);
    } catch (error) {
      setData([]);
      setError(error instanceof Error ? error.message : 'Unable to load GIFs');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    data,
    isLoading,
    error,
    search,
  };
};
