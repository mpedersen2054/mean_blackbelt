
angular.module('myApp')
.controller('DashboardCtrl', ['$scope', 'UserFactory', '$location', function($scope, UserFactory, $location) {

  $scope.user = {}

  console.log(UserFactory)
  UserFactory.getUserSession(function(user) {
    console.log(user, 'from ctrl!')
    if (user) {
      $scope.user  = user
    } else {
      $location.url('/')
    }
  })

}])
