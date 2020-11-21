// riuter машрут 
const express = require('express')
//export log router експорт логику машрут 

const router = express.Router()

 // locolhost:5000/api/auth/login
router.get('/test',(req, res)=>{
    res.send('Hello World!')
})


module.exports = router 