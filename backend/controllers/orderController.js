const Order = require('../models/orderModel');

const orderController = {
  createOrder: async (req, res) => {
    try {
      const { items, shippingAddress, paymentMethod, totalAmount } = req.body;
      const order = new Order({
        user: req.user._id,
        items,
        shippingAddress,
        paymentMethod,
        totalAmount
      });
      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getUserOrders: async (req, res) => {
    try {
      const orders = await Order.find({ user: req.user._id });
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = orderController;
