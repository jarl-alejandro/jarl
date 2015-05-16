angular.module('Jarl')
    .controller('SignupCtrl', function($scope, $alert, $auth, $location) {
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
                    angular.forEach(response.data.message, function(message) {
                        $alert({
                            content: message[0],
                            animation: 'fadeZoomFadeDown',
                            type: 'material',
                            duration: 3
                        })
                    })
                }
                else{
                    $alert({
                        content: response.data.message,
                        animation: 'fadeZoomFadeDown',
                        type: 'material',
                        duration: 3
                    })
                }
            })
        }
    })