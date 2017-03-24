
angular.module('myApp')
.controller('SinglePollCtrl',
['$scope', 'UserFactory', 'PollFactory', '$location', '$routeParams', function($scope, UserFactory, PollFactory, $location, $routeParams) {

  $scope.user = {}
  $scope.poll = {}

  UserFactory.getUserSession(function(user) {
    if (user) {
      $scope.user  = user

      PollFactory.getSingle($routeParams.pid, function(err, poll) {
        if (err || !poll) {
          location.url('/dashboard')
        } else {
          $scope.poll = poll
        }
      })
    } else {
      $location.url('/')
    }
  })

  $scope.incVote = function(optNum) {
    PollFactory.incVote($scope.poll._id, optNum, function(poll) {
      $scope.poll = poll
    })
  }

}])
