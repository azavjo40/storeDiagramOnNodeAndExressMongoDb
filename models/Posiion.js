const {Schema, model} = require('mongoose')


// схема для сохранения дания postion
const Posiion = new Schema({
    name: {
        type: String,
         required: true
        },
    cost: {
        type: Number, 
    required: true
    },
     category: {
     ref: 'categories',
     type: Schema.Types.ObjectId 
    },
         user: {
           ref: 'User',
           type: Schema.Types.ObjectId 
        }
  })
  
  module.exports = model('Posiions', Posiion)