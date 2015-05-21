var express = require('express')
var router = express.Router()
var middleware = require('./helpers/middleware')
var home = require('./home')
var auth = require('./auth')
var post = require('./posts')

var Router = function(app){

	router.get('/', home.index)

	// auth
	router.post('/auth/signup', auth.emailSignup)
	router.post('/auth/login', auth.emailLogin)
	
	router.get('/api/me', middleware.ensureAuthenticated, auth.me)

	// posts
	router.get('/api/posts', post.findPostAll)
	router.get('/api/posts/:id', post.findOnePost)
	router.post('/api/posts', middleware.ensureAuthenticated, post.createNewPost)

	app.use(router)
}

module.exports = Router