
angular.module('myApp')
.factory('UserFactory', ['$http', function($http) {

  var user = {}
  var factory = {}

  factory.getUserSession = function(callback){
  	$http.get('/api/users/getSession')
  		.then(function(res){
  			if(res.data.session.user){
          user = res.data.session.user
  				callback(user)
  			}else {
  				callback(null)
  			}

  		})
  }

  factory.loginUser = function(loginForm, callback){
  	$http.post('/api/users/login', {username: loginForm})
  		.then(function(res){
  			if (res.data.success) {
  				user = res.data.user
  				callback()
  			}
  		})
  }

  factory.logoutUser = function(callback){
  	$http.get('/api/users/logout')
  		.then(function(res){
  			if (res.data.success) {
  				callback(true)
  			}else {
  				callback(false)
  			}
  		})
  }

  return factory

}])
