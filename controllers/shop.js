const Product = require('../models/product')
const Cart = require('../models/cart')


exports.getCart = (req, res) => {
    Product.fetchAll(product => {
        res.render('shop/cart', { product, pageTitle: 'Your Cart' })
    })
}

exports.postCart = (req, res) => {
    const prodId = req.body.productId
    Product.findById(prodId, product => Cart.addProduct(prodId, product.price))
    res.redirect('/cart')
}

exports.getOrders = (req, res) => {
    Product.fetchAll(product => {
        res.render('shop/orders', { product, pageTitle: 'Your Orders' })
    })
}

exports.getCheckout = (req, res) => {
    Product.fetchAll(product => {
        res.render('shop/checkout', { product, pageTitle: 'Checkout' })
    })
}

exports.getIndex = (req, res) => {
    Product.fetchAll(product => {
        res.render('shop/index', { product, pageTitle: 'Home' })
    })
}


exports.getProductDetail = (req, res) => {
    Product.fetchAll(product => {
        res.render('shop/product-detail', { product, pageTitle: 'Product Detail' })
    })
}

exports.getProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', { products, pageTitle: 'All Products' })
    })
}

exports.getProduct = (req, res) => {
    const prodId = req.params.productId
    Product.findById(prodId, product => {
        res.render('shop/product-detail', { product, pageTitle: product.title })
    })

}