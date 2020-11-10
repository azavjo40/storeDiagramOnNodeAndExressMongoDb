const Order = require('../models/Order')
const errorHandlier = require('../utils/errorHandlier')

//(get)lokalhost:500/api/order?2&limit=5
module.exports.getAll = async function (req, res) {
    // тут будеть то что пользватель искать  
    const query = {
    user: req.user.id
    }
     // проверяем date start
     if(req.query.start){
         // филтр
      query.date = {
          // проверяем  больше или равно
    $gte: req.query.start
      }
     }
     // проверяем если конуц
     if(req.query.end){
         //не знаем елси что то если неь 
         if(!query.date){
         // если нет то пустой
         query.date = {}
         }
         //говорим что query полюбому обект $lte будить означать меньше или
         query.date['$lte'] = req.query.end
     }

     // проверяем указали order
     if(req.query.order){
         query.order = +req.query.order
     }
    try{
    // что бы найти все order и 
    const orders = await Order.find(query)
    //по номеров сортировать
    .soer({data: -1})
    //отчитвать количиства заказов плюсь дает нам что бы со строка сделать номер
    .skip(+req.query.offset)
    .limit(+req.query.limit)
    res.status(200).json(orders)
    }catch(e){
        errorHandlier(res, e)
    }
}

module.exports.create = async function (req, res) {
    try{
        // выташим количиства order с база которий заказал
        const lastOrder = await Order
        .findOne({user: req.user.id})
        // что распалагались по очеред что бы получилт последний заказь 
        .sort({data: -1})
     
        // если есть ордер то ордер  иначе order 0
        const maxOrder = lastOrder  ? lastOrder.order : 0

    const order = await new Order({
        // тут хранится цена количества итд
    list: req.body.list,
    user: req.user.id,
    // номер текуший заказь 
    order: maxOrder + 1
    }).save()
    res.status(201).json(order)
    }catch(e){
        errorHandlier(res, e)
    }
}


