const model = require('../../repositories')
const { db } = require('../../utils/constant')
const utils = require('../../utils/transformData')
const humps = require('humps')
const httpError = require('../../utils/httpError')

module.exports = async function (limit, offset, sort, order) {
  // query with raw
  let result = humps.camelize(await model.movie.customQuery())

  // query by orm
  let resultCount = await model.movie.count()

  return {
    data: result,
    count: resultCount
  }
}
