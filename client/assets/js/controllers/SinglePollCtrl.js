
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
          // if the poll was not found
          location.url('/dashboard')
        } else {
          $scope.poll = poll
        }
      })
    } else {
      $location.url('/')
    }
  })

}])
