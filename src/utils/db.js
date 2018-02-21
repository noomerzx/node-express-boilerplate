const Sequelize = require('sequelize')
const SqlString = require('sqlstring')

module.exports = {
  createWhereCondition (queryBinding) {
    let returnedValue = {}
    queryBinding.forEach((item) => {
      if (!returnedValue[item.prefix]) {
        returnedValue[item.prefix] = {}
      }
      if (item.value !== undefined && item.value !== null) {
        let value = item.value
        if (Array.isArray(value) && item.quote) {
          value = item.map(item => `${SqlString.escape(item)}`).join(',')
        } else if (item.quote) {
          value = `${SqlString.escape(value)}`
        }

        // console.log(value)
        switch (item.condition) {
        case 'LIKE': returnedValue[item.prefix][item.field] = `${item.prefix}.${item.field} LIKE ${value}`; break
        case 'IN': returnedValue[item.prefix][item.field] = `${item.prefix}.${item.field} IN (${value})`; break
        case '=': returnedValue[item.prefix][item.field] = `${item.prefix}.${item.field} = ${value}`; break
        case '!=': returnedValue[item.prefix][item.field] = `${item.prefix}.${item.field} != ${value}`; break
        case 'IS': returnedValue[item.prefix][item.field] = `${item.prefix}.${item.field} IS ${value}`; break
        case '>': returnedValue[item.prefix][item.field] = `${item.prefix}.${item.field} > ${value}`; break
        case '<': returnedValue[item.prefix][item.field] = `${item.prefix}.${item.field} < ${value}`; break
        default: returnedValue[item.prefix][item.field] = value; break
        }
      } else {
        returnedValue[item.prefix][item.field] = true
      }
    })
    return returnedValue
  }
  // createBindOption (params) {
  //   let bind = {}
  //   Object.keys(params.where).forEach((key) => {
  //     bind[key] = params.where[key]
  //   })
  //   Object.keys(params.otherOptions).forEach((key) => {
  //     bind[key] = params.otherOptions[key]
  //   })
  //   return {
  //     raw: true,
  //     replacements: bind,
  //     type: Sequelize.QueryTypes.SELECT
  //   }
  // }
}
