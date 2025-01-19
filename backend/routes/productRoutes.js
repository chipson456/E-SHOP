const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.get('/category/:category', productController.getProductsByCategory);

module.exports = router;
