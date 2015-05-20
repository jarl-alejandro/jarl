angular.module('Jarl')
	.factory("PostResource", function($resource){
		return $resource('/api/posts/:id', { id:"@id" }, { update:{ method:"PUT" } })
	})