const express = require('express');
const path = require('path');
const { notFoundError, errorHandler } = require('./util/errorHandler.js');


const app = express();

// app.use('/static', express.static('public'))
app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

const users = [
  {
    id: 1, 
    name: 'Ali'
  },
  {
    id: 2, 
    name: 'Azim'
  },
  {
    id: 3, 
    name: 'Amir'
  },
];

app.get('/', (req, res, next) => {
  res.render('index', {
    link: 'https://botostart.ir',
    section: 'This is a var',
    users
  })
})


app.use(notFoundError)
app.use(errorHandler)

app.listen(3000, () => {
  console.log('server run on port 3000: http://localhost:3000')
})


