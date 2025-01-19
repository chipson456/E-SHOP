const Cart = require('../models/cartModel');

const getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
  res.json(cart || { items: [], total: 0 });
};

const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    cart = new Cart({ user: req.user._id, items: [] });
  }

  const existingItem = cart.items.find(item => 
    item.product.toString() === productId
  );

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ product: productId, quantity });
  }

  await cart.save();
  res.status(201).json(cart);
};

const updateCartItem = async (req, res) => {
  const { quantity } = req.body;
  const cart = await Cart.findOneAndUpdate(
    { 
      user: req.user._id,
      'items.product': req.params.id 
    },
    { 
      $set: { 'items.$.quantity': quantity } 
    },
    { new: true }
  );
  res.json(cart);
};

const removeFromCart = async (req, res) => {
  const cart = await Cart.findOneAndUpdate(
    { user: req.user._id },
    { $pull: { items: { product: req.params.id } } },
    { new: true }
  );
  res.json(cart);
};

module.exports = {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart
};
