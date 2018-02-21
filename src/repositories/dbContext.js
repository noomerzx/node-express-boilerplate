const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const dbUtil = require('../utils/db')

const sequelize = new Sequelize(dbConfig[process.env.NODE_ENV].database, dbConfig[process.env.NODE_ENV].username, dbConfig[process.env.NODE_ENV].password, {
  host: dbConfig[process.env.NODE_ENV].host,
  dialect: dbConfig[process.env.NODE_ENV].dialect,
  logging: process.env.DB_LOGGING ? console.log : console.log
})
const op = Sequelize.Op

module.exports = {
  sequelize,
  Sequelize,
  op,
  dbUtil
}
