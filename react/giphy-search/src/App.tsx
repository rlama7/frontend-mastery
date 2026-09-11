import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { searchGifs } from './api/giphy';
import { SearchBar } from './components/SearchBar';
import { GifCard } from './components/GifCard';
import { Board } from './components/Board';
// import type { GiphyGif } from './types/giphy';

import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  // const [gifs, setGifs] = useState<GiphyGif[]>([]);

  const {
    data: gifs = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['gifs', searchQuery],
    queryFn: ({ signal }) => searchGifs(searchQuery, signal),
    enabled: Boolean(searchQuery),
    staleTime: 5 * 60 * 1000,
  });

  // const handleSearch = async (query: string) => {
  //   setLoading(true);
  //   setError(null);

  //   try {
  //     const results = await searchGifs(query);
  //     setGifs(results);
  //   } catch {
  //     setError('Unable to load GIFs.');
  //     setGifs([]);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await searchGifs('cat');
  //       console.log('API response', result);
  //     } catch (err) {
  //       console.error('Error fetching adata', err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <main>
      <header className="header">
        <h1>GIPHY Search</h1>
        <SearchBar onSearch={setSearchQuery} />
        <small>Powered by GIPHY</small>

        {isLoading && <p role="status">Loading GIFs...</p>}

        {isError && <p role="alert">{error.message}</p>}

        {!isLoading && !isError && (
          <section className="gif-grid">
            {gifs.map((gif) => (
              <GifCard key={gif.id} gif={gif} />
            ))}
          </section>
        )}
        <Board rows={3} columns={3} />
      </header>
    </main>
  );
}

export default App;
