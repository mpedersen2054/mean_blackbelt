
var PORT = process.env.PORT || 8000

var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var session = require('express-session')

var app = express()

// load in db config, go into this file and change
// the connection string to match the db you wish to use
require('./server/config/dbConnection')

// get frontend assets from client/bower_components
// so in html (for example) when refering to files you can exclude
// appName/client/xyz.js, just have it reference xyz.js
app.use(express.static(path.join(__dirname, 'client')))
app.use(express.static(path.join(__dirname, 'bower_components')))
app.use(bodyParser.json())
app.use(session({
  secret: 'hey jack',
  resave: false,
  saveUninitialized: true
}))

// load in routes
require('./server/config/routes')(app)

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`)
})
