
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
    console.log(req.body)
    var pid = req.body.pid
    var optNum = req.body.optNum
    var updOptionQuery

    // create the correction $inc query based on the option# passed in
    if (optNum == 'option1') { updOptionQuery = { $inc: { 'option1.votes': 1 } } }
    if (optNum == 'option2') { updOptionQuery = { $inc: { 'option2.votes': 1 } } }
    if (optNum == 'option3') { updOptionQuery = { $inc: { 'option3.votes': 1 } } }
    if (optNum == 'option4') { updOptionQuery = { $inc: { 'option4.votes': 1 } } }

    // new: true makes sure it returns the updated doc
    Poll.findOneAndUpdate({ _id: pid }, updOptionQuery, { new: true }, function(err, poll) {
      if (!err && poll) {
        res.json({ success: true, poll })
      }
    })
  },

  deletePoll: function(req, res) {
    Poll.findOne({ _id: req.body.pid }, function(err, poll) {
      if (err || !poll) {
        res.json({ success: false, polls: null })
      } else {
        poll.remove(function(err) {
          Poll.find({})
            .populate('_creator')
            .exec(function(err, polls) {
              res.json({ success: true, polls })
            })
        })
      }
    })
  }

}

module.exports = controller
