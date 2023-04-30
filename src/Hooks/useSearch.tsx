import { useState } from 'react';

export default function useSearch(onSearch: (searchTerm: string) => void) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return {
    searchTerm,
    handleInputChange,
    handleSearch,
  };
}
