
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var cors = require('cors')
var Router = require('./router')

var App = function(config){
	config = config || {}

	this.app = express()
	this.app.use(cors())

	this.app.use(express.static(path.join(__dirname, '..', 'public')))
    this.app.use(bodyParser.json())

    new Router(this.app)
}

module.exports = App