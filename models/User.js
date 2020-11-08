const {Schema,  model} = require('mongoose')

// схема для сохранения дания пользвателья 
const schema = new Schema({
    // email поличаем 
    email: {
      type: String, 
      required: true, 
      unique: true
    },
    // тут получаем пароль 
    password: {
      type: String, required: true
    }
  })
  
  module.exports = model('User', schema)