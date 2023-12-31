const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// All routes start with /api/orders

// GET /api/orders
router.get('/', ordersCtrl.getAllOrders);
// GET /api/orders/cart
router.get('/cart', ordersCtrl.getCart);
// POST /api/orders/cart/items/:id
router.post('/cart/items/:id', ordersCtrl.addToCart);
//POST /api/orders/cart/checkout
router.post('/cart/checkout', ordersCtrl.checkout);
// PUT /api/orders/cart/qty
router.put('/cart/qty', ordersCtrl.setItemQty);

module.exports = router;