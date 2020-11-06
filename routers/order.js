// riuter машрут 
const express = require('express')
//export log router експорт логику машрут 
const controller = require('../controlles/order')
const router = express.Router()


 // roter
router.get('/login',controller.getAll)
router.post('/register',controller.create)

module.exports = router 