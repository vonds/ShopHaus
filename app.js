const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const errorController = require('./controllers/error')
const adminRouter = require('./routes/admin')
const shopRouter = require('./routes/shop')


const app = express()


app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminRouter)
app.use(shopRouter)

app.use(errorController.get404)

app.listen(3000)