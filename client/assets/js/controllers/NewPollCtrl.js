
angular.module('myApp')
.controller('NewPollCtrl', ['$scope', 'UserFactory', '$location', function($scope, UserFactory, $location) {

  $scope.hello = 'hello new poll ctrl'

}])
