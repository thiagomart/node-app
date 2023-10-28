const express = require('express');

const router = express.Router();

const cartModel = require('./models/cartModel');

router.get('/carts', cartModel.getAll);

module.exports = router;