const express = require('express')
const router = express.Router()
const products = require('../data/products.json')

router.get('/:name',(req,res,next) => {
  const {name} = req.params
  const isNumeric = /^\d+$/.test(name);
  const isOnlyLetters = /^[a-zA-Z]+$/.test(name);

  try {
    if(isOnlyLetters && !isNumeric){
      const product = products.filter((product) => product.name.toLowerCase() == name.toLowerCase())
      if(!product){
        return res.status(400).send('Aradığınız ürün bulunamadı')
      }
      return res.status(200).send(product)
    }else if(isNumeric && !isOnlyLetters){
      next()
    }
  } catch (error) {
    
  }
})

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