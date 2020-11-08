const {Schema,  model} = require('mongoose')

// схема для сохранения order
const schemaOrder = new Schema({
    date: {
      type: Date, 
    default: Date.now,
    },
    order: {
      type: Number,
      required: true
    },
 list: [
     {
         name: {
             type: String,
         },
         quantity: { 
             type: Number
         },
         cost: {
            type: Number 
         }
     }
 ],
 user: {
    ref: 'User',
    type: Schema.Types.ObjectId 
 }
  })
  
  module.exports = model('orders', schemaOrder)