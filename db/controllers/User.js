const {User} = require('../models/User.js');
const db = require('../index.js');

module.exports.createUser = (req,res) => {
  const {username, password, animes} = req.body;
  return User.create({username,password,animes})
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