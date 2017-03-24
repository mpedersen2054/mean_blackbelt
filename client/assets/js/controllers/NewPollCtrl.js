
angular.module('myApp')
.controller('NewPollCtrl',
['$scope', 'UserFactory', 'PollFactory', '$location', function($scope, UserFactory, PollFactory, $location) {

  $scope.user = {}
  $scope.newPoll = {}
  $scope.errors = []

  UserFactory.getUserSession(function(user) {
    if (user) {
      $scope.user  = user
    } else {
      $location.url('/')
    }
  })

  $scope.addPoll = function() {
    // refresh errors arr
    $scope.errors = []
    // frontend validations
    if (!$scope.newPoll.title || $scope.newPoll.title.length < 8) {
      $scope.errors.push('Please make the title at least 8 characters in length')
    }
    if (!$scope.newPoll.option1 || !$scope.newPoll.option1.name || $scope.newPoll.option1.name.length < 3) {
      $scope.errors.push('Please make the option1 name at least 3 characters in length')
    }
    if (!$scope.newPoll.option2 || !$scope.newPoll.option2.name || $scope.newPoll.option2.name.length < 3) {
      $scope.errors.push('Please make the option2 name at least 3 characters in length')
    }
    if (!$scope.newPoll.option3 || !$scope.newPoll.option3.name || $scope.newPoll.option3.name.length < 3) {
      $scope.errors.push('Please make the option3 name at least 3 characters in length')
    }
    if (!$scope.newPoll.option4 || !$scope.newPoll.option4.name || $scope.newPoll.option4.name.length < 3) {
      $scope.errors.push('Please make the option4 name at least 3 characters in length')
    }

    // if there are no errors, continue with adding the poll
    if ($scope.errors.length < 1) {
      PollFactory.create($scope.newPoll, function(err) {
        if (!err) {
          $scope.newPoll = {}
          $location.url('/dashboard')
        }
      })
    }
  }

}])
