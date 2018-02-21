const {sequelize, Sequelize, dbUtil} = require('./dbContext')

const Movie = sequelize.define('movie', {
  'id': {
    'type': Sequelize.STRING(16),
    'allowNull': false,
    'primaryKey': true,
    'field': 'id'
  },
  'name': {
    'type': Sequelize.STRING(7),
    'allowNull': true,
    'field': 'url'
  },
  'createTime': {
    'type': Sequelize.DATE,
    'allowNull': false,
    'field': 'create_time'
  },
  'updateTime': {
    'type': Sequelize.DATE,
    'allowNull': false,
    'field': 'update_time'
  }
}, {
  'tableName': 'bill',
  'freezeTableName': true,
  'underscored': true,  
  'timestamps': true,
  'createdAt': 'createTime',
  'updatedAt': 'updateTime'
})

Movie.customQuery = async function (params) {
  let sql = 'SELECT * from movie'
  let result = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT })
  return result
}

module.exports = Movie
