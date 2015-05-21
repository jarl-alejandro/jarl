angular.module('Jarl')
	.controller('postDetailCtrl', function($scope, $stateParams, Account, PostResource, socket){
		$scope.post = PostResource.get({ id:$stateParams.id })
		  $scope.messages = []

		$scope.saveComment = function(){
			var message = {
				'comment': $scope.commentTxt
			}
		
			socket.emit('send::message', message)
			$scope.commentTxt = null
		}

		socket.on('get::message', function (data) {
			$scope.messages.unshift(data)
            $scope.$digest()
        })

	})