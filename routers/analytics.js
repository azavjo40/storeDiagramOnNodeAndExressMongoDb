// riuter машрут 
const express = require('express')
//export log router експорт логику машрут 
const controller = require('../controlles/analytics')
const router = express.Router()


// roter
router.get('/overview',controller.overview)
router.get('/analytics',controller.analytics)

module.exports = router 