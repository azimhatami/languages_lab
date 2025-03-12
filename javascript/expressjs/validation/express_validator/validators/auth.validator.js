const { body } = require('express-validator');


const loginValidator = () => [
  body('email').isEmail().withMessage('Email is invalid'),
  body('password').isLength({min: 6, max: 20})
]

const registerValidator = () => [
  body('fullName').isLength({min: 5, max: 24}).withMessage('Full name is invalid'),
  body('age').custom((value => {
    if (isNaN(value)) {
      throw new Error('Age must be a number. Please enter a valid numeric value')
    } else if (+value > 90 || +value < 12) {
      throw new Error(' Age must be between 12 and 90. Please enter a valid age within this range')
    }
    return true;
  })),
  body('mobile').isMobilePhone(['fa-IR', 'en-US']).withMessage('Mobile format is invalid'),
  body('email').isEmail().withMessage('Email is invalid'),
  body('password').isLength({min: 6, max: 20}).withMessage('Password is invalid'),
  body('confirmPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('The passwords do not match. Please make sure both fields are identical');
    }
    return true;
  })
]


module.exports = {
  loginValidator,
  registerValidator
}
