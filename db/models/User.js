const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: {type: String, unique: true, required:true},
  password: {type:String, required:true},
  animes: []
});

const User = mongoose.model('USER', userSchema);

module.exports.User = User;