class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.status = 400;
  }
}
class NotAuthorizedError extends ValidationError {
  constructor(message) {
    super(message);
    this.status = 401;
  }
}
class ConflictError extends ValidationError {
  constructor(message) {
    super(message);
    this.status = 409;
  }
}

module.exports = {
    ValidationError,
  NotAuthorizedError,
  ConflictError
}