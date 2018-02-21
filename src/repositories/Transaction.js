const {sequelize} = require('./dbContext')



module.exports = async function (options) {
  return sequelize.transaction(options)
}  
