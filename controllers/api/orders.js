const Order = require('../../models/order');

module.exports = {
  getCart
}

async function getCart(req, res) {
  // getCart from logged in user which is retrieved from req.user._id
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}