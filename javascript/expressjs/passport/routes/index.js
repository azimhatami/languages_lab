const { Router } = require('express');
const { hashSync } = require('bcrypt');
const { userModel } = require('../models/user.model');
const { redirectIfIsAuth, checkAuthentication } = require('../middleware/middleware');

const router = Router();


function initRoutes(passport) {
  router.get('/', (req, res) => {
      res.render('index', {title: 'Home Page'})
  })
  
  router.get('/login', redirectIfIsAuth, (req, res) => {
      res.render('login', {title: 'Login Page'})
  })
  
  router.post('/login', redirectIfIsAuth, passport.authenticate('local', { successRedirect: '/profile', failureRedirect: '/login', failureFlash: true }), async (req, res, next) => {
    // res.redirect('/profile')
    next() // for error handling
  })
  
  router.get('/register', redirectIfIsAuth, (req, res) => {
      res.render('register', {title: 'Rgister Page'})
  })
  
  router.post('/register', redirectIfIsAuth, async (req, res, next) => {
    try {
      console.log('Register request recived: ', req.body);
      const {fullname: fullName, username, password} = req.body;
      const hashPassword = hashSync(password, 10);
      const user = await userModel.findOne({username})
      if (user) {
        // const referrer = req?.header('Referrer') ?? req.headers.referrer
        const referrer = req.get('Referrer') ?? '/register';
        req.flash('error', 'this username already exist');
        return res.redirect(referrer ?? '/register')
      }
      await userModel.create({
        fullName,
        username,
        password: hashPassword
      })
      res.redirect('/login')
    } catch (error) {
      next(error)
    }
  })
  
  router.get('/profile', checkAuthentication, (req, res) => {
      const user = req.user || {}; // If the user does not exist, return an empty object.
      res.render(
        'profile', 
        {
          title: 'Profile Page',
          user
        }
      )
  })

  router.get('/logout', checkAuthentication, (req, res) => {
    // req.logOut({keepSessionInfo: false}, (error) => {
    req.logOut((error) => {
      if (error) console.log(error); 
    })
    res.redirect('/login')
  })
  return router;
}


module.exports = initRoutes
