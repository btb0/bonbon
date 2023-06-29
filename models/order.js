const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema ({
  qty: { type: Number, default: 1 },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
    required: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true } // serializes virtuals
});

// 'extPrice' => 'Extended Price' = the total price of a certain item multiplied by the quantity of that item being purchased
orderItemSchema.virtual('extPrice').get(function() {
  return this.qty * this.item.price
});

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderItems: [orderItemSchema],
  isPaid: { type: Boolean, default: false } // an unpaid order is the 'shopping cart'
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('totalOrderPrice').get(function() {
  // total is the accumulator, item is each item being iterated through, 0 is initial value.  
  return this.orderItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalOrderQty').get(function() {
  // total is the accumulator, item is each item being iterated through, 0 is initial value.
  return this.orderItems.reduce((total, item) => total + item.qty, 0);
});

// Taking the order document's ._id and taking the last 9 characters to make as the orderId
orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-9).toUpperCase();
});

// Fat models, skinny controllers (:

orderSchema.statics.getCart = function(userId) {
  // return the promise that resolves to a cart
  return this.findOneAndUpdate(
    // Querying for a user that matches the logged in user id, and then their unpaid order
    { user: userId, isPaid: false },
    { user: userId }, // I think this could also be an empty object (since it is already defined in the filter above) but for now I will leave it
    // upsert creates a new doc if it doesn't exist
    { upsert: true, new: true }
  ).populate({ path: 'orderItems.item', model: 'Item' }).exec();
};

// Instance method for adding items to cart
orderSchema.methods.addToCart = async function(itemId) {
  // Binding 'this' to the cart (order document)
  const cart = this;
  // Checking if item already exists in cart
  const orderItem = cart.orderItems.find(orderItem => orderItem.item._id.equals(itemId));
  if (orderItem) {
    // If the item already exists, just increase the quantity
    orderItem.qty += 1;
  } else {
    // Find the item from the items collection (from all items)
    const Item = mongoose.model('Item');
    const item = await Item.findById(itemId);
    cart.orderItems.push({ item }); // Don't need to set quantity for a new item (defaults to 1 in schema)
  }
  return cart.save();
};

// Instance method for setting an items qty in the cart
orderSchema.methods.setItemQty = function(itemId, newQty) {
  // Binding 'this' to the cart (order document)
  const cart = this;
  // Checking if item already exists in cart
  const orderItem = cart.orderItems.find(orderItem => orderItem.item._id.equals(itemId));
  if (orderItem && newQty <= 0) {
    // if the Qty is less than or equal to 0, delete it from the cart
    orderItem.deleteOne();
  } else if (orderItem) {
    // Set new qty (don't have to worry about it being a positive value because of the above if statement)
    orderItem.qty = newQty;
  }
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);