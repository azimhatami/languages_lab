const { validationMapper } = require('./joiValidationMapper');
const notFoundError = (req, res, next) => {
  res.status(404).json({
    statusCode: res.statusCode,
    error: {
      type: 'Not Found',
      message: `not found ${req.url} route`
    }
  })
};


const errorHandler = (err, req, res, next) => {
  res.json({
    statusCode: err.status || 500,
    error: {
      message: err.message?.replace(/[\"\'\\]*/g, '') || 'Internal Server Error',
      // invalidParams: validationMapper(err)
    }
  })
}


module.exports = {
  notFoundError,
  errorHandler
}
