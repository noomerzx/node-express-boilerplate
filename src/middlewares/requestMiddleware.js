module.exports = function (req, res, next) {
  req.auth = {
    storeId: 1,
    userId: 1
  }
  next()
}