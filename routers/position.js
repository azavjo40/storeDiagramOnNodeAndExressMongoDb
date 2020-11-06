// riuter машрут 
const express = require('express')
//export log router експорт логику машрут 
const controller = require('../controlles/position')
const router = express.Router()


// roter
router.get('/:categoryId',controller.getByCategoryId)
router.post('/',controller.create)
 router.patch('/:id',controller.update)
 router.delete('/:id',controller.remove)

module.exports = router 