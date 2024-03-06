const express = require('express')
const router = express.Router()
const products = require('../data/products.json')

router.get('/:id',(req,res,next) => {
  const {id} = req.params
  const product = products.find(product => product.id == id)
  if(!product){
    return res.status(404).send('aradığınız ürün bulunamadı')
  }
  if(product){
    return res.status(200).send(product)
  }
})

router.get('/',(req,res,next) => {
  res.send(products)
})



module.exports = router