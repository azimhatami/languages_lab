const express = require('express');
const morgan = require('morgan');
// const { default: camelCase } = require('camelcase-keys');
const camelCaseKey = (...args) => import('camelcase-keys').then(({default: camelCaseKeys}) => camelCaseKeys(...args))
const omitEmpty = require('omit-empty');


const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.use(morgan('tiny'))
// app.use(morgan('tiny'))
// app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// app.use((req, res, next) => {
//   console.log('log1');
//   next()
// }, (req, res, next) => {
//   console.log('log2');
//   next()
// }, (req, res, next) => {
//   console.log('log3');
//   next()
// })

// first_name, first-name, lastname, last-name => firstName, lastName
// req.body['first-name']

// console.log(omitEmpty({
//   a: 'a', 
//   b: '', 
//   f: { c: 'c', d: ''}, 
//   e: [],
//   num: 0,
//   t: 1
// }, {omitZero: true}));

function checkAuth(req, res, next) {
  const {username, pass} = req.query;
  if (username == 'azim' && pass == 1234) {
    return next()
  }
  res.send('Authentication is failed')
}

async function camelCase(req, res, next) {
  req.body = await camelCaseKey(req.body, {deep: true});
  req.query = await camelCaseKey(req.query)
  req.params = await camelCaseKey(req.params)
  next();
}

function removeEmptyFields(options = {}) {
  return function (req, res, next) {
    req.body = omitEmpty(req.body, options);
    next()
  }
}

app.use(camelCase)


app.get('/', (req, res) => {
  console.log('Response home');
  res.send('Hello bro');
});

// app.use((req, res, next) => {
//   console.log('log4');
//   next()
// })

app.get('/users', checkAuth, (req, res) => {
  console.log('response users');
  res.send('Users')
})

app.get('/foo', (req, res) => {
  console.log('response foo');
  res.send('Fooooo')
})

app.get('/blogs', (req, res) => {
  // console.log(await camelCase({'first-name': 'azim'}));
  res.send({
    body: req.body,
    query: req.query,
    params: req.params
  })
})

app.post('/create', removeEmptyFields(), (req, res, next) => {
  res.send(req.body)
})


app.listen(3000, () => {
  console.log('server run on port 3000: http://localhost:3000');
})
