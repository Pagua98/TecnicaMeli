import { useState } from 'react';

export function useSearch() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  
  return {
    searchTerm,
    handleInputChange,
  };
}
