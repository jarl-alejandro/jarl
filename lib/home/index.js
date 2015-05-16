var path = require('path')

exports.index = function(req, res){
	var template = path.join(__dirname, "templates", "index.html")
	res.sendFile(template)
}