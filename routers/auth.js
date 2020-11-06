// riuter машрут 
const express = require('express')
//export log router експорт логику машрут 
const controller = require('../controlles/auth')
const router = express.Router()


 // locolhost:5000/api/auth/login
router.post('/login',controller.login)

// locolhost:5000/api/auth/register
router.post('/register',controller.register)

module.exports = router 