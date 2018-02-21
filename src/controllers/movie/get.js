const { Movie } = require('../../response/models')
const { getAll } = require('../../services/movie')

module.exports = async function (req, res) {
  const { limit, offset, sort, order } = req.query
  let { data, count } = await getAll(limit, offset, sort, order)
  let response = {
    data: new Movie(data),
    count: count
  }
  res.send(response)
}
