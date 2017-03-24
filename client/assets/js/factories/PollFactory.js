
angular.module('myApp')
.factory('PollFactory', ['$http', function($http) {

  var polls = []
  var factory = {}

  factory.getAll = function(callback) {
    $http.get('/api/polls/getAll')
      .then(function(response) {
        var data = response.data
        polls = data.polls
        callback(polls)
      })
  }

  return factory

}])
