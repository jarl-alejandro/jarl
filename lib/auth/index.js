
var User = require('./model')
var service = require('../helpers/service')
var config = require('../../config')
var request = require('request')
var qs = require('querystring')

exports.me = function(req, res){
	User.findById(req.user, function(err, user){
		res.send(user)
	})
}

exports.emailLogin = function(req, res){
	User.findOne({ email: req.body.email }, '+password', function(err, user){
		if (!user){
			return res.status(401).send({ message: 'Wrong email and/or password' })
		}

		user.comparePassword(req.body.password, function(err, isMatch){
			if (!isMatch){
				return res.status(401).send({ message:'Wrong email or password' })
			}
			res.send({ token: service.createJWT(user) })
		})
	})
}

exports.emailSignup = function(req, res){
	User.findOne({ email: req.body.email }, function(err, existingUser){
		if(existingUser){
			return res.status(409).send({ message: 'Email is already taken' })
		}

		var user = new User({
			displayName: req.body.displayName,
			email: req.body.email,
			password: req.body.password
		})

		user.save(function(){
			res.send({ token: service.createJWT(user) })
		})
		
	})
}