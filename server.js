var http = require('http')
var App = require('./lib')
var mongoose = require('mongoose')
var socketIO =  require('./lib/comments')

var jarl = new App({})
var server = http.createServer(jarl.app)
var IO = new socketIO({ server:server })

mongoose.connect('mongodb://localhost/joel', onListenDB)

function onListenDB(err){
	if(err)
		return err.message
}

server.listen(3000, function(){
	console.log('server in http://localhost:3000')
})