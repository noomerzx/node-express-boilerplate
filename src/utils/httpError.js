module.exports = function (status, message) {
  let err = new Error(message)
  err.status = status
  err.expose = true
  return err
}
