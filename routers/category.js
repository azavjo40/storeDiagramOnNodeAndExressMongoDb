// riuter машрут 
const express = require('express')
//export log router експорт логику машрут 
const controller = require('../controlles/category')
const router = express.Router()

// roter
router.get('/',controller.getAll)
router.get('/:id',controller.getById)
router.delete('/:id',controller.remove)
router.post('/',controller.create)
router.patch('/:id',controller.update)



module.exports = router 