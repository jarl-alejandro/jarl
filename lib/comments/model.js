var mongoose = require('mongoose')
var Schema = mongoose.Schema

var CommentSchema = Schema({
	title: String,
	user : { type:Schema.ObjectId, ref:"User" },
	post : { type:Schema.ObjectId, ref:"Post" }
})


var model = mongoose.model('Comment', CommentSchema)
module.exoprts = model