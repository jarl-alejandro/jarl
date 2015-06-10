var Comments = require('./model')

exports.findAllComments = function(req, res){
	
	Comments.find({}).populate('user').populate('post').exec()
	.then(function(comments){
		res.json(comments)
	}, function(err){
		return err.message
	})
}