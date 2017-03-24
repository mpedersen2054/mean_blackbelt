
angular.module('myApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/landing.html',
      controller: 'LoginCtrl'
    })
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'DashboardCtrl'
    })
    .when('/poll/:pid', {
      templateUrl: 'partials/single_poll.html',
      controller: 'SinglePollCtrl'
    })
    .when('/create', {
      templateUrl: 'partials/new_poll.html',
      controller: 'NewPollCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
})
