const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express() // startar o express - criar instância do express.

server.use(bodyParser.urlencoded({ extended: true })) // midleware
server.use(bodyParser.json())

server.listen(port, function () {
  console.log(`BACKEND is running on port ${port}`)
})

module.exports = server