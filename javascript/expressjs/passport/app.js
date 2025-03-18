const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv');
const flash = require('express-flash');
const session = require('express-session');
const passport = require('passport');
const allRoutes = require('./routes/index');

const { default: mongoose } = require('mongoose');
const { notFoundError, errorHandler } = require('./utils/errorHandling');
const { passportInit } = require('./passport.config');


dotenv.config()
const app = express();

mongoose.connect(process.env.DB_URL).then(() => {
  console.log('connected to mongodb');
}).catch((err) => {
  console.log('Error connecting to MongoDB', err);
})

// Setup application
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(flash())

// Setup view engine and layout
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('layout', './layout/main.ejs');

// Setup sessions
app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: false,
  // cookie: { secure: false } 
}));

// Setup passport
passportInit(passport)
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(allRoutes(passport))


// Error Handling
app.use(notFoundError)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server runing on port ${PORT}`);
});
