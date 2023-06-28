const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema ({
  qty: { type: Number, default: 1 },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
    required: true
  }
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
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);