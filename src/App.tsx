import HeaderComponent from "./Components/Header/HeaderComponent";
import { Home } from "./Screens/Home";
import { ProductDetails } from "./Screens/ProductDetails";
import { SearchResult } from "./Screens/SearchResult";
import GlobalStyle from "./Styles/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <GlobalStyle />
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/search/:searchTerm" element={<SearchResult />} />
        <Route path="/items/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
