const notFoundError = (req, res, next) => {
  return res.status(404).json({
    statusCode: res.statusCode,
    error: {
      type: 'Not Found',
      message: `not found ${req.url} route`
    }
  })
};


const errorHandler = (error, req, res, next) => {
  return res.json({
    statusCode: res.status || 500,
    error: {
      message: error.message || 'Internal Server Error'
    }
  })
};


module.exports = {
  notFoundError,
  errorHandler
}
