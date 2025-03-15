const express = require('express');
const cookieParser = require('cookie-parser');


const app = express();
app.use(cookieParser('51c1cd3b4589ac18f98d46a2d2f074c072df7801'))

app.get('/set-cookie', (req, res) => {
  // const d = new Date();
  res.cookie('cookieName', 'cookieValue', {
    maxAge: 5000,
    // expires: new Date(d.setTime() + 5000)
    httpOnly: true,
    signed: true,
    secure: true
  })
  res.cookie('tutor', 'javascript, typescript')
  res.cookie('devops', 'docker, ansible')
  res.send('cookie save successfully')
})

app.get('/get-cookie', (req, res) => {
  const cookies = req.cookies;
  const signedCookies = req.signedCookies;
  res.send({cookies, signedCookies})
})

app.get('/clear-cookie', (req, res) => {
  res.clearCookie('devops'); 
  res.send('Cookie has been cleared!');
});

app.listen(3000, () => {
  console.log('server run on port 3000: http://localhost:3000');
})
