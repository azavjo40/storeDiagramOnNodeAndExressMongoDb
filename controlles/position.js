// logika Position
const Position = require('../models/Posiion')
const errorhandler = require('../utils/errorHandlier')



module.exports.getByCategoryId = async function (req, res) {
    // получения всех Position по id
    try{
        // ищем по Position id
      const position = await Position.find({
          category: req.params.categoryId,
          // смотри на пользватела
          user: req.user.id
      })
      // отправлаем все что нашли 
      res.status(200).json(position)
    }catch(e){
        errorhandler(res, e)
    }
}

module.exports.create = async function (req, res) {
    try{
        // создаем Position 
       const position = await new Position({
           name: req.body.name,
           cost: req.body.cost,
           category: req.body.category,
           user: req.user.id
       }).save()
       res.status(201).json(position)
    }catch(e){
        errorhandler(res, e)
    }
 
}


module.exports.remove = async function (req, res) {
      // удалаем по id Position
      try{
      await Position.remove({
          _id: req.params.id
      })
      //отвечаем
      res.status(200).json({
          message: 'Позиция Была удалена'
      })
    }catch(e){
        errorhandler(res, e)
    }
}


module.exports.update = async function (req, res) {
      // update изменяем Position
      try{
     const position = await Position.findOneAndUpdate(
         // находим 
         { _id: req.params.id},
      // тут изменяем 
      {$set: req.body},
      // это полья что бы отправить новий даний  а не старий обнаить после отправить даний 
      {new: true}
         )

     res.status(200).json(position)
    }catch(e){
        errorhandler(res, e)
    }
}
