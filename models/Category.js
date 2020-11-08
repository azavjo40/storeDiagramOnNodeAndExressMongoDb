const {Schema, model} = require('mongoose')


// схема для сохранения дания category
const categorySchema = new Schema({
    name: {
        type: String,
         required: true
        },
    imageSrc: {
        type: String, 
    default: ''
    },
         user: {
           ref: 'User',
           type: Schema.Types.ObjectId 
        }
  })
  
  module.exports = model('categories', categorySchema)