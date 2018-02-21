'use strict'

let connection = require('./src/DBCConector')
const tranformer = require('./src/createStructure')
const fileWriter = require('./src/fileWriter')
const { outputPath, dbConfig, dbTables } = require('./config')

async function main () {
  connection = new connection(dbConfig.host,dbConfig.username,dbConfig.password,dbConfig.schema)
  connection.dbConnect()
  console.log('Start converting database schema to model...')
  console.log(`--- Schema: ${dbConfig.schema} ---`)
  console.log(`--- Target: ${dbTables.length} tables ---`)
  console.log(`--- Output Path: "${outputPath}" ---`)
  
  dbTables.forEach(async element => {
    try {
      let elem = element.toLowerCase()
      let result = await connection.getSchema(elem)
      let model = tranformer(result, elem, dbConfig[3])
      fileWriter.writeFile(outputPath, model, elem)
    } catch (e) {
      console.log(e)
    }
  })
  connection.dbDisConnect()
}

main()