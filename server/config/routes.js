
var users = require('../controllers/users')
var polls = require('../controllers/polls')

function routes(app) {

  // user routes
  app.post('/api/users/login', users.login)
  app.get('/api/users/logout', users.logout)
  app.get('/api/users/getSession', users.getUserSession)

  // poll routes
  app.get('/api/polls/getAll', polls.getAll)
  app.get('/api/polls/:pid', polls.getSingle)
  app.post('/api/polls/create', polls.create)
  app.post('/api/polls/incVote', polls.incVote)
  app.post('/api/polls/delete', polls.deletePoll)

}

module.exports = routes
