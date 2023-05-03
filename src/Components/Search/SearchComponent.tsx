import { useSearch } from '../../Hooks/useSearch';
import LogoImg from '../Header/LogoImg';
import logo from '../../Assets/Logo_ML.png';
import Messages from '../../Interfaces/Messages';
import uiTexts from '../../localization/uiTexts';
import config from '../../config';
import { useNavigate } from 'react-router-dom';
import { SearchForm, 
         SearchInput, 
         SearchButton } from './styles';

const SearchComponent = () => {
  const { searchTerm, handleInputChange } = useSearch();

  const message: Messages[string] = uiTexts[config.defaultLanguage];

  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/items/search/${searchTerm}`);
  }

  return (
    <SearchForm onSubmit={handleSearch}>
      <LogoImg src={logo} ></LogoImg>
      <SearchInput
        type="text"
        placeholder={message.searchPlaceHolder}
        value={searchTerm}
        onChange={handleInputChange}
      />
      <SearchButton type='submit'></SearchButton>
    </SearchForm>
  );
};

export default SearchComponent;

