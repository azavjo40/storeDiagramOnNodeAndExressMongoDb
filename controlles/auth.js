
const keys = require('../config/keys')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

// логика машрута  log router login
module.exports.login = async function (req, res){
// функция логин 
const candidate = await User.findOne({email: req.body.email})
// провераем если есть такой пз
if(candidate){
// пз сушествует то сравниваем на зашифрования пароль 
const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
if(passwordResult){
    // если пароль совпадает то мы создаем токен 
    const token = jwt.sign({
    email: candidate.emit,
    userId: candidate._id
    }, keys.jwt, {expiresIn: 60 * 60})
    res.status(200).json({
        token: `Bearer ${token}`
    })
}else{
    // если пароль не сопали 
    res.status(401).json({
        message: 'пароль не совпадают. попробуйте снова '
    })
}
}else{
//если не сушествует пз ошибка 
res.status(404).json({message: 'Пользватель с таким Email не наден'})
}
}
    



// логика машрута  log router register
module.exports.register = async function (req, res) {
// email password регистрация 
 const candidate = await User.findOne({email: req.body.email})
    if(candidate){
        // если есть в базы пользватель то ошибка
        res.status(409).json({
            message: 'Такой Email уже занят. Попробуйте другой'
        })
    }else{
        // если нет пользватель то создаем
        // сгенерировать пароль шифровать
        const salt =bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = new User({
            email: req.body.email,
            // хешировать пароль 
            password: bcrypt.hashSync(password, salt)
        })

        try{
         // сохранаем 
         await user.save()
         res.status(201).json({message: 'пользватель создан ', user})
        }catch(e){
            // ошибка 
            console.log('error on register  save',e)
        }
    }
}