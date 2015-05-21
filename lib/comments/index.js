var Comments = require('./model')
var IO = require('socket.io')
var middleware = require('../helpers/middleware')

var Comment = function(config){
	config = config || {}
	var io = IO.listen(config.server)

	/*io.use(function(socket, next){
		//middleware.ensureSocket(socket.request, socket.request.res, next)
	})*/

	io.on('connection', function(socket){
		socket.on('send::message', function(data){
			console.log(data)
			lol = {
				data:data,
				user: "Alejandro Rivas"
			}
			io.emit('get::message', lol)
	    })		
	})

}

module.exports = Comment