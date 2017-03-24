
var Poll = require('../models/poll')
var User = require('../models/user')

var controller = {

  getAll: function(req, res) {
    Poll.find({})
      .populate('_creator')
      .exec(function(err, polls) {
        if (!err && polls) {
          res.json({ success: true, polls })
        }
      })
  },

  getSingle: function(req, res) {
    res.send('hello polls.getSingle!')
  },

  create: function(req, res) {
    res.send('hello polls.create!')
  },

  incVote: function(req, res) {
    res.send('hello polls.incVote!')
  }

}

module.exports = controller
