
angular.module('myApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/landing.html',
      controller: 'LoginCtrl'
    })
    .when('/dashboard', {
      templateUrl: 'partials/landing.html',
      controller: 'LoginCtrl'
    })
    .when('/poll/:pid', {
      templateUrl: 'partials/landing.html',
      controller: 'LoginCtrl'
    })
    .when('/create', {
      templateUrl: 'partials/landing.html',
      controller: 'LoginCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
})
