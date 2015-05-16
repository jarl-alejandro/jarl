angular.module('Jarl')
    .controller('ProfileCtrl', function($scope, $auth, $alert, Account, PostResource) {
        $scope.getProfile = function(){
            Account.getProfile()
            .success(function(data){
                $scope.user = data
            })
            .error(function(error) {
                $alert({
                    content: error.message,
                    animation: 'fadeZoomFadeDown',
                    type: 'material',
                    duration: 3
                })
            })
        }

        $scope.getProfile()
        $scope.posts = PostResource.query()
    })