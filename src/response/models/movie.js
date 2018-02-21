class Movie {
  constructor (rows) {
    let response = []
    rows.forEach(row => {
      response.push({
        id: row.id,
        name: row.name
      })
    })
    return response
  }
}

module.exports = Movie
