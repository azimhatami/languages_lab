const express = require('express');
const app = express();


// app.get('/:number', (req, res) => {
//   let num = req.params.number;
//   if (num == 2) throw {
//     status: 400, 
//     message: 'number is 2'
//   }
//   if (num == 3) throw {
//     status: 400, 
//     message: 'number is 3'
//   }
// 
//   res.send('main page')
// })

app.get('/:number', (req, res, next) => {
  try {
    let num = req.params.number;
    if (num == 2) throw {
      status: 400, 
      message: 'number is 2'
    }
    if (num == 3) throw {
      status: 400, 
      message: 'number is 3'
    }
  
    res.send('main page')
  } catch (error) {
    next(error)
  }
})

app.use((req, res, next) => {
  return res.status(404).json({
    statusCode: res.statusCode,
    error: {
      type: 'Not Found',
      message: `not found ${req.url}`
    }
  })
})


app.use((error, req, res, next) => {
  return res.json({
    statusCode: error.status || 500,
    error: {
      message: error.message || 'Internal Server Error'
    }
  })
})

app.listen(3000, () => {
  console.log('server run on port 3000: http://127.0.0.1:3000')
})
