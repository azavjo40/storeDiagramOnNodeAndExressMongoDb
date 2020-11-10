// riuter машрут 
const passport = require('passport')
const express = require('express')
//export log router експорт логику машрут 
const controller = require('../controlles/order')
const router = express.Router()


 // roter
router.get('/',passport.authenticate('jwt',{session: false}),controller.getAll)
router.post('/',passport.authenticate('jwt',{session: false}),controller.create)

module.exports = router 