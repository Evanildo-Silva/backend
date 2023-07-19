const server = require('./config/server')
require('./config/database')
require('./config/routes')(server) // Passando o server e invocando o método.
