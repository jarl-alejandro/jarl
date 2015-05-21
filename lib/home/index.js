var path = require('path')

exports.index = function(req, res){
	var template = path.join(__dirname, "..", "..", "public", "app", "index.html")
	res.sendFile(template)
}