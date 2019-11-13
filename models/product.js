const fs = require('fs')
const path = require('path')
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
)

const getProductsFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) return cb([])
        return cb(JSON.parse(fileContent))
    })
}


module.exports = class Product {
    constructor(item, imageUrl, price, description) {
        this.item = item
        this.imageUrl = imageUrl
        this.price = price
        this.description = description
    }

    save() {
        getProductsFromFile(products => {
            this.id = Math.random().toString()
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err)
            })
        })
    }

    static fetchAll(cb) {
        getProductsFromFile(cb)
    }

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id)
            cb(product)
        })
    }
}