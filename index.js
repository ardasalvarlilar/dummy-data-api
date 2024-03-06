const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
// imports
const products = require('./routes/products')
const countries = require('./routes/countries')
const users = require('./routes/users')
const port = process.env.PORT || 8000

app.use(cors({
  methods: 'GET',
  origin: '*'
}))
app.use(express.json())


app.use('/products',products)
app.use('/countries',countries)
app.use('/users',users)

app.listen(port,() => {
  console.log('server is running on port',port)
})