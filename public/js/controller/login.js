angular.module("Jarl")
	.controller('LoginCtrl', function($scope, $auth, $location, $alert){
	
		$scope.login = function(){
			$auth.login({ email:$scope.email, password:$scope.password  })
				.then(function(){
					$location.path('/profile')
				})
				.catch(function(res){
					$alert({
		                content: 'You have been logged out',
		                animation: 'fadeZoomFadeDown',
		                type: 'material',
		                duration: 3
	            	})
				})
		}
	})
