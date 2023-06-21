const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true
  }
}, {
  timestamps: true,
  // Even though it's hashed, don't serialize/include
  // the password when document is `res.json()`'d
  // doc - document || ret - returned document
  toJson: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

// Mongoose Middleware (pre-save hook) - will hash
// password anytime the password has changed
userSchema.pre('save', async function(next) {
  // 'this' is the user document
  if (!this.isModified('password')) return next();
  // Replace the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

module.exports = mongoose.model('User', userSchema);