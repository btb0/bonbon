const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/orders/cart
router.get('/cart', ordersCtrl.getCart);

module.exports = router;