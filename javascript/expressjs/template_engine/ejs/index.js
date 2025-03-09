const express = require('express');
const path = require('path');
const { notFoundError, errorHandler } = require('./util/errorHandler.js');


const app = express();

const skills = ['JavaScript', 'Devops', 'Express'];
const titleList = 'This is a title';
const users = [
  {
    id: 1,
    name: 'Ali'
  },
  {
    id: 2,
    name: 'Amir'
  },
  {
    id: 3,
    name: 'Abol'
  },
];

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.get('/', (req, res, next) => {
  const text = 'text';
  res.render('index', {text, users})
})

app.use(notFoundError)
app.use(errorHandler)

app.listen(3000, () => {
  console.log('server run on port 3000: http://localhost:3000')
})


