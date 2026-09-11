import { useState, type FormEvent } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = query.trim();
    if (!value) return;
    onSearch(value);
  };
  return (
    <form className="search" onSubmit={handleSubmit}>
      <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
};
