const { Schema, model } = require('mongoose');

const User = new Schema({
  fullName: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});


const userModel = model('user', User);

module.exports = {
  userModel
}
