var Post = require('./model')
var User = require('../auth/model')

exports.findPostAll = function(req, res){

	Post.find({}).populate('user').exec()
		.then(function(posts){
			var postsFixed = posts.map(function(post){
				return post.toJSON()
			})

			res
				.status(200)
				.set('Content-Type', 'application/json')
				.json(postsFixed)
							
		}, function(err){
			return err.message
		})
}
exports.createNewPost = function(req, res){
	var usuario = req.user;
	console.log(usuario)

	var post = new Post({
		title: req.body.title,
		descripcion: req.body.descripcion,
		body: req.body.body,
		user: req.user
	})

	post.save(function(err, post){
		if(err)
			return err.message
		res
			.status(201)
			.send(post)
	})
}