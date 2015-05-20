angular.module('Jarl')
    .controller('SignupCtrl', function($scope, $auth, $location) {
        $scope.signup = function() {
            $auth.signup({
                displayName: $scope.displayName,
                email: $scope.email,
                password: $scope.password

            })
            .then(function(){
                $location.path('/profile')
            })
            .catch(function(response) {
                if (typeof response.data.message === 'object'){
                    angular.forEach(response.data.message, function(message){
                        alert(message[0])
                    })
                }
                else{
                    alert(response.data.message)
                }
            })
        }
    })