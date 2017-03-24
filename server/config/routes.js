
var users = require('../controllers/users')

function routes(app) {

  app.post('/api/users/login', users.login)
  app.get('/api/users/logout', users.logout)
  app.get('/api/users/getSession', users.getUserSession)

}

module.exports = routes
