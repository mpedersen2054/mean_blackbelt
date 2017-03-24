
angular.module('myApp')
.controller('SinglePollCtrl', ['$scope', 'UserFactory', '$location', function($scope, UserFactory, $location) {

  $scope.hello = 'hello single poll ctrl'

}])
