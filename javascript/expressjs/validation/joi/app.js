const express = require('express');
const { notFoundError, errorHandler } = require('./utils/ErrorHandler');
const { loginValidationSchema, registerValidationSchema } = require('./validators/auth.validator');


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post('/login', async (req, res, next) => {
  try {
    await loginValidationSchema.validateAsync(req.body)
    res.send(req.body)
  } catch (error) {
    next(error)
  }
})

app.post('/register', async (req, res, next) => {
  try {
    await registerValidationSchema.validateAsync(req.body)
    res.send(req.body)
  } catch (error) {
    next(error)
  }
})


app.use(notFoundError)
app.use(errorHandler)

app.listen(3000, () => {
  console.log('server run on port 3000: http://localhost:3000')
})
