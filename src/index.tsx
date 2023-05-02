import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './Styles/GlobalStyle';
import HeaderComponent from './Components/Header/HeaderComponent';
import { Home } from './Screens/Home';
import { SearchResult } from './Screens/SearchResult';
import { ProductDetails } from './Screens/ProductDetails';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items/search/:searchTerm" element={<SearchResult />} />
        <Route path="/items/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
