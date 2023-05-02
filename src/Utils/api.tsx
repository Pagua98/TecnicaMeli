import { Description, ProductDetails } from '../Types/ProductDetails';
import { Products, SearchResult } from '../Types/SearchResult';
import config from '../config';

const searchProduct = async (searchTerm: string): Promise<SearchResult> => {
  try {
    const response = await fetch(`${config.apiUrl}${config.searchEndpoint}${searchTerm}&limit=${config.maxSearchResults}`);
    return await response.json();
  } catch (error) {
    throw new Error('Ha ocurrido un error en la consulta');
  }
};

const getProductById = async (productId: string): Promise<ProductDetails> => {
  try {
    const response = await fetch(`${config.apiUrl}${config.productEndpoint}${productId}`);
    return await response.json();
  } catch (error) {
    throw new Error('Ha ocurrido un error en la consulta');
  }
};

const getProductDescription = async (productId: string): Promise<Description> => {
  try {
    const response = await fetch(`${config.apiUrl}${config.productEndpoint}${productId}/description`);
    return await response.json();
  } catch (error) {
    throw new Error('Ha ocurrido un error en la consulta');
  }
};

export default {
  searchProduct,
  getProductById,
  getProductDescription
};
