const Schema = require('validate');


const registerSchema = new Schema({
  username: {
    type: String,
    required: true,
    length: {min: 4, max: 30}
  },
  email: {
    type: String,
    required: true,
    match: /[A-Za-z0-9\_\.]{5,50}@[a-z]{2,10}.[a-z]{2,10}/gi,
    message: {
      match: 'Email is invalid'
    }
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'teacher']
  }
});

module.exports = {
    registerSchema,
}
