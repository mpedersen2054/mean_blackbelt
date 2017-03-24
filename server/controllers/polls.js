
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
    Poll.findOne({ _id: req.params.pid }, function(err, poll) {
      if (err || !poll) {
        res.json({ success: false, poll: null })
      } else {
        res.json({ success: true, poll })
      }
    })
  },

  create: function(req, res) {
    if (!req.body) {
      res.json({ success: false, polls: null })
    } else {
      var newPoll = new Poll(req.body)
      newPoll._creator = req.session.user
      newPoll.save(function(err) {
        Poll.find({})
          .populate('_creator')
          .exec(function(err, polls) {
            res.json({ success: true, polls })
          })
      })
    }
  },

  incVote: function(req, res) {
    res.send('hello polls.incVote!')
  }

}

module.exports = controller
