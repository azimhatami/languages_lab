function notFoundError(req, res, next) {
  res.send({
    statusCode: 404,
    message: 'NOT FOUND PAGE'
  })
}

function errorHandler(err, req, res, next) {
  const status = err?.status ?? err?.statusCode ?? 500;
  res.send({
    statusCode: status,
    message: err?.message ?? 'Internal Server Error'
  })
}


module.exports = {
  notFoundError,
  errorHandler
}
