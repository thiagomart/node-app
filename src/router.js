const express = require('express');
const cartModel = require('./models/cartModel');
const router = express.Router();

router.get('/carts', (request, response) => {
    return response.status(200).json({message: '', body: cartModel.getAll()})
})