require('dotenv').config();


const getProducts = async (term) => {
    try {
        const response = await fetch(`${process.env.API}${process.env.SEARCH_ENDPOINT}${term}&limit=${process.env.MAX_SEARCH_RESULTS}`);
        const products = await response.json();
        return products;
      } catch (error) {
        console.error(error);
        return null;
      }
};

const getProductById = async (term) => {
    try {
        const response = await fetch(`${process.env.API}${process.env.PRODUCT_ENDPOINT}${term}`);
        const product = await response.json();
        return product;
      } catch (error) {
        console.error(error);
        return null;
      }
};

const getProductDescription = async (term) => {
    try {
        const response = await fetch(`${process.env.API}${process.env.PRODUCT_ENDPOINT}${term}/description`);
        return await response.json();
      } catch (error) {
        console.error(error);
        return null;
      }
};

const getProductsFilters = async (term) => {
    try {
        const response = await fetch(`${process.env.API}${process.env.SEARCH_ENDPOINT}${term}&limit=${process.env.MAX_SEARCH_RESULTS}`);
        return await response.json();
      } catch (error) {
        console.error(error);
        return null;
      }
};

module.exports = {
    getProducts,
    getProductById,
    getProductDescription,
    getProductsFilters
};