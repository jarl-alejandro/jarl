angular.module('Jarl')
	.factory("socket", function(){
		var socket = io()
		return socket
	})