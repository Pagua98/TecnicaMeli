import SearchComponent from "./Components/Search/SearchComponent";

function App() {
  const handleSearch = (searchTerm: string) => {
    console.log('Searching for:', searchTerm);
    // Aquí iría la lógica para realizar la búsqueda
  };

  return (
    <>
      <SearchComponent onSearch={handleSearch} />
    </>
  );
}

export default App;
