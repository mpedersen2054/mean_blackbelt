
angular.module('myApp')
.controller('LoginCtrl',
['$scope', 'UserFactory', '$location', function($scope, UserFactory, $location) {

  $scope.loginForm = {}
  $scope.user = {}

  $scope.loginUser = function() {
  	console.log($scope.loginForm)
    // do validation here
  	UserFactory.loginUser($scope.loginForm.username, function(){
      // doesnt need to get any data because no matter what is entered
      // the username will either be created or retrieved
  		$location.url('/dashboard')
  	})
  }

}])
