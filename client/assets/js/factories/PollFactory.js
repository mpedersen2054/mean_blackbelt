
angular.module('myApp')
.factory('PollFactory', ['$http', function($http) {

  var polls = []
  var factory = {}

  factory.getAll = function(callback) {
    $http.get(`/api/polls/getAll`)
      .then(function(response) {
        var data = response.data
        polls = data.polls
        callback(polls)
      })
  }

  factory.getSingle = function(pid, callback) {
    $http.get(`/api/polls/${pid}`)
      .then(function(response) {
        var data = response.data
        if (!data.success) {
          callback('Poll not found', null)
        } else {
          callback(null, data.poll)
        }
      })
  }

  factory.create = function(pollData, callback) {
    $http.post(`/api/polls/create`, pollData)
      .then(function(response) {
        var data = response.data
        if (!data.success) {
          callback('Something went wrong!', null)
        } else {
          callback(null, data.polls)
        }
      })
  }

  factory.deletePoll = function(pid, callback) {
    $http.post(`/api/polls/delete`, { pid: pid })
      .then(function(response) {
        var data = response.data
        if (!data.success) {
          callback('Poll not found', null)
        } else {
          callback(null, data.polls)
        }
      })
  }

  return factory

}])
