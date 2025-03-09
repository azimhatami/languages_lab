const express = require('express');
const path = require('path');
const hbs = require('hbs');
const { notFoundError, errorHandler } = require('./util/errorHandler.js');


const app = express();

const skills = ['JavaScript', 'Devops', 'Express'];
const titleList = 'This is a title'

hbs.registerPartials(path.join(__dirname, 'views/partials'))
app.use(express.static('public'))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.get('/', (req, res, next) => {
  res.render('index', {
    skills,
    titleList
  })
})

app.use(notFoundError)
app.use(errorHandler)

app.listen(3000, () => {
  console.log('server run on port 3000: http://localhost:3000')
})


