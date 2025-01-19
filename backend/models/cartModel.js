const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  items: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Product'
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1
    }
  }]
}, {
  timestamps: true
});

cartSchema.methods.calculateTotal = function() {
  return this.items.reduce((total, item) => {
    return total + (item.product.price * item.quantity);
  }, 0);
};

module.exports = mongoose.model('Cart', cartSchema);
