const express = require('express')
const app = express()
const cors = require('cors')
// imports
const products = require('./routes/products')

const port = 8000

app.use(cors({
  methods: 'GET',
  origin: '*'
}))
app.use(express.json())


app.use(products)

app.listen(port,() => {
  console.log('server is running on port',port)
})