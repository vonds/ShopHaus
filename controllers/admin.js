const Product = require('../models/product')

exports.getAddProduct = (req, res) => {
    res.render('admin/add-product', { pageTitle: 'Add Product' })
}

exports.postAddProduct = (req, res) => {
    const item = req.body.item
    const imageUrl = req.body.imageUrl
    const price = req.body.price
    const description = req.body.description
    const product = new Product(item, imageUrl, price, description)
    product.save()
    res.redirect('/product-list')
}

exports.getProducts = (req, res) => {
    Product.fetchAll(products => {
        res.render('admin/products', { products, pageTitle: 'Admin Products' })
    })
}