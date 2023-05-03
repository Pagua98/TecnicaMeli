const productsService = require('../services/productsService');
const NodeCache = require('node-cache');

const cache = new NodeCache();

const getProducts = async (req, res) => {
    cache.set("term", req.params.term, 10000);
    const products = await productsService.getProducts(req.params.term);
    res.send(products);
};

const getProductById = async (req, res) => {
    const product = await productsService.getProductById(req.params.term);
    res.send(product);
};

const getProductDescription = async (req, res) => {
    const product = await productsService.getProductDescription(req.params.term);
    res.send(product);
};

const getProductsFilters = async (req, res) => {
    const lastSearch = await cache.get('term');
    const product = await productsService.getProductsFilters(lastSearch);
    res.send(product.filters);
};


module.exports = {
    getProducts,
    getProductById,
    getProductDescription,
    getProductsFilters
};