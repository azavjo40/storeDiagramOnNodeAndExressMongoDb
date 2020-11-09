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

// создаем условия для филтрация условия проверяем что грузится
const fileFilter = (req, file, cb) =>{
    // если все сопадаеть то true
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpeg'){
     cb(null, true)
     // если не совпадаеть то false не пропускаем даний значения 
    }else{
        cb(null, false)
    }
}

// лимить на размер фото
const limits = {
 fileSize: 1024 * 1024 * 5
}

module.exports = multer({
    // передаем то storage в multer
    storage: storage,
    fileFilter: fileFilter,
    limits: limits
})