var IO = require('socket.io')
var Comments = require('./model')

var Comment = function(config){
	config = config || {}
	var io = IO.listen(config.server)

	io.on('connection', function(socket){
		socket.on('send::message', function(data){
			
			var comment = new Comments({
				title: data.comment,
				user: data.user.id,
				post: data.post.id
			})

			comment.save(function(err){
				if(err)
					return err.message
				else
					io.emit('get::message', data)
			})	
	    })

	    
	})
}

module.exports = Comment