const User = require("../models/User.model");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signUp = (req, res,) =>{
  const{email, password, date, profileName, gender} = req.body
  User
  .create({ email, password, date, profileName, gender })
  .then((createdUser) => {res.json(createdUser)})
  .catch(err => console.log(err))

}

const logIn = (req,res) =>{
  const {email, password} = req.body
  User
  .findOne({email})
  .then(foundUser => {
    if(!foundUser){
      res.status(401).json({message: 'Usuario o contraseña incorrectos'})
    }
    if(bcrypt.compareSync(password, foundUser.password)){
      const {email, profileName, _id} = foundUser
      const payload = {email,profileName,_id}
      req.payload = payload;
      const authToken = jwt.sign(
        payload,
        process.env.TOKEN_SECRET,
        { algorithm: 'HS256', expiresIn: "7d"}
      )
      res.json({authToken: authToken})
    }else{
      res.status(401).json({message: 'Usuario o contraseña incorrectos'})
    }
  })
  .catch(e => console.log(e))

}
const verify = (req,res) =>{
  res.status(200).json(req.payload)
}

module.exports = {signUp, logIn, verify}