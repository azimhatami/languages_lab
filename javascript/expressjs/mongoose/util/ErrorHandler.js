const notFoundError = (req, res, next) => {
  res.status(404).json({
    statusCode: res.statusCode,
    error: {
      type: 'Not Found',
      message: `Not Found ${req.url} route`
    }
  })
}


const errorHandler = (err, req, res, next) => {
  return res.json({
    statusCode: res.status || 500,
    error: {
      message: err.message || 'Internal Server Error'
    }
  })
}

module.exports = {
  notFoundError,
  errorHandler
}
