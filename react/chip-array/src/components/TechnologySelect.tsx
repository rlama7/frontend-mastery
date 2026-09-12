import { useEffect, useState } from 'react';

import { fetchTechnologies } from '../api/technologyService';
import type { Technology } from '../types/technology';

import '../css/TechnologySelect.css';

export const TechnologySelect = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await fetchTechnologies();
        console.log('Technologies data:', data);
        setTechnologies(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to load technologies');
      } finally {
        setIsLoading(false);
      }
    };

    void loadTechnologies();
  }, []);

  const normalizedQuery = query.trim().toLowerCase();

  const filteredTechnologies = technologies.filter((technology) =>
    technology.label.toLocaleLowerCase().includes(normalizedQuery),
  );

  return (
    <div className="">
      <label htmlFor="technology-input" className="">
        Technologies {''}
      </label>
      <input
        id="technology-input"
        type="text"
        className=""
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-controls="technology-listbox"
      />

      {isLoading && <p role="status">Loading technologies...</p>}

      {error && <p role="alert">{error}</p>}

      {isOpen && !isLoading && !error && (
        <>
          {filteredTechnologies.length > 0 ? (
            <ul id="technology-listbox" role="listbox" aria-label="Technology suggestions">
              {filteredTechnologies.map((technology) => (
                <li key={technology.id} role="option" aria-selected={false}>
                  {technology.label}
                </li>
              ))}
            </ul>
          ) : (
            <p>No technologies found.</p>
          )}
        </>
      )}
    </div>
  );
};
