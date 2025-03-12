const { validationMapper } = require('./expressValidationMapper');
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
    statusCode: err.status || err.statusCode || 500,
    error: {
      message: err.message || 'Internal Server Error',
      invalidParams: validationMapper(err)
    }
  })
}


module.exports = {
  notFoundError,
  errorHandler
}
