angular.module('Jarl')
	.controller('newPostCtrl', function($scope, $location, PostResource){

		$scope.post = {}

		$scope.savePost = function(){
			PostResource.save({
				'title': $scope.post.title,
				'body': $scope.post.body,
				'descripcion': $scope.post.descripcion
			}, function(data){
				$location.path('/profile')
				console.log(data)
			})
		}	
	})