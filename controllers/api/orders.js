const Order = require('../../models/order');

module.exports = {
  getCart,
  addToCart,
  setItemQty
}

// Gets all items in a users shopping cart
async function getCart(req, res) {
  // getCart from logged in user which is retrieved from req.user._id
  const cart = await Order.getCart(req.user._id)
    // finding the id and finding the matching document and attaching it to the order
    .populate({ path: 'orderItems.item', model: 'Item' }).exec();
  res.json(cart);
}

// Adds an item to the users shopping cart
async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.addToCart(req.params.id);
  res.json(cart);
}

// Updates the quantity of an item in the shopping cart
async function setItemQty(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty);
  res.json(cart);
}