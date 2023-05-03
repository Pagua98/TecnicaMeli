const express = require('express');
const router = express.Router();
const { getProducts, getProductById, getProductDescription, getProductsFilters } = require('../controllers/productsController');

router
    .get("/items/search/:term", getProducts)
    .get("/items/:term", getProductById)
    .get("/items/description/:term", getProductDescription)
    .get("/items/getCategories/:term", getProductsFilters)

module.exports = router;