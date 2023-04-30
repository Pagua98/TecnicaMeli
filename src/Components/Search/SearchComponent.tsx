import React from 'react';
import useSearch from '../../Hooks/useSearch';
import { SearchButton } from './SearchButton'
import { SearchInput } from './SearchInput';
import logo from '../../assets/Logo_ML.png';
import { LogoImg } from '../Header/LogoImg';
import { SearchForm } from './SearchForm';


interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchComponent: React.FC<Props> = ({ onSearch }) => {
  const { searchTerm, handleInputChange, handleSearch } = useSearch(onSearch);

  return (
    <SearchForm onSubmit={handleSearch}>
      <LogoImg src={logo} ></LogoImg>
      <SearchInput
        type="text"
        placeholder="Nunca dejes de buscar"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <SearchButton type="submit"></SearchButton>
    </SearchForm>
  );
};

export default SearchComponent;

