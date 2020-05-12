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
  const {password, username } = req.body;
  console.log(password);
    User.find({username})
    .exec()
    .then(async data=> {
        if(data.length!==0) {
          let doesPasswordMatch = await bcrypt.compareSync(password, data[0].password);
          if (doesPasswordMatch) {
            // res.send({redirect:'http://localhost:3000/'});
          } else {
            res.send({err: 'Password does not match'}).status(500)
          }
        } else {
          res.send({err: 'User does not exist'}).status(400);
        }
    })

};
