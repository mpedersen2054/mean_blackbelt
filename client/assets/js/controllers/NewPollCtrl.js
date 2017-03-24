
angular.module('myApp')
.controller('NewPollCtrl',
['$scope', 'UserFactory', 'PollFactory', '$location', function($scope, UserFactory, PollFactory, $location) {

  $scope.user = {}
  $scope.newPoll = {}

  UserFactory.getUserSession(function(user) {
    if (user) {
      $scope.user  = user
    } else {
      $location.url('/')
    }
  })

  $scope.addPoll = function() {
    PollFactory.create($scope.newPoll, function(err, polls) {
      if (!err) {
        $scope.newPoll = {}
        $location.url('/dashboard')
      }
    })
  }

}])
