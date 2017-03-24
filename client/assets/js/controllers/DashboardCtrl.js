
angular.module('myApp')
.controller('DashboardCtrl', ['$scope', 'UserFactory', 'PollFactory', '$location', function($scope, UserFactory, PollFactory, $location) {

  $scope.user = {}
  $scope.polls = []
  $scope.filterText = ''

  UserFactory.getUserSession(function(user) {
    console.log(user, 'from ctrl!')
    if (user) {
      $scope.user  = user

      // get polls
      PollFactory.getAll(function(polls) {
        $scope.polls = polls
      })
    } else {
      $location.url('/')
    }
  })

  $scope.logout = function() {
    UserFactory.logoutUser(function(success) {
      if (success) {
        $location.url('/')
      }
    })
  }

  $scope.deletePoll = function(pid) {
    PollFactory.deletePoll(pid, function(err, polls) {
      if (!err) {
        $scope.polls = polls
      }
    })
  }

}])
