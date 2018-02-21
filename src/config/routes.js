const movieController = require('../controllers/movie')

module.exports = {
  bill: [
    {
      methods: 'GET',
      path: '/',
      controller: movieController.get
    }
  ]
}
