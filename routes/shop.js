const express = require("express");
const {home, getProduct, getCart, postCart, postCartDeleteProduct, getOrders, getCheckout} = require("../controllers/shop");

const router = express.Router();

router.get('/', home);
router.get('/product/:productId', getProduct);
router.get('/cart', getCart);
router.post('/cart', postCart);
router.post('/cart-delete', postCartDeleteProduct);
router.get('/orders', getOrders);
router.get('/checkout', getCheckout);

module.exports = router;