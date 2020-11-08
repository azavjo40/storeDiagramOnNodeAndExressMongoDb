const Category = require('../models/Category')
const Position = require('../models/Posiion')
const errorHandler = require('../utils/errorHandlier')


module.exports.getAll = async function (req, res) {
   try{
      // получаем все категори
      const categiries = await Category.find({
         // ищем по id пользвателья которие создал
         user: req.user.id
      })
     // отправляем то что нашли 
     res.status(200).json(categiries)
   }catch(e){
   errorHandler(res, e)
   }
}

module.exports.getById = async  function (req, res) {
   try{
      // получаем category по id
      const categiry = await Category.findById(
         // ищем по id пользвателья можно не указать обекть id унас уникалний 
         req.params.id
      )
     // отправляем то что нашли 
     res.status(200).json(categiry)
   }catch(e){
   errorHandler(res, e)
   }
}

module.exports.remove = async function (req, res) {
    try{
       // удаляем категори по id
    await Category.remove({
       _id: req.params.id
    })
    // тут удаляем с база очишаем
    await Position.remove({
       category: req.params.id
    })
    res.status(200).json({
       message: 'Категория удалена...'
    })
}catch(e){
errorHandler(res, e)
}
}


module.exports.create = async function (req, res) {
   try{
    // создаем 
   }catch(e){
   errorHandler(res, e)
   }
}

module.exports.update = async function (req, res) {
    
}