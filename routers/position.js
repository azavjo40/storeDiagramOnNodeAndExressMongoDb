// riuter машрут 
const passport = require('passport')
const express = require('express')
//export log router експорт логику машрут 
const controller = require('../controlles/position')
const router = express.Router()


// roter
router.get('/:categoryId',passport.authenticate('jwt',{session: false}),controller.getByCategoryId)
router.post('/',passport.authenticate('jwt',{session: false}),controller.create)
 router.patch('/:id',passport.authenticate('jwt',{session: false}),controller.update)
 router.delete('/:id',passport.authenticate('jwt',{session: false}),controller.remove)

module.exports = router 