const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  picture: { type: String, required: true },
  category: { type: String, required: true},
  location: { type: String, required: true },
  price: { type: Number, required: true }
}, {
  timestamps: true,
  toJSON: { virtuals: true } // serializes virtuals
});

itemSchema.virtual('itemSKU').get(function() {
  return this.id.slice(-8).toUpperCase();
});

module.exports = mongoose.model('Item', itemSchema);