
var User = require('../models/user')

var controller = {

  login: function(req, res) {
    User.findOne({username: req.body.username}, function(err, user){
    	if(!user){
    		var newUser = new User(req.body)
    		newUser.save(function(err, user){
    			if (err) {
    				console.log('error saving')
    			}else {
    				req.session.user = user
            console.log('logging in!', user)
    				res.json({success: true, user: user})
    			}
    		})
    	}else {
    		req.session.user = user
        console.log('logging in!', user)
    		res.json({success: true, user: user})
    	}
    })
  },

  getUserSession: function(req, res){
  	var session = req.session
  	res.json({session: session})
  },

  logout: function(req, res){
  	req.session.destroy(function(err){
  		if(err){
  			res.json({success: false})
  		}else {
  			res.json({success: true})
  		}
  	})
  }

}

module.exports = controller
