const express = require('express');
const { notFoundError, errorHandler } = require('./utils/ErrorHandler');
const { validate } = require('express-validation');
const { loginValidation, registerValidation } = require('./validators/auth.validator');


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/login', validate(loginValidation), (req, res) => {
  res.send(req.body)
})

app.post('/register', validate(registerValidation), (req, res) => {
  res.send(req.body)
})


app.use(notFoundError)
app.use(errorHandler)

app.listen(3000, () => {
  console.log('server run on port 3000: http://localhost:3000')
})
