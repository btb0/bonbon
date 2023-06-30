const Order = require('../../models/order');

module.exports = {
  getCart,
  addToCart,
  setItemQty,
  checkout,
  getAllOrders
}

// Gets all items in a users shopping cart
async function getCart(req, res) {
  // getCart from logged in user which is retrieved from req.user._id
  const cart = await Order.getCart(req.user._id)
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

// 'Pays' for order ==> updates isPaid property on cart to 'true'
async function checkout(req, res) {
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}

// Retrieves all orders for the logged in user
async function getAllOrders(req, res) {
  try {
    const orders = await Order.find({
      user: req.user._id,
      isPaid: true
    });
    res.json(orders);
  } catch {
    res.status(400).json('Couldn\'t find orders ):');
  }
}