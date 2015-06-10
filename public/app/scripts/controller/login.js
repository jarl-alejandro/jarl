angular.module("Jarl")
    .controller('LoginCtrl', function($scope, $auth, $location){
        $scope.login = function(){
            $auth.login({ email:$scope.email, password:$scope.password  })
            .then(function(){
                $location.path('/profile')
            })
            .catch(function(res){
                alert(res)
            })
        }
    })
