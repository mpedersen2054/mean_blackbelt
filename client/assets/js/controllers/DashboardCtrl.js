
angular.module('myApp')
.controller('DashboardCtrl', ['$scope', 'UserFactory', 'PollFactory', '$location', function($scope, UserFactory, PollFactory, $location) {

  $scope.user = {}
  $scope.polls = []

  UserFactory.getUserSession(function(user) {
    console.log(user, 'from ctrl!')
    if (user) {
      $scope.user  = user

      // get polls
      PollFactory.getAll(function(polls) {
        console.log(polls)
      })
    } else {
      $location.url('/')
    }
  })

}])
