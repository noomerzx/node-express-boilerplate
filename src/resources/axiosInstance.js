let axios = require('axios')
let { url } = require('../utils/constant')

const otherService = axios.create({
  baseURL: url().otherService,
  timeout: 60000
})

module.exports = {
  async doSomething (params) {
    return otherService.get('/foo', params)
  }
}



