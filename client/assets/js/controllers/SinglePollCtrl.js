
angular.module('myApp')
.controller('SinglePollCtrl', ['$scope', 'UserFactory', '$location', function($scope, UserFactory, $location) {

  $scope.user = {}

  UserFactory.getUserSession(function(user) {
    if (user) {
      $scope.user  = user
    } else {
      $location.url('/')
    }
  })

}])
