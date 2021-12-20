import { error } from '../../utils/response'

export function errorHandler(err, req, res, next) {
  const msnError = {
    statusCode: err.statusCode || 500,
    error: err.descStatus,
    message: err.message,
    stack: err.stack
  }
  error(req, res, msnError, 500)
  next()
}
