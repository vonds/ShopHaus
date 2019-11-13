const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shop')

router.get('/', shopController.getIndex)
router.get('/cart', shopController.getCart)
router.post('/cart', shopController.postCart)
router.get('/orders', shopController.getOrders)
router.get('/products', shopController.getCart)
router.get('/products/:productId', shopController.getProduct)
router.get('/checkout', shopController.getCheckout)
router.get('/product-list', shopController.getProducts)

module.exports = router