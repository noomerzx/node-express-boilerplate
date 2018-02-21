# Node Express Boilerplate
A boilterplate for node.js + express.js with all necessary module
<br>
> There is a lot of node.js web framework but can't denie that express is the most popular and have an active community.
<br>
> But the problem of express is.. that you need to install what ever you need by yourself some said this is good, but some said it's bad for beginner
> because you may don't know which module can get your work done ! and that why I've created this boilerplate with all neccessary module to complete web work flow.

----------------------------------------
## Dependencies
* Axios : For http request job
* Body-Parse : For extract post body data
* Cors : For manage cross origin
* Express : Of course to build our web app
* Morgan : For logging
* Sequelize : ORM
* Jsonwebtoken : For JWT management
* Humps : For transformation object between any cases (snake to camale or anythings)
* Sqlstring : For protect injection string (manual)

## Dev Dependencies
* Mysql/Mysql2 : For migration scripts
* Replace-In-File : For migration scripts
* Jest : For Unit Test
----------------------------------------
## Project Structure
* <b>src/config</b>: contains route and database config
* <b>src/controllers</b>: contain controllers
* <b>src/middlewares</b>: contain middlewares
* <b>src/migration</b>: contain migration scripts
* <b>src/repositories</b>: contain sequelize models
* <b>src/response</b>: contain response model
* <b>src/resources</b>: contain axios instance
* <b>src/services</b>: contain servers
* <b>src/utils</b>: utility scripts
* <b>test/unit</b>: unit test files
* <b>index.js</b>: bootstrap file (all things started here)

----------------------------------------
## Run Server

We already inject all dependencies in 'index.js', So you can start the server in one command.

``` bash
# start the server
npm run serve

```

As you know expree.js design that everythings is middlewares, So if you need to add or remove some module you can do it by yourself in index.js

----------------------------------------
## Migration

You can generate database table to sequelize model in just one command.

``` bash
# migrate db to model
npm run migration

```

But you need to config db connection and which table you need to generate model in 'src/migration/config.js' first, See the example below.

```javascript
{
  dbConfig: {
    host: '127.0.0.1',
    username: 'root',
    password: '',
    schema: 'noomerzx'
  },
  dbTables: [
    'Movie'
  ],
  outputPath: './src/repositories/'
}
```

----------------------------------------
## Test

``` bash
# run unit test
npm run test

```
