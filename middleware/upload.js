// для загрузка файлов логика загрузка файлов
const multer = require('multer')
const moment = require('moment')

// перемена стороч для хранения 
const storage = multer.diskStorage({
    destination(req, file, cb){
        // путь до хранения до файл
     cb(null, 'uploads/')
    },
    filename(req, file, cb){
        // создаем перемена с названия файла с помощию moment
        const date =  moment().format('DDMMYYYY-HHmmss_SSS')
     // тут назваем файла 
     cb(null, `${date}-${file.originalname}`)
     
    }
})

// создаем условия для филтрация условия проверяем что грузитс
const fileFilter = (req, file, cb) =>{
    if(file.mimetype === 'image/png') {
     
    }
}

module.exports = multer({
    // передаем то storage в multer
    storage: storage
})