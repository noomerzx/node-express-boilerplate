const camelCase = require('camelcase')
const fs = require('fs')
const beautify = require('js-beautify')
const replace = require('replace-in-file')

module.exports = {
  writeFile(outputPath, data, tableName) {
    let fileName = camelCase(tableName)
    let modelName = fileName.replace(fileName.charAt(0), fileName.charAt(0).toUpperCase())
    const stringFile = `const {sequelize, Sequelize, dbUtil} = require('./dbContext') \n const ${modelName} = sequelize.define( '${fileName}' , ` + JSON.stringify(data.attributes) + ',' + JSON.stringify(data.tableDetail) + `) \n module.exports = ${modelName}`
    data = beautify(stringFile, { 
      indent_size: 2,
      jslint_happy: true
    })
    fs.writeFileSync(`${outputPath + fileName}.js`, data, 'utf8')
    try {
      replace.sync({
        files: `${outputPath + fileName}.js`,
        from: /["][$]|[$]["]/g,
        to: ''
      })
      replace.sync({
        files: `${outputPath + fileName}.js`,
        from: /["]/g,
        to: '\''
      })
      logSuccess(fileName)
    }
    catch (error) {
      console.error('Error occurred:', error)
    }
  }
}

function logSuccess (fileName) {
  let dash = 30 - (fileName.length)
  let str = `Create -- ${fileName}.js `
  for (let i = 0; i < dash; i++) {
    str += '-'
  }
  str += ' successfully !!'
  console.log(str)
}