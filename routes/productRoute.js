const express = require('express');
const router = express.Router();
const productModel = require('../models/productModel.js');

router.post('/', async (req, res) => {
    try {
        const product = await productModel.create(req.body);

        res.status(200).json(product);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: e.message });
    }
});

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await productModel.find({});

        res.status(200).json(products);
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ message: e.message });
    }
})

// get a product by ID
router.get('/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await ProductModel.findById(productId);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;