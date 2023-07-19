const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express() // startar o express - criar instância do express.
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true })) // midleware
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function () {
  console.log(`BACKEND is running on port ${port}`)
})

module.exports = server