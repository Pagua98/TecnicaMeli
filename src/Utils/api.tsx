import { Category, Products, SearchDetailResult, SearchResult } from '../Types/SearchResult';
import config from '../config';

const searchProduct = async (searchTerm: string): Promise<SearchResult> => {
  try {
    const response = await fetch(`${config.apiUrl}${config.searchApiEndpoint}${searchTerm}`);
    return await response.json();
  } catch (error) {
    throw new Error('Ha ocurrido un error en la consulta');
  }
};

const getProductById = async (productId: string): Promise<Products> => {
  try {
    const response = await fetch(`${config.apiUrl}${config.productDetailApiEndpoint}${productId}`);
    return await response.json();
  } catch (error) {
    throw new Error('Ha ocurrido un error en la consulta');
  }
};

const getProductDescription = async (productId: string): Promise<Products> => {
  try {
    const response = await fetch(`${config.apiUrl}${config.productDescriptionApiEndpoint}${productId}`);
    return await response.json();
  } catch (error) {
    throw new Error('Ha ocurrido un error en la consulta');
  }
};

const getProductCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${config.apiUrl}${config.productCategoriesApiEndpoint}terms`);
    return await response.json();
  } catch (error) {
    throw new Error('Ha ocurrido un error en la consulta');
  }
};

export default {
  searchProduct,
  getProductById,
  getProductDescription,
  getProductCategories
};
