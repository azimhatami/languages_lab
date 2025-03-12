const express = require('express');
const { notFoundError, errorHandler } = require('./utils/ErrorHandler');
const { validationResult, body } = require('express-validator');
const { loginValidator, registerValidator } = require('./validators/auth.validator');
const { IdValidator } = require('./validators/blog.validator');
const { searchValidator } = require('./validators/query.validator');
const { checkValidation } = require('./middlewares/validator');


const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res, next) => {
  res.send('Hello Validator')
})

app.post('/login', loginValidator(), checkValidation, (req, res) => {
  res.send(req.body)
})

app.post('/register', registerValidator(), checkValidation, (req, res) => {
  res.send(req.body)
})

app.get('/blogs/:id', IdValidator, checkValidation, (req, res) => {
  res.send(req.params)
})

app.get('/blogs', searchValidator(), checkValidation, (req, res) => {
  const title = req.query.title;
  const sort = req.query.sort;
  res.send(`Title: ${title}, Sort: ${sort}`)
})

app.use(notFoundError)
app.use(errorHandler)

app.listen(3000, () => {
  console.log('server run on port 3000: http://localhost:3000')
})
