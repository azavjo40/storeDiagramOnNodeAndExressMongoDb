const keys = require('../config/keys')
const mongoose = require('mongoose')
const User = mongoose.model('User')
// passport.js
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt




const option = {
jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
secretOrKey: keys.jwt 
}

module.exports = passport=> {
    passport.use(
        // создаем новий jwtStrategy 
        new JwtStrategy(option, async (payload, done)=>{
          try{
                  // ищем пользвателя 
                  const user = await User.findById(payload.userId).select('email id')
                  // провераем если есть пользватель в база даний 
                  if(user){
                      // если ошибка то error но так ка уна ничего нет то null второй пр user
                      done(null, user)
                  }else{
                      // если не нашли то 
                      done(null, false)
                  }
          }catch(e){
         console.log(e)
          }
        
        })
    )
}