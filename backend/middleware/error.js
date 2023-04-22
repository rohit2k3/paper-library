const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  //wrong mongodb id or CastError
  if (err.name === "CastError") {
    err = new ErrorHandler(`Resource not found, Invalid: ${err.path}`, 400);
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    status: false,
    message: err.message,
  });
};
