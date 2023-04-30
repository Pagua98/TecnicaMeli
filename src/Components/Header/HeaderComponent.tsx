import { HeaderBar } from './HeaderBar';
import SearchComponent from "../Search/SearchComponent";

const HeaderComponent = () => {
    const handleSearch = (searchTerm: string) => {
        console.log('Searching for:', searchTerm);
        // Aquí iría la lógica para realizar la búsqueda
    };

    return (
        <HeaderBar>
            <SearchComponent onSearch={handleSearch} />
        </HeaderBar>
    );
};

export default HeaderComponent;


