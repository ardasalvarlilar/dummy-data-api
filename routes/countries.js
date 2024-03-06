const express = require('express')
const router = express.Router()
const countries = require('../data/countries.json')

// ülkeyi ismine göre bul eğer kullanısı isim yerine id girdiyse sonraki middleware'e gönder
router.get('/:name',(req,res,next) => {
  const {name} = req.params
  try {
    const isOnlyLetters = /^[a-zA-Z]+$/.test(name);
    if(/^\d+$/.test(name)){
      return next()
    }else if(isOnlyLetters){
      const country = countries.find(country => country.name.toLowerCase() == name.toLowerCase())
      if(!country){
        return res.status(400).send('Aradığınız ülke bulunamadı')
      }
      if(country){
        return res.status(200).send(country)
      }
    }
  } catch (error) {
    console.log(error)
  }
})

// ülkeyi id'sine göre bul
router.get('/:id',(req,res) => {
  const {id} = req.params
  try{
    const isNumeric = /^\d+$/.test(id);
    if(isNumeric){
      const country = countries.find(country => country.id == Number(id))
      if(!country){
        return res.status(400).send('Aradığınız ülke bulunamadı')
      }
      if(country){
        return res.status(200).send(country)
      }
    }
  }catch(error){
    console.log(error)
  }
})

// bütün datayı anasayfaya gönder
router.get('/',(req,res) => {
  res.status(200).send(countries)
})

module.exports = router