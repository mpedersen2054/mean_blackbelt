
angular.module('myApp')
.controller('DashboardCtrl', ['$scope', 'UserFactory', '$location', function($scope, UserFactory, $location) {

  $scope.hello = 'hello dashboard ctrl'

}])
