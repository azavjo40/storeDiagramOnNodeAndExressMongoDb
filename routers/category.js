// riuter машрут 
const passport = require('passport')
const express = require('express')
//export log router експорт логику машрут 
const controller = require('../controlles/category')
const router = express.Router()

// roter
// подкулчаем passsport в router contrpler getAll
router.get('/',passport.authenticate('jwt',{session: false}), controller.getAll)
router.get('/:id',controller.getById)
router.delete('/:id',controller.remove)
router.post('/',controller.create)
router.patch('/:id',controller.update)



module.exports = router 