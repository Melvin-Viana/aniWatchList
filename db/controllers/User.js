const {User} = require('../models/User.js');
const db = require('../index.js');
const bcrypt = require('bcrypt');
const salt = 10;

module.exports.createUser = (req,res) => {
  const {username, password} = req.body;
    bcrypt.hash(password, salt, async function(err, hash) {
        try {
          await User.create({username,password:hash})
        } catch (err) {
          // TODO: Password validation error handling
          // TODO: User exists
          res.send({err:"Issue creating user"});
        }

    });
}

module.exports.authenticateUser = (req,res) => {
  console.log(req.body);
  User.find(req.body)
    .exec()
    .then(data=>{
      if(data.length!==0) {
        res.send({redirect:'http://localhost:3000/'});
      } else {
        throw new Error('User does not exist')
      }
    })
    .catch(err=>{
      res.status(500);
      throw new Error(err)
    });
}