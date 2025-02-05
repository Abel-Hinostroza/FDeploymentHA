function logErrors (err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  // if (err instanceof Error) {
  //   console.error(err.stack);
  //   return res.status(500).json({
  //     message: err.message,
  //   });
  // }
  next(err);
}

function errorHandler (err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomerrorHandler (err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
  next(err);
  }
}

module.exports = {logErrors, errorHandler, boomerrorHandler};
