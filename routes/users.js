const express = require('express')
const router = express.Router()
const users = require('../data/users.json')


router.get('/:email',(req,res,next) => {
  const {email} = req.params
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isNumeric = /^\d+$/.test(email);
  const isOnlyLetters = /^[a-zA-Z]+$/.test(email);
  try{
    const isValidEmail = emailRegex.test(email)
    if(isNumeric){
      return next()
    }else if(!isValidEmail || isOnlyLetters){
      return res.status(400).send('Geçerli bir email giriniz.')
    }else{
      const user = users.find((user) => user.email == email)
      if(!user){
        return res.status(400).send('Kullanıcı bulunamadı.')
      }else if(user){
        return res.status(200).send(user)
      }
    }
  }catch(error){
    console.log(error)
  }
})

// kullanıcıyı id bilgisine göre bul
router.get('/:id',(req,res) => {
  const {id} = req.params

  try {
    const isNumeric = /^\d+$/.test(id);
    if(isNumeric){
      const user = users.find((user) => user.id == id)
      if(!user){
        return res.status(400).send('Aradığınız kullanıcı bulunamadı.')
      }
      if(user){
        return res.status(200).send(user)
      }
    }
  } catch (error) {
    console.log(error)
  }
})

// bütün kullanıcıları gönder
router.get('/',(req,res) => {
  res.status(200).send(users)
})

module.exports =router