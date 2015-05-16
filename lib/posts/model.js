var mongoose = require('mongoose')
var User = mongoose.model('User')
var Schema = mongoose.Schema

var PostSchema = new Schema({
	title: String,
	descripcion: String,
	body: String,
	user : { type:Schema.ObjectId, ref:"User" }
})

PostSchema.set('toJSON', {
     transform: function (doc, ret, options) {
         ret.id = ret._id;
         delete ret._id;
         delete ret.__v;
     }
})

var Post = mongoose.model('Post', PostSchema)
module.exports = Post