const { validationResult } = require('express-validator');


function checkValidation(req, res, next) {
  const error = validationResult(req);
  const obj = {};
  error?.errors?.forEach(err => {
    obj[err.path] = err.msg
  })

  if (Object.keys(obj).length > 0) {
//    const validError = {
//      status: 400,
//      error: obj,
//      message: "validation error"
//    }
//    return next(validError);
    throw {
      status: 400,
      error: obj,
      message: "Validation error"
    }
  }
  next()
}


module.exports = {
  checkValidation
}
