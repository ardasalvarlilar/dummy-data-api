const express = require('express')
const router = express.Router()
const products = [
  {id: 1,text:'ürün1',price:100},
  {id: 2,text:'ürün2',price:200},
  {id: 3,text:'ürün3',price:300},
]
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