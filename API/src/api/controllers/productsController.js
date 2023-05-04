const productsService = require('../services/productsService');
const NodeCache = require('node-cache');
const { searchResultMap, productDetailsMap } = require('../utils/helper');

const cache = new NodeCache();

const getProducts = async (req, res) => {
    cache.set("term", req.params.term, 10000);
    const products = await productsService.getProducts(req.params.term);

    const result = await searchResultMap(products)
    
    res.send(result);
};

const getProductById = async (req, res) => {
    const product = await productsService.getProductById(req.params.term);
    const description = await getProductDescription(product.id)
    const categories = await getProductsFilters();
    const result = await productDetailsMap(product, description, categories)
    res.send(result);
};

const getProductDescription = async (id) => {
    const result = await productsService.getProductDescription(id);
    return result;
};

const getProductsFilters = async () => {
    const lastSearch = await cache.get('term');
    const result = await productsService.getProductsFilters(lastSearch);
    return result;
};


module.exports = {
    getProducts,
    getProductById,
    getProductDescription,
    getProductsFilters
};