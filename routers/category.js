// riuter машрут 
const passport = require('passport')
const express = require('express')
const upload = require('../middleware/upload')
//export log router експорт логику машрут 
const controller = require('../controlles/category')
const router = express.Router()

// roter
// подкулчаем passsport в router contrpler getAll
router.get('/',passport.authenticate('jwt',{session: false}), controller.getAll)
router.get('/:id',passport.authenticate('jwt',{session: false}),controller.getById)
router.delete('/:id',passport.authenticate('jwt',{session: false}),controller.remove)
router.post('/',passport.authenticate('jwt',{session: false}),upload.single('image'),controller.create)
router.patch('/:id',passport.authenticate('jwt',{session: false}),upload.single('image'),controller.update)



module.exports = router 